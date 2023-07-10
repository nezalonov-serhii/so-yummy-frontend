import { AddRecipeForm } from "../../components/AddRecipe/AddRecipeForm/AddRecipeForm";
import { FollowUs } from "../../components/AddRecipe/FollowUs/FollowUs";
import { PopularRecipe } from "../../components/AddRecipe/PopularRecipe/PopularRecipe";
import { Title } from "../../components/Title/Title";

const AddRecipePage = () => {
  return (
    <>
      <Title>Add recipe</Title>
      <AddRecipeForm />
      <FollowUs />
      <PopularRecipe />
    </>
  );
};
export default AddRecipePage;
