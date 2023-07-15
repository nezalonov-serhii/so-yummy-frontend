import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "./AddRecipeForm.styled";
import { RecipeIngredientsFields } from "./RecipeIngredientsFields/RecipeIngredientsFields";
import { RecipePreparationFields } from "./RecipePreparationFields/RecipePreparationFields";
import { RecipeDescriptionFields } from "./RecipeDescriptionFields/RecipeDescriptionFields";
// import { fetchAddRecipe } from "../../../redux/operations";

import { Toaster } from "react-hot-toast";

import { fetchAddRecipe } from "../../../redux/thunk/addRecipe/operations";
import { useNavigate } from "react-router";
import { setInvalidFields } from "../../../redux/Slice/addRecipeSlice/addRecipeFormSlice";

export const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.data);

  const {
    image,
    title,
    about: description,
    category,
    time: numberTime,
    listItems,
    preparation: instructions,
    isFormValid,
  } = data;
  const time = numberTime.toString();
  const ingredients = listItems.map((item) => ({
    // id: item.selectedOption._id,
    id: item.selectedOption?._id,
    measure: item.measure,
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(fetchAddRecipe(data));
    console.log(data); // видалити
    if (!isFormValid) {
      const fields = [
        "title",
        "about",
        "category",
        "time",
        "listItems",
        "preparation",
      ];
      setInvalidFields(fields);
      return;
    }

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
        <Button onClick={handleSubmit} disabled={!isFormValid}>
          Add
        </Button>
      </form>
    </Container>
  );
};
