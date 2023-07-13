import { Title } from "../../components/Title/Title";
import { FavoriteList } from "../../components/FavPage/FavList/FavoriteList";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { deleteRecipeFromFavorite, getFavoriteRecipes } from "../../service/api/Favorite-Api";
import { WrapPage } from "./FavoritePage.styled";

const FavoritePage = () => {
   const [recipes, setRecipes] = useState([]);
   const [, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
  //  const [page, setPage] = useState(1);

   useEffect(() => {
      const fetchFavoriteRecipes = async () => {
         try {
            setIsLoading(true);
            const response = await getFavoriteRecipes();

            setRecipes(response);
         } catch (error) {
            setError(error);
         } finally {
            setIsLoading(false);
         }
      };
      fetchFavoriteRecipes();
   }, []);

   const hendleDeleteRecipeById = (id) => {
      deleteRecipeFromFavorite(id);
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
   };

   return (
      <WrapPage>
         {isLoading && <Loader />}
         <Title>Favorites</Title>
         {recipes && <FavoriteList recipes={recipes} onDelete={hendleDeleteRecipeById} />}
      </WrapPage>
   );
};
export default FavoritePage;
