import { SearchedRecipeElement } from "../SearchedRecipesElement/SearchedRecipeElement";
import PluginNotFound from "../../PlugIfNotFound/PlugIfNotFound";

import { RecipesList, RecipeItem } from "./SearchedRecipesList.styled";

export const SearchedRecipesList = ({ listOfRecipes }) => {
   return (
      <RecipesList>
         {listOfRecipes.length !== 0 ? (
            listOfRecipes.map((recipe) => {
               return (
                  <RecipeItem key={recipe._id}>
                     <SearchedRecipeElement
                        title={recipe.title}
                        recipeId={recipe._id}
                        img={recipe.preview}
                        desc={recipe.description}
                     />
                  </RecipeItem>
               );
            })
         ) : (
            <PluginNotFound>Try looking for something else..</PluginNotFound>
         )}
      </RecipesList>
   );
};
