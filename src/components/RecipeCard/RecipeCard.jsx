import React from 'react';
import { ProductCard, ProductImage, ProductName } from './RecipeCard.styled';



const RecipeCard = ({ imageSrc, name }) => {
  return (
    <ProductCard>
      <ProductImage src={imageSrc} alt={name} />
      <ProductName>{name}</ProductName>
    </ProductCard>
  );
};

export default RecipeCard;