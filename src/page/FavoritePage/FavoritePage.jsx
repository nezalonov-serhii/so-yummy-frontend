import { useEffect, useState } from "react";

import { Title } from "../../components/Title/Title";
import { FavoriteList } from "../../components/FavPage/FavList/FavoriteList";
import Loader from "../../components/Loader/Loader";

import { deleteRecipeFromFavorite, getFavoriteRecipes } from "../../service/api/Favorite-Api";

import BasketMob from "../../images/SearchPage/vegetable-fruit-basket-mob.png";
import BasketMob2x from "../../images/SearchPage/vegetable-fruit-basket-mob@2x.png";
import BacketTabDesk from "../../images/SearchPage/vegetable-fruit-basket-tab-desk.png";
import BacketTabDesk2x from "../../images/SearchPage/vegetable-fruit-basket-tab-desk@2x.png";

import { WrapPage, BacketWrapper, Emptytitle, EmptyText } from "./FavoritePage.styled";
import { Container } from "../MyRecipesPage/MyRecipesPage.styled";

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
         <Title>Favorites</Title>
         <Container>
            {isLoading && <Loader />}
            {recipes.length === 0 ? (
               <BacketWrapper>
                  <Emptytitle>Oops!!!</Emptytitle>
                  <picture>
                     <source
                        srcSet={`${BacketTabDesk}, ${BacketTabDesk2x} 2x`}
                        media="(min-width: 768px)"
                        sizes="(min-width: 498px) 498px, 100vw"
                     />
                     <source
                        srcSet={`${BasketMob}, ${BasketMob2x} 2x`}
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
            {/* {recipes && <FavoriteList recipes={recipes} onDelete={hendleDeleteRecipeById} />} */}
         </Container>
      </WrapPage>
   );
};
export default FavoritePage;
