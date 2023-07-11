
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { fetchPreviewCategories } from '../../redux/previewCategories/operations';
import Container from "../Container";
import RecipeCard from "../RecipeCard";
import { 
    CategoryItem, 
    CategoryList, 
    SeeAllButton, 
    CategoryContainer,
    CategoryTitle,
    OtherCategoriesButton
    } from "./PreviewCategories.styled";
import useScreenWidth from "../../hooks/useScreenWidth";
import { useNavigate } from "react-router-dom";

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
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  const shuffleRecipes = (recipes) => {
    const shuffled = [...recipes];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };


  const handleSeeAll = (category) => {
    navigate(`/categories/${category}`);
  };

  const handleOtherCategories = () => {
    navigate("/categories");
  };

 
  return (
    <Container>
      {data.sort((a, b) => {
        const order = ['Breakfast', 'Miscellaneous', 'Chicken', 'Dessert'];
        return order.indexOf(a._id) - order.indexOf(b._id);
      }).map((category, index) => (
        <CategoryContainer key={index}>
            <CategoryTitle>{category._id === 'Dessert' ? 'Desserts' : category._id}</CategoryTitle>
            <CategoryList>
              {shuffleRecipes(category.mainPage).slice(0, getCardCount()).map((recipe) => (
                <CategoryItem key={recipe.id}>
                  <RecipeCard
                    name={recipe.title.length > 26 ? `${recipe.title.slice(0, 26)}...` : recipe.title}
                    imageSrc={recipe.preview}
                    recipeId={recipe.id}
                  />
                </CategoryItem>
              ))}
            </CategoryList>
            <SeeAllButton onClick={() => handleSeeAll(category._id.toLowerCase())}>See All</SeeAllButton>
          </CategoryContainer>
      ))}
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <OtherCategoriesButton onClick={handleOtherCategories}>Other Categories</OtherCategoriesButton>
      </div>
    </Container>
  );
};

export default PreviewCategories;