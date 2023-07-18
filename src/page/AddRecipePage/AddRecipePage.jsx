import { AddRecipeForm } from "../../components/AddRecipe/AddRecipeForm/AddRecipeForm";
import { FollowUsAddRecipe } from "../../components/AddRecipe/FollowUsAddRecipe/FollowUsAddRecipe";
import { PopularRecipe } from "../../components/AddRecipe/PopularRecipe/PopularRecipe";
import { Title } from "../../components/Title/Title";

import { Container, RightContainer, Wrapper } from "./AddRecipePage.styled";

const AddRecipePage = () => {
   return (
      <Wrapper>
         <Title>Add recipe</Title>
         <Container>
            <AddRecipeForm />
            <RightContainer>
               <FollowUsAddRecipe />
               <PopularRecipe />
            </RightContainer>
         </Container>
      </Wrapper>
   );
};
export default AddRecipePage;
