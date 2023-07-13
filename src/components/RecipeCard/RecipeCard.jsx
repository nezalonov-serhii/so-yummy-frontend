import React from 'react';
import { ProductCard, ProductImage, ProductName } from './RecipeCard.styled';
import { useNavigate } from "react-router-dom";


const RecipeCard = ({ recipeId, imageSrc, name }) => {
  const navigate = useNavigate();

  const handleRecipeClick = () => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <ProductCard  onClick={handleRecipeClick}>
      <ProductImage src={imageSrc} alt={name} />
      <ProductName>{name.length > 26 ? `${name.slice(0, 26)}...` : name}</ProductName>
    </ProductCard>
  );
};

export default RecipeCard;