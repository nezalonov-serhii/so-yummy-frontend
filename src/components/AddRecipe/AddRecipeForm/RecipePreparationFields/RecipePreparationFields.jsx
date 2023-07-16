import { useState } from "react";
import { Container, Textarea } from "./RecipePreparationFields.styled";
import { Title } from "../../AddRecipe.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  setPreparation,
  validateForm,
} from "../../../../redux/Slice/addRecipeSlice/addRecipeFormSlice";

export const RecipePreparationFields = () => {
  const dispatch = useDispatch();

  const { invalidFields, isFormValid, preparation } = useSelector(
    (state) => state.data
  );
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
        placeholder="Enter recipe"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
};
