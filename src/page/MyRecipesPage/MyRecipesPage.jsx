import { Title } from "../../components/Title/Title";
import { useEffect, useState} from "react";
import Loader from "../../components/Loader/Loader";
import { getMyRecipes, deleteMyRecipe } from "../../service/api/fetchMyRecipes";
import { WrapPage } from "./MyRecipesPage.styled";
import PlugIfNotFound from "../../components/PlugIfNotFound/PlugIfNotFound";
import { MyRecipesList } from "../../components/MyRecipesList/MyRecipesList";

const MyRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMyRecipes = async () => {
      try {
        setIsLoading(true);
        const response = await getMyRecipes();
        setRecipes(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMyRecipes();
  }, []);

  const DeleteMyRecipeById = (id) => {
    deleteMyRecipe(id);
    setRecipes(recipes.filter((recipe) => recipe._id !== id));
  };

  
  return (
    <WrapPage>
      {isLoading && <Loader />}
      <Title>My recipes</Title>
      {!recipes.length ? (
        <PlugIfNotFound>There are not recipes yet</PlugIfNotFound>
      ) : <MyRecipesList recipes={recipes} onDelete={DeleteMyRecipeById} />}
    </WrapPage>
  );
};
export default MyRecipesPage;
