import {
  ClockIcon,
  Descr,
  Time,
  СlockWrap,
  Wrapper,
  FavoriteBtn,
  HeroTitle,
} from "./RecipePageHero.styled";

const RecipePageHero = ({ title, description, time, _id, favorites }) => {
  return (
    <Wrapper>
      <HeroTitle>{title}</HeroTitle>
      <Descr>{description}</Descr>
      <FavoriteBtn type="button">
        {favorites ? "Remove from favorite" : "Add to favorite recipes"}
      </FavoriteBtn>
      <СlockWrap>
        <ClockIcon />
        <Time>{time} min</Time>
      </СlockWrap>
    </Wrapper>
  );
};
export default RecipePageHero;
