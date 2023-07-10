import React from 'react';
import { ProductCard, ProductImage, ProductName } from './RecipeCard.styled';



const RecipeCard = ({ imageSrc, name }) => {
  return (
    <div>
    <ProductCard>
      <ProductImage src={imageSrc} alt={name} />
      <ProductName>{name}</ProductName>
    </ProductCard>
    </div>
  );
};

export default RecipeCard;