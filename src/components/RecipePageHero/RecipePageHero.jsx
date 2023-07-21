import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { addToFavorite, deleteFavorite } from "../../redux/recipe/recipeOperation/recipeOperation";

import {
   ClockIcon,
   Descr,
   Time,
   СlockWrap,
   Wrapper,
   FavoriteBtn,
   HeroTitle,
} from "./RecipePageHero.styled";
import { selectUser } from "../../redux/selector/selectors";

const RecipePageHero = ({ title, description, time, recipeId, favorites }) => {
   const dispatch = useDispatch();

   const user = useSelector(selectUser);

   function checkFavorites() {
      for (let i = 0; i < user._id?.length; i++) {
         if (favorites?.includes(user._id)) {
            return true;
         }
      }
      return false;
   }

   const handleClickBtn = () => {
      if (favorites === undefined) {
         return;
      }
      if (checkFavorites()) {
         dispatch(deleteFavorite(recipeId));
         toast.success("Remove from favorites");
         return;
      } else {
         dispatch(addToFavorite(recipeId));
         toast.success("Add to favorites");
      }
   };

   return (
      <Wrapper>
         <HeroTitle>{title}</HeroTitle>
         <Descr>{description}</Descr>
         <FavoriteBtn type="button" onClick={handleClickBtn}>
            {checkFavorites() ? "Remove from favorite" : "Add to favorite recipes"}
         </FavoriteBtn>
         <СlockWrap>
            {time && <ClockIcon />}
            {time && <Time>{time} min</Time>}
         </СlockWrap>
      </Wrapper>
   );
};
export default RecipePageHero;
