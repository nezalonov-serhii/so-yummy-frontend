import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeInngredientsList from "../../components/RecipeInngredientsList/RecipeInngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";

import { fetchRecipeById } from "../../redux/recipe/recipeOperation/recipeOperation";
import { selectRecipe } from "../../redux/recipe/recipeSelectors/recipeSelectors";

const RecipePage = () => {
   const { recipeId } = useParams();

   const dispatch = useDispatch();
   const recipes = useSelector(selectRecipe);

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   });

   useEffect(() => {
      dispatch(fetchRecipeById(recipeId));
   }, [dispatch, recipeId]);

   const { title, description, time, instructions, thumb, ingredients, favorites } = recipes;

   return (
      <div>
         <RecipePageHero
            title={title}
            description={description}
            time={time}
            recipeId={recipeId}
            favorites={favorites}
         />
         <RecipeInngredientsList ingredients={ingredients} />
         <RecipePreparation thumb={thumb} instructions={instructions} title={title} />
      </div>
   );
};
export default RecipePage;
