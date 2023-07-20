import { useEffect, useState } from "react";

import { getMyRecipes, deleteMyRecipe } from "../../service/api/fetchMyRecipes";

import { Title } from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";
import PlugIfNotFound from "../../components/PlugIfNotFound/PlugIfNotFound";
import { MyRecipesList } from "../../components/MyRecipesList/MyRecipesList";
import { LoadMoreButton } from "../../components/Pagination/LoadMoreButton";
import { Container, WrapPage } from "./MyRecipesPage.styled";

const MyRecipesPage = () => {
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const lastRecipeIndex = recipes.length - 1;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchMyRecipes = async () => {
      try {
        setIsLoading(true);
        const response = await getMyRecipes(page);
        const recipesList = response.data;
        const totalHits = response.qty.total;
        setTotal(totalHits);
        // if (page = 1) {
          // setRecipes(recipesList)
        // } else {
          setRecipes((prevRecipes) => [...prevRecipes, ...recipesList]);
        // } 
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMyRecipes(page);
  }, [page]);

    // useEffect(() => {
    //   setRecipes([]);
    //   setPage(1);
    // }, []);

  const DeleteMyRecipeById = (id) => {
    deleteMyRecipe(id);
    setRecipes(recipes.filter((recipe) => recipe.ownRecipes._id !== id));
  };

    const handleLoadMore = () => {
      setPage((prevPage) => prevPage + 1);
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
        {recipes.length > 4 && recipes.length < total && (
          <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
        )}
      </Container>
    </WrapPage>
  );
};
export default MyRecipesPage;
