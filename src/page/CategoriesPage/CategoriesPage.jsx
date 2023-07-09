
import { useState } from "react";
import CategoriesGallery from "../../components/CategoriesPage/CategoriesGallery/CategoriesGallery";
import CategoriesList from "../../components/CategoriesPage/CategoriesList/CategoriesList";
import { Title } from "../../components/Title/Title";
import defaultRecipes from "../../service/api/recipes.json"



const CategoriesPage = () => {
  const [gallery, setGallery] = useState(defaultRecipes.filter(recipe => recipe.category === "Beef"));

const chooseCategory = (categoryName)=>{
  
const recipes = defaultRecipes;
  const newGallery = recipes.filter(recipe => recipe.category === categoryName)
  setGallery(newGallery)
  return 
}

  return <>
  <Title>Categories</Title>
  <CategoriesList onSubmit={chooseCategory} recipes={gallery}/>
  <CategoriesGallery recipes={gallery}/>
  </>
   
};
export default CategoriesPage;
