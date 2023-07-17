import { useDispatch } from "react-redux";
// import { useEffect } from "react";
import { addShoppingThunk,deleteShoppingThunk } from "../../redux/shopping/thunkShopping";
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
  const dispatch = useDispatch();

  const handleClickCheckbox = (_id, measure) => {
    const data = { ingredient: _id, measure };
    dispatch(addShoppingThunk(data));
  };
  const handleDeleteCheckbox =(_id)=>{
    dispatch(deleteShoppingThunk(_id))
  }

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
              <Item key={_id}>
                <Ingredient>
                  <Image src={img || Food} alt={name} />
                  <IngredientTitle>{name}</IngredientTitle>
                </Ingredient>
                <ItemWrapper>
                  <Measure>{measure}</Measure>
                  <Checkbox
                    type="checkbox"
                    // checked={isChecked}
                    onChange={(e) => {
                      console.log(e.target.checked)
                        if(!e.target.checked){
                          return handleDeleteCheckbox(_id)
                        }
                        return handleClickCheckbox(_id, measure)}
                      }
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
