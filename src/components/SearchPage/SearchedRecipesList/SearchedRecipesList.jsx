import { SearchedRecipeElement } from "../SearchedRecipesElement/SearchedRecipeElement";
import { RecipesList, RecipeItem } from "./SearchedRecipesList.styled";
import { NoRecipes } from "../NoRecipes/NoRecipes";
import recipes from "../../SearchPage/recipes";

export const SearchedRecipesList = () => {
   const filtredRecipes = recipes.filter((recipe) => recipe.title.includes("Beef"));
   const spliceRecipes = filtredRecipes.splice(0, 12);

   return (
      <RecipesList>
         {spliceRecipes &&
            spliceRecipes.map((recipe) => {
               const [id] = Object.values(recipe._id);

               return (
                  <RecipeItem key={id}>
                     <SearchedRecipeElement
                        title={recipe.title}
                        recipeId={id}
                        img={recipe.preview}
                        desc={recipe.description}
                     />
                  </RecipeItem>
               );
            })}
      </RecipesList>
   );
};
