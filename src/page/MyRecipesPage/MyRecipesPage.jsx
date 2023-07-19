import { useEffect, useState } from "react";

import { getMyRecipes, deleteMyRecipe } from "../../service/api/fetchMyRecipes";

import { Title } from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";
import PlugIfNotFound from "../../components/PlugIfNotFound/PlugIfNotFound";
import { MyRecipesList } from "../../components/MyRecipesList/MyRecipesList";
import { LoadMoreButton } from "../../components/Pagination/LoadMoreButton";
import { WrapPage } from "./MyRecipesPage.styled";

const MyRecipesPage = () => {
   const [page, setPage] = useState(2);
   const [recipes, setRecipes] = useState([]);
   const [, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const lastRecipeIndex = recipes.length - 1;
  // const { qty } = recipes;
  // const { 0} = qty;
    // const lastFetchedRecipeIndex = total.length - 1;

   useEffect(() => {
      const fetchMyRecipes = async (page) => {
         try {
            setIsLoading(true);
            const response = await getMyRecipes(page);
            setRecipes(response);
         } catch (error) {
            setError(error);
         } finally {
            setIsLoading(false);
         }
      };
      fetchMyRecipes();
   }, [page]);

   const DeleteMyRecipeById = (id) => {
      deleteMyRecipe(id);
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
  };
  
    const handleLoadMore = () => {
      setPage((prevPage) => prevPage + 1);
    };

   return (
     <WrapPage>
       <Title>My recipes</Title>
       {isLoading && <Loader />}
       {!recipes.length && !isLoading ? (
         <PlugIfNotFound>There are not recipes yet</PlugIfNotFound>
       ) : (
         <MyRecipesList recipes={recipes} onDelete={DeleteMyRecipeById} />
       )}
       {recipes.length && <LoadMoreButton onClick={handleLoadMore} />}
     </WrapPage>
   );
};
export default MyRecipesPage;
