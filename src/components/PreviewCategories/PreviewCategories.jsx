import React from "react";
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

const PreviewCategories = () => {
  const categories = ['Breakfast', 'Miscellaneous', 'Chicken', 'Desserts'];
  const screenWidth = useScreenWidth();

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
    // Обработчик нажатия на кнопку "See All" для определенной категории
    console.log(`See All clicked for category: ${category}`);
  };

  const handleOtherCategories = () => {
    // Обработчик нажатия на кнопку "Other Categories"
    console.log("Other Categories clicked");
  };

  return (
    <Container>
      {categories.map((category, index) => (
          <CategoryContainer key={index}>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryList>
              {[...Array(getCardCount())].map((_, cardIndex) => (
                <CategoryItem key={cardIndex}>
                  {/* Встроенная карточка рецепта */}
                  <RecipeCard
                    title="Recipe Title"
                    description="Recipe Description"
                    imageSrc="path/to/recipe-image.jpg"
                  />
                </CategoryItem>
              ))}
            </CategoryList>
          <SeeAllButton onClick={() => handleSeeAll(category)}>See All</SeeAllButton>
          </CategoryContainer>
      ))}
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <OtherCategoriesButton onClick={handleOtherCategories}>Other Categories</OtherCategoriesButton>
        </div>
    </Container>
  );
};

export default PreviewCategories;