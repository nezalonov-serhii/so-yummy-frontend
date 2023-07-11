import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeInngredientsList from "../../components/RecipeInngredientsList/RecipeInngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";

const RecipePage = ({ recipes, ingredients }) => {
  const { title, description, time, _id, favorites, instructions, thumb } =
    recipes;

  console.log(recipes);

  return (
    <div>
      <RecipePageHero
        title={title}
        description={description}
        time={time}
        recipeId={_id}
        favorites={favorites}
      />
      <RecipeInngredientsList ingredients={ingredients} />
      <RecipePreparation
        thumb={thumb}
        instructions={instructions}
        title={title}
      />
    </div>
  );
};
export default RecipePage;
