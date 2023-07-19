import { useEffect, useState } from "react";

import { getMyRecipes, deleteMyRecipe } from "../../service/api/fetchMyRecipes";

import { Title } from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";
import PlugIfNotFound from "../../components/PlugIfNotFound/PlugIfNotFound";
import { MyRecipesList } from "../../components/MyRecipesList/MyRecipesList";

import { Container, WrapPage } from "./MyRecipesPage.styled";

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
    setRecipes(recipes.filter((recipe) => recipe.ownRecipes._id !== id));
  };

  return (
    <WrapPage>
      <Title>My recipes</Title>
      <Container>
        {isLoading && <Loader />}
        {!recipes.length && !isLoading ? (
          <PlugIfNotFound>There are not recipes yet</PlugIfNotFound>
        ) : (
          <MyRecipesList recipes={recipes} onDelete={DeleteMyRecipeById} />
        )}
      </Container>
    </WrapPage>
  );
};
export default MyRecipesPage;
