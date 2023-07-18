import { RecipeImage, RecipeTitle } from "./SearchedRecipeElement.styled";
import { NavLink } from "react-router-dom";

export const SearchedRecipeElement = ({ title, recipeId, img, desc }) => {

   return (
    <NavLink to={`/recipe/${recipeId}`}>
            <RecipeImage src={img} alt={desc} />
            <RecipeTitle>{title}</RecipeTitle>
         </NavLink>
     
   );
};
