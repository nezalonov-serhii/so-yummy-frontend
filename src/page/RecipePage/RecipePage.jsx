import { useNavigate, useParams } from "react-router-dom";
import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeInngredientsList from "../../components/RecipeInngredientsList/RecipeInngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";

const RecipePage = () => {
  return (
    <div>
      <RecipePageHero />
      <RecipeInngredientsList />
      <RecipePreparation />
    </div>
  );
};
export default RecipePage;
