import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "./AddRecipeForm.styled";
import { RecipeIngredientsFields } from "./RecipeIngredientsFields/RecipeIngredientsFields";
import { RecipePreparationFields } from "./RecipePreparationFields/RecipePreparationFields";
import { RecipeDescriptionFields } from "./RecipeDescriptionFields/RecipeDescriptionFields";
// import { fetchAddRecipe } from "../../../redux/operations";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import { fetchAddRecipe } from "../../../redux/thunk/addRecipe/operations";

export const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(fetchAddRecipe(data));
    console.log(data); // видалити
    toast.success("Add recipe"); // видалити

    const newData = new FormData();

    newData.append("title", data.title);
    newData.append("about", data.about);
    newData.append("category", data.category);
    newData.append("time", data.time);
    newData.append("listItems", JSON.stringify(data.listItems));
    newData.append("preparation", JSON.stringify(data.preparation));

    if (data.image) {
      fetch(data.image)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "image.jpg", { type: "image/jpeg" });
          newData.append("image", file);
          dispatch(
            fetchAddRecipe({
              ...data,
              image: file,
            })
          );
        });
    } else {
      dispatch(
        fetchAddRecipe({
          ...data,
        })
      );
    }
  };
  return (
    <Container>
      <Toaster position="bottom-center" />
      <form>
        <RecipeDescriptionFields />
        <RecipeIngredientsFields />
        <RecipePreparationFields />
        <Button onClick={handleSubmit}>Add </Button>
      </form>
    </Container>
  );
};
