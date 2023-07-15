import { SearchedRecipeElement } from "../SearchedRecipesElement/SearchedRecipeElement";
import { RecipesList, RecipeItem } from "./SearchedRecipesList.styled";
import { NoRecipes } from "../NoRecipes/NoRecipes";


export const SearchedRecipesList = ({listOfRecipes}) => {


   return (
      <RecipesList>
          {listOfRecipes ?(
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
            })) :(<NoRecipes/>)
            }
      </RecipesList>
   );
};
