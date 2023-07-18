import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useScreenWidth from "../../hooks/useScreenWidth";
import Container from "../Container";
import RecipeCard from "../RecipeCard";
import defaultImage from "../../images/DefaultImage/defaultImage.svg";

import { fetchPreviewCategories } from "../../redux/thunk/previewCategories/operations";

import {
   CategoryItem,
   CategoryList,
   SeeAllButton,
   CategoryContainer,
   CategoryTitle,
   OtherCategoriesButton,
} from "./PreviewCategories.styled";

const PreviewCategories = () => {
   const dispatch = useDispatch();
   const [data, setData] = useState([]);
   const screenWidth = useScreenWidth();
   const navigate = useNavigate();

   const getCardCount = () => {
      if (screenWidth.mobile) {
         return 1;
      } else if (screenWidth.tablet) {
         return 2;
      } else if (screenWidth.desktop) {
         return 4;
      }
   };

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await dispatch(fetchPreviewCategories());
            const responseData = response.payload;
            const shuffledData = shuffleRecipes(responseData);
            setData(shuffledData);
         } catch (error) {
            console.error(error);
         }
      };

      fetchData();
   }, [dispatch]);

   const shuffleRecipes = (recipes) => {
      const shuffledRecipes = recipes.map((category) => {
         const shuffledMainPage = shuffleArray(category.mainPage);
         return { ...category, mainPage: shuffledMainPage };
      });

      return shuffledRecipes;
   };

   const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
   };


  const handleSeeAll = (category) => {
    window.scrollTo(0, 0); 
    navigate(`/categories/${category}`);
  };

  const handleOtherCategories = () => {
    window.scrollTo(0, 0); 
    navigate("/categories/breakfast");
  };


   return (
      <Container>
         {data
            .sort((a, b) => {
               const order = ["Breakfast", "Miscellaneous", "Chicken", "Dessert"];
               return order.indexOf(a._id) - order.indexOf(b._id);
            })
            .map((category, index) => (
               <CategoryContainer key={index}>
                  <CategoryTitle>
                     {category._id === "Dessert" ? "Desserts" : category._id}
                  </CategoryTitle>
                  <CategoryList>
                     {category.mainPage.slice(0, getCardCount()).map((recipe) => (
                        <CategoryItem key={recipe.id}>
                           <RecipeCard
                              name={recipe.title}
                              imageSrc={recipe.thumb || defaultImage}
                              recipeId={recipe.id}
                           />
                        </CategoryItem>
                     ))}
                  </CategoryList>
                  <SeeAllButton onClick={() => handleSeeAll(category._id.toLowerCase())}>
                     See All
                  </SeeAllButton>
               </CategoryContainer>
            ))}
         <div style={{ display: "flex", justifyContent: "center" }}>
            <OtherCategoriesButton onClick={handleOtherCategories}>
               Other Categories
            </OtherCategoriesButton>
         </div>
      </Container>
   );
};

export default PreviewCategories;
