import { MyRecipeCard } from "../MyRecipesList/MyRecipeCard/MyRecipeCard";
import { MyRecipesListStyled } from "./MyRecipesList.styled";

export const MyRecipesList = ({recipes, onDelete }) => {

    const { ownRecipes } = recipes;

  return (
    <MyRecipesListStyled>
      {ownRecipes?.map(
        ({
              _id: { _id, title, preview, description, time },
            }
        ) => (
          <MyRecipeCard
            id={_id}
            key={_id}
            title={title}
            preview={preview}
            description={description}
            time={time}
            onDelete={onDelete}
          />
        )
      )}
    </MyRecipesListStyled>
  );
};
