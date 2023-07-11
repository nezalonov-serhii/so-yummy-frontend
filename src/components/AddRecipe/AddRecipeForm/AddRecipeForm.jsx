// import { useDispatch } from "react-redux";
import { Button, Container } from "./AddRecipeForm.styled";
import { RecipeIngredientsFields } from "./RecipeIngredientsFields/RecipeIngredientsFields";
import { RecipePreparationFields } from "./RecipePreparationFields/RecipePreparationFields";
import { RecipeDescriptionFields } from "./RecipeDescriptionFields/RecipeDescriptionFields";
// import { fetchAddRecipe } from "../../../redux/operations";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { fetchAddRecipe } from "../../../redux/addRecipe/operations";

export const AddRecipeForm = () => {
  // const dispatch = useDispatch();

  const [data, setData] = useState({
    title: "",
    about: "",
    category: "",
    time: "",
    listItems: [],
    preparation: [],
    image: null,
  });

  const dispatch = useDispatch();

  const handleDescriptionChange = (data) => {
    setData((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const handleImageChange = (data) => {
    setData((prevState) => ({
      ...prevState,
      image: data,
    }));
  };

  const handleIngredientsChange = (data) => {
    setData((prevState) => ({
      ...prevState,
      listItems: data,
    }));
  };

  const handlePreparationChange = (data) => {
    setData((prevState) => ({
      ...prevState,
      preparation: data,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(fetchAddRecipe(data));
    console.log(data); // видалити
    toast.success("Add recipe"); // видалити

    const newData = new FormData();

    data.append("title", data.title);
    data.append("about", data.about);
    data.append("category", data.category);
    data.append("time", data.time);
    data.append("listItems", JSON.stringify(data.listItems));
    data.append("preparation", JSON.stringify(data.preparation));

    if (data.image) {
      fetch(data.image)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "image.jpg", { type: "image/jpeg" });
          data.append("image", file);
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
        <RecipeDescriptionFields
          onDescriptionChange={handleDescriptionChange}
          onImageChange={handleImageChange}
        />
        <RecipeIngredientsFields onChange={handleIngredientsChange} />
        <RecipePreparationFields onChange={handlePreparationChange} />
        <Button onClick={handleSubmit}>Add </Button>
      </form>
    </Container>
  );
};
