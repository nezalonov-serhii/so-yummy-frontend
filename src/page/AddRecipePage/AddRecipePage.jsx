import { AddRecipeForm } from "../../components/AddRecipe/AddRecipeForm/AddRecipeForm";
import { FollowUsAddRecipe } from "../../components/AddRecipe/FollowUsAddRecipe/FollowUsAddRecipe";
import { PopularRecipe } from "../../components/AddRecipe/PopularRecipe/PopularRecipe";
import { Title } from "../../components/Title/Title";

const AddRecipePage = () => {
  return (
    <>
      <Title>Add recipe</Title>
      <AddRecipeForm />
      <FollowUsAddRecipe />
      <PopularRecipe />
    </>
  );
};
export default AddRecipePage;
