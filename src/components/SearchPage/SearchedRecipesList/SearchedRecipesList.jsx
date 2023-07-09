import { SearchedRecipeElement } from "../SearchedRecipesElement/SearchedRecipeElement";
import { RecipesList,RecipeItem } from "./SearchedRecipesList.styled";
import { NoRecipes } from "../NoRecipes/NoRecipes";
// import recipes from '../../SearchPage/recipes';

export const SearchedRecipesList = () => {
  // const filtredRecipes = recipes.filter(recipe => recipe.title.includes("Beef"));
  
  
  return (
   
    <RecipesList>
      
    
       
      {/* {filtredRecipes &&
        filtredRecipes.map(recipe => {
          const [id] = Object.values(recipe._id)
         
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
        })} */}
    </RecipesList>
  );
};
