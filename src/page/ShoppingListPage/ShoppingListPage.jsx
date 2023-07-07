
import { ShoppingPageContainer } from "./ShoppingPageStyled";
import IngredientsShoppingList from "../../components/IngredientsShoppingList/IngredientsShoppingList";

const ShoppingListPage = ()=>{
    return (
        <ShoppingPageContainer>
            <IngredientsShoppingList/>
        </ShoppingPageContainer>
    )
}

export default ShoppingListPage;
