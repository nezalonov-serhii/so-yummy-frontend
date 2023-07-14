import { Title } from "../../components/Title/Title";
import { FavoriteList } from "../../components/FavPage/FavList/FavoriteList";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import {
  deleteRecipeFromFavorite,
  getFavoriteRecipes,
} from "../../service/api/Favorite-Api";
import { WrapPage, BacketWrapper, Emptytitle, EmptyText } from "./FavoritePage.styled";

import BasketMob from "../../images/SearchPage/vegetableBasketMob.webp";
import BasketMob2x from "../../images/SearchPage/vegetableBasketMob@2x.webp";
import BacketTabDesk from "../../images/SearchPage/vegetableBasketTabDesk.webp";
import BacketTabDesk2x from "../../images/SearchPage/vegetableBasketTabDesk@2x.webp";

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
      {recipes ? (
        <BacketWrapper>
        <Emptytitle>Oops!!!</Emptytitle>
          <picture>
            <source
              srcset={`${BacketTabDesk}, ${BacketTabDesk2x} 2x`}
              media="(min-width: 768px)"
              sizes="(min-width: 498px) 498px, 100vw"
            />
            <source
              srcset={`${BasketMob}, ${BasketMob2x} 2x`}
              media="(max-width: 767px)"
              sizes="(min-width: 259px) 259px, 100vw"
            />
            <img src={BasketMob} alt="No reecipe" />
          </picture>
        <EmptyText>You don't have any favorite recipes. </EmptyText>
         </BacketWrapper>
      ) : (
        <FavoriteList recipes={recipes} onDelete={hendleDeleteRecipeById} />
      )}
    </WrapPage>
  );
};
export default FavoritePage;
