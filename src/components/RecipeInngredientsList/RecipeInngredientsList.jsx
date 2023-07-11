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
        {ingredients
          .filter((it) => !!it._id)
          .map(({ _id, measure, name, desc, img }) => {
            return (
              <Item key={_id}>
                <Ingredient>
                  <Image src={img || Food} alt={name} />
                  <IngredientTitle>{name}</IngredientTitle>
                </Ingredient>
                <ItemWrapper>
                  <Measure>{measure}</Measure>
                  <Checkbox type="checkbox" />
                </ItemWrapper>
              </Item>
            );
          })}
      </List>
    </Div>
  );
};
export default RecipeInngredientsList;
