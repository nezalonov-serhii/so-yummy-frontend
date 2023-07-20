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
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchMyRecipes = async () => {
      try {
        setIsLoading(true);
        const response = await getMyRecipes(page);
        const recipesList = response.data;
        const totalHits = response.qty.total;
        setTotal(totalHits);
          setRecipes((prevRecipes) => [...prevRecipes, ...recipesList]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMyRecipes(page);
  }, [page]);

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
        {total > 4 && recipes.length < total && (
          <LoadMoreButton onClick={handleLoadMore} isDisabled={isLoading}>
            {isLoading &&<Loader size={"20"} color={"var(--text-primary)"} />}
            {!isLoading && "Load more"}
          </LoadMoreButton>
        )}
      </Container>
    </WrapPage>
  );
};
export default MyRecipesPage;
