import { AddRecipeForm } from "../../components/AddRecipe/AddRecipeForm/AddRecipeForm";
import { FollowUs } from "../../components/AddRecipe/FollowUs/FollowUs";
import { MainTitle } from "../../components/AddRecipe/MainTitle/MainTitle";
import { PopularRecipe } from "../../components/AddRecipe/PopularRecipe/PopularRecipe";

export const AddRecipePage = () => {
  return (
    <>
      <MainTitle />
      <AddRecipeForm />
      <FollowUs />
      <PopularRecipe />
    </>
  );
};
