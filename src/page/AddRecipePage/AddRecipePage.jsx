import { AddRecipeForm } from "../../components/AddRecipe/AddRecipeForm/AddRecipeForm";
import { FollowUsAddRecipe } from "../../components/AddRecipe/FollowUsAddRecipe/FollowUsAddRecipe";
import { PopularRecipe } from "../../components/AddRecipe/PopularRecipe/PopularRecipe";
import { Title } from "../../components/Title/Title";
import { Container } from "./AddRecipePage.styled";

const AddRecipePage = () => {
  return (
    <Container>
      <Title>Add recipe</Title>
      <AddRecipeForm />
      <FollowUsAddRecipe />
      <PopularRecipe />
    </Container>
  );
};
export default AddRecipePage;
