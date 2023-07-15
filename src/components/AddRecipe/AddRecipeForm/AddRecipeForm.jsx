import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "./AddRecipeForm.styled";
import { RecipeIngredientsFields } from "./RecipeIngredientsFields/RecipeIngredientsFields";
import { RecipePreparationFields } from "./RecipePreparationFields/RecipePreparationFields";
import { RecipeDescriptionFields } from "./RecipeDescriptionFields/RecipeDescriptionFields";
// import { fetchAddRecipe } from "../../../redux/operations";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import { fetchAddRecipe } from "../../../redux/thunk/addRecipe/operations";
import { useNavigate } from "react-router";

export const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.data);

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(fetchAddRecipe(data));
    console.log(data); // видалити
    toast.success("Add recipe"); // видалити

    const {
      image,
      title,
      about: description,
      category,
      time: numberTime,
      listItems,
      preparation: instructions,
    } = data;
    const time = numberTime.toString();
    const ingredients = listItems.map((item) => ({
      id: item.selectedOption._id,
      measure: item.measure,
    }));

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("time", time);
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("instructions", JSON.stringify(instructions));

    if (image) {
      fetch(image)
        .then((res) => {
          const contentType = res.headers.get("content-type");
          return res.blob().then((blob) => [blob, contentType]);
        })
        .then(([blob, contentType]) => {
          const file = new File([blob], "image", { type: contentType });
          formData.append("recipeImg", file);
          dispatch(fetchAddRecipe(formData));
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      dispatch(fetchAddRecipe(formData));
    }
    navigate("/my");
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
