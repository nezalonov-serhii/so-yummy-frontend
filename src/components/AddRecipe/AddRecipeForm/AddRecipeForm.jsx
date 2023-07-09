import { useDispatch } from "react-redux";
import { Button, Container } from "./AddRecipeForm.styled";
import { RecipeIngredientsFields } from "./RecipeIngredientsFields/RecipeIngredientsFields";
import { RecipePreparationFields } from "./RecipePreparationFields/RecipePreparationFields";
import { RecipeDescriptionFields } from "./RecipeDescriptionFields/RecipeDescriptionFields";
// import { fetchAddRecipe } from "../../../redux/operations";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export const AddRecipeForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    about: "",
    category: "",
    time: "",
    listItems: [],
    preparation: [],
  });

  const handleDescriptionChange = (data) => {
    setFormData((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const handleIngredientsChange = (data) => {
    setFormData((prevState) => ({
      ...prevState,
      listItems: data,
    }));
  };

  const handlePreparationChange = (data) => {
    setFormData((prevState) => ({
      ...prevState,
      preparation: data,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(fetchAddRecipe(formData));
    console.log(formData); // видалити
    toast.success("Add recipe"); // видалити
  };
  return (
    <Container>
      <Toaster position="bottom-center" />
      <form>
        <RecipeDescriptionFields onChange={handleDescriptionChange} />
        <RecipeIngredientsFields onChange={handleIngredientsChange} />
        <RecipePreparationFields onChange={handlePreparationChange} />
        <Button onClick={handleSubmit}>Add </Button>
      </form>
    </Container>
  );
};
