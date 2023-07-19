import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { fetchAddRecipe } from "../../../redux/thunk/addRecipe/operations";
import {
   clearForm,
   setInvalidFields,
   setIsClickDisabledButton,
   validateForm,
} from "../../../redux/Slice/addRecipeSlice/addRecipeFormSlice";

import { RecipeIngredientsFields } from "./RecipeIngredientsFields/RecipeIngredientsFields";
import { RecipePreparationFields } from "./RecipePreparationFields/RecipePreparationFields";
import { RecipeDescriptionFields } from "./RecipeDescriptionFields/RecipeDescriptionFields";

import { Button, Container } from "./AddRecipeForm.styled";
import { useState } from "react";
import Loader from "../../Loader/Loader";

export const AddRecipeForm = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const data = useSelector((state) => state.data);
   const [isLoading, setIsLoading] = useState(false);
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
   const newIngredients = listItems.map((item) => ({
      id: item.selectedOption?._id,
      measure: item.measure,
   }));
   const ingredients = newIngredients.filter((obj) => {
      for (let key in obj) {
         if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
            return false;
         }
      }
      return true;
   });

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   const handleNotValid = (event) => {
      event.preventDefault();
      dispatch(setIsClickDisabledButton(true));
      dispatch(validateForm());
   };
   const handleSubmit = async (event) => {
      event.preventDefault();

      if (!isFormValid) {
         const fields = ["title", "about", "category", "time", "listItems", "preparation"];
         setInvalidFields(fields);

         return;
      }
      setIsLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("time", time);
      formData.append("ingredients", JSON.stringify(ingredients));
      formData.append("instructions", JSON.stringify(instructions));
      try {
         if (image) {
            const res = await fetch(image);
            const contentType = res.headers.get("content-type");
            const blob = await res.blob();
            const file = new File([blob], "image", { type: contentType });
            formData.append("recipeImg", file);
            await dispatch(fetchAddRecipe(formData));
         } else {
            await dispatch(fetchAddRecipe(formData));
         }
         scrollToTop();
         navigate("/my");
         dispatch(clearForm());
      } catch (error) {
         console.error(error);
         console.log(error.response.data.message);
         toast.error("Something went wrong, please try again later...");
      } finally {
         setIsLoading(true);
      }
   };

   return (
      <Container>
         <form>
            <RecipeDescriptionFields />
            <RecipeIngredientsFields />
            <RecipePreparationFields />
            <Button
               onClick={isFormValid ? handleSubmit : handleNotValid}
               isFormValid={isFormValid}
               disabled={isLoading}
            >
               {isLoading && <Loader size={"20"} color={"var(--text-dark)"} />}
               {!isLoading && "Add"}
            </Button>
         </form>
      </Container>
   );
};
