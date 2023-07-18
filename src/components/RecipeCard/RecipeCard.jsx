import React from "react";
import { useNavigate } from "react-router-dom";

import { ProductCard, ProductImage, ProductName } from "./RecipeCard.styled";

const RecipeCard = ({ recipeId, imageSrc, name }) => {
   const navigate = useNavigate();

   const handleRecipeClick = () => {
      navigate(`/recipe/${recipeId}`);
   };

   return (
      <ProductCard onClick={handleRecipeClick}>
         <ProductImage src={imageSrc} alt={name} />
         <ProductName>{name.length > 26 ? `${name.slice(0, 30)}...` : name}</ProductName>
      </ProductCard>
   );
};

export default RecipeCard;
