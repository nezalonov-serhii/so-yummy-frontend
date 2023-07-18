import { Title } from "../../components/Title/Title";
import IngredientsShoppingList from "../../components/IngredientsShoppingList/IngredientsShoppingList";

import { ShoppingPageContainer } from "./ShoppingPageStyled";

const ShoppingListPage = () => {
   return (
      <ShoppingPageContainer>
         <Title>Shopping list</Title>
         <IngredientsShoppingList />
      </ShoppingPageContainer>
   );
};

export default ShoppingListPage;
