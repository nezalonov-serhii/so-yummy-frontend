import { useState } from "react";
import { Container, Textarea, Title } from "./RecipePreparationFields.styled";

export const RecipePreparationFields = ({ onChange }) => {
  const [value, setValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setValue((prevValue) => prevValue + "\n");
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value.split("\n"));
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
