import { useDispatch } from "react-redux";
import {
  addToFavorite,
  deleteFavorite,
} from "../../redux/recipe/recipeOperation/recipeOperation";
import {
  ClockIcon,
  Descr,
  Time,
  СlockWrap,
  Wrapper,
  FavoriteBtn,
  HeroTitle,
} from "./RecipePageHero.styled";

const RecipePageHero = ({ title, description, time, recipeId, favorites }) => {
  const dispatch = useDispatch();

  const handleClickBtn = () => {
    if (favorites === undefined) {
      return;
    }
    if (favorites.length !== 0) {
      dispatch(deleteFavorite(recipeId));
      return;
    }

    dispatch(addToFavorite(recipeId));
  };

  return (
    <Wrapper>
      <HeroTitle>{title}</HeroTitle>
      <Descr>{description}</Descr>
      <FavoriteBtn type="button" onClick={handleClickBtn}>
        {favorites && favorites.length !== 0
          ? "Remove from favorite"
          : "Add to favorite recipes"}
      </FavoriteBtn>
      <СlockWrap>
        <ClockIcon />
        <Time>{time} min</Time>
      </СlockWrap>
    </Wrapper>
  );
};
export default RecipePageHero;
