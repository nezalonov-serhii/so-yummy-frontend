import { Title } from "../../components/Title/Title";
import { FavoriteList } from "../../components/FavPage/FavList/FavoriteList";
import { useEffect, useState } from "react";
import  Loader from '../../components/Loader/Loader';
import {
  getFavoriteRecipes,
  deleteRecipeFromFavorite,
} from "../../components/FavPage/Favorite-Api";

const FavoritePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchFavoriteRecipes = async () => {
      try {
        setIsLoading(true);
        const response = await getFavoriteRecipes(page);

        setRecipes(response.data);
      } catch (error) {
        setError(error);
      }finally {
        setIsLoading(false);
      }
    };
    fetchFavoriteRecipes();
  }, [page]);

  const hendleDeleteRecipeById = id => {
    deleteRecipeFromFavorite(id)
    setRecipes(recipes.filter(recipe => recipe._id !== id))
  }

  return (
    <>
      {isLoading && <Loader />}
      <Title>Favorites</Title>
      {recipes && <FavoriteList recipes={recipes} onDelete={hendleDeleteRecipeById}/>}
    </>
  );
};
export default FavoritePage;
