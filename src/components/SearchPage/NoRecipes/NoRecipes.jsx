import vegetableBasketTabDesk2x from "../../../images/SearchPage/vegetableBasketTabDesk.webp";
import { NoRecipesBox } from "./NoRecipes.styled";


export const NoRecipes = () => {
    return (
        //  <>
        //     <img src={vegetableBasketTabDesk2x} />
        //     <p>Try looking for something else..</p>
        // </>
        <NoRecipesBox>
            <img src={vegetableBasketTabDesk2x} />
            <p>Try looking for something else..</p>
        </NoRecipesBox>
    )
}