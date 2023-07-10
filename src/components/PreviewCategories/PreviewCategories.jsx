import React from "react";
import data from "../../recipes.json";
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
  const categories = ['Breakfast', 'Miscellaneous', 'Chicken', 'Dessert'];
  const screenWidth = useScreenWidth();
  const navigate = useNavigate();


  
  // console.log(data);

  const getCardCount = () => {
    if (screenWidth.mobile) {
      return 1;
    } else if (screenWidth.tablet) {
      return 2;
    } else if (screenWidth.desktop) {
      return 4;
    }
  };

  const handleSeeAll = (category) => {
    navigate(`/categories/${category}`);
  };

  const handleOtherCategories = () => {
    navigate("/categories");
  };

  return (
    <Container>
      {categories.map((category, index) => {
        // Фільтруємо дані з об'єкта `data` за відповідною категорією
        const recipesInCategory = data.filter(recipe => recipe.category === category);
        // console.log('recipesInCategory', recipesInCategory)
        // Вибираємо перші `getCardCount()` рецептів для відображення
        const recipesToShow = recipesInCategory.slice(0, getCardCount());

        return (
          <CategoryContainer key={index}>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryList>
              {recipesToShow.map((recipe, cardIndex) => (
                <CategoryItem key={cardIndex}>
                  <RecipeCard
                    name={recipe.title}
                    imageSrc={recipe.preview}
                  />
                </CategoryItem>
              ))}
            </CategoryList>
            <SeeAllButton onClick={() => handleSeeAll(category.toLowerCase())}>See All</SeeAllButton>
          </CategoryContainer>
        );
      })}
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <OtherCategoriesButton onClick={handleOtherCategories}>Other Categories</OtherCategoriesButton>
      </div>
    </Container>
  );
};

export default PreviewCategories;