import { SearchedRecipeElement } from "../SearchedRecipesElement/SearchedRecipeElement";
import { RecipesList, RecipeItem } from "./SearchedRecipesList.styled";
import { NoRecipes } from "../NoRecipes/NoRecipes";


export const SearchedRecipesList = ({listOfRecipes}) => {


   return (
      <RecipesList>
          {listOfRecipes ?(
            listOfRecipes.map((recipe) => {
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
            })) :(<NoRecipes/>)
            }
      </RecipesList>
   );
};
