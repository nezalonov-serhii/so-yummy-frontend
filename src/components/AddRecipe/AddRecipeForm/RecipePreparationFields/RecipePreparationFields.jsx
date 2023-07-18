import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
   setPreparation,
   validateForm,
} from "../../../../redux/Slice/addRecipeSlice/addRecipeFormSlice";

import { Container, ErrorMessagePreparation, Textarea } from "./RecipePreparationFields.styled";
import { Title } from "../../AddRecipe.styled";

export const RecipePreparationFields = () => {
   const dispatch = useDispatch();

   const { preparation, isClickDisabledButton, invalidFields } = useSelector((state) => state.data);
   const [value, setValue] = useState(preparation.join("\n"));

   const handleKeyDown = (event) => {
      if (event.key === "Enter") {
         event.preventDefault();
         setValue((prevValue) => prevValue + "\n");
      }
   };

   const handleChange = (event) => {
      setValue(event.target.value);
      dispatch(setPreparation(event.target.value.split("\n")));
      dispatch(validateForm());
   };

   return (
      <Container>
         <Title>Recipe Preparation</Title>
         <Textarea
            placeholder={
               isClickDisabledButton && invalidFields.preparation
                  ? "Please add the recipe"
                  : "Enter recipe"
            }
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            hasError={isClickDisabledButton && invalidFields.preparation}
         />
         {isClickDisabledButton && invalidFields.preparation && (
            <ErrorMessagePreparation>Please enter instructions</ErrorMessagePreparation>
         )}
      </Container>
   );
};
