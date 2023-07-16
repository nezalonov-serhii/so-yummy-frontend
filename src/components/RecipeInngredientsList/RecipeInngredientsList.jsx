// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { addToShopping } from "../../redux/recipe/recipeOperation/recipeOperation";
import Food from "../../images/RecipePage/svg/food.svg";
import {
  Checkbox,
  Head,
  HeadText,
  Ingredient,
  IngredientTitle,
  Item,
  Wrapper,
  Measure,
  ItemWrapper,
  List,
  Image,
  Div,
} from "./RecipeInngredientsList.styled";

const RecipeInngredientsList = ({ ingredients }) => {
  // console.log(ingredients);

  // const dispatch = useDispatch();

  // const handleClickCheckbox = (_id, name, img, measure, isChecked) => {
  //   const data = { _id, name, img, measure };
  //   console.log(data);
  //   dispatch(addToShopping(data));
  // };

  return (
    <Div>
      <Head>
        <HeadText>Ingredients</HeadText>
        <Wrapper>
          <HeadText>Number</HeadText>
          <HeadText>Add to list</HeadText>
        </Wrapper>
      </Head>
      <List>
        {ingredients &&
          ingredients.map(({ id: { _id, name, img }, measure, id }) => {
            return (
              <Item key={_id || id}>
                <Ingredient>
                  <Image src={img || Food} alt={name} />
                  <IngredientTitle>{name}</IngredientTitle>
                </Ingredient>
                <ItemWrapper>
                  <Measure>{measure}</Measure>
                  <Checkbox
                    type="checkbox"
                    // checked={isChecked}
                    // onClick={() => handleClickCheckbox(_id, name, img, measure)}
                  />
                </ItemWrapper>
              </Item>
            );
          })}
      </List>
    </Div>
  );
};
export default RecipeInngredientsList;
