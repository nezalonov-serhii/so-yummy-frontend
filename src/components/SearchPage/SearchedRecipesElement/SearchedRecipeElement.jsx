import { RecipeImage, RecipeTitle } from "./SearchedRecipeElement.styled";
import { NavLink } from "react-router-dom";
import defaultImage from "../../../images/DefaultImage/defaultImage.svg"
export const SearchedRecipeElement = ({ title, recipeId, img, desc }) => {

   return (
    <NavLink to={`/recipe/${recipeId}`}>
            <RecipeImage src={img?img: defaultImage} alt={desc} />
            <RecipeTitle>{title}</RecipeTitle>
         </NavLink>
   
   );
};
