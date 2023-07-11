import { RecipeImage, RecipeTitle } from "./SearchedRecipeElement.styled";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const SearchedRecipeElement = ({ title, recipeId, img, desc }) => {
   //     const location = useLocation();
   //    <NavLink to={`movies/${film.id}`} state={{ from: location }}>
   //                 {film.title ? film.title : film.name}
   //               </NavLink>
   return (
      <>
         <a href={`./recipe/:${recipeId}`}>
            <RecipeImage src={img} alt={desc} />
            <RecipeTitle>{title}</RecipeTitle>
         </a>
      </>
   );
};
