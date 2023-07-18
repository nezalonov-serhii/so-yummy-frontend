import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Food from "../../images/RecipePage/svg/food.svg";

import { selectShoppingList } from "../../redux/recipe/recipeSelectors/recipeSelectors";
import {
   addShoppingThunk,
   deleteShoppingThunk,
   getShoppingThunk,
} from "../../redux/shopping/thunkShopping";

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

   const shoppingList = useSelector(selectShoppingList);
   const [ingredient] = [shoppingList];

   useEffect(() => {
      dispatch(getShoppingThunk());
   }, [dispatch]);

   const handleClickCheckbox = (_id, measure, isChecked) => {
      const data = { ingredient: _id, measure };
      if (!isChecked) {
         dispatch(addShoppingThunk(data));
      }
      if (isChecked) {
         dispatch(deleteShoppingThunk(_id));
      }
   };

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
                  const isChecked = ingredient.some((int) => int.ingredientId === _id);
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
                              checked={isChecked}
                              onChange={() => handleClickCheckbox(_id, measure, isChecked)}
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
