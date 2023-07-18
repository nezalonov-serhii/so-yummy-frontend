import Food from "../../images/RecipePage/svg/food.svg";
import {
   Image,
   InnerWrapper,
   Item,
   List,
   Number,
   Text,
   Title,
   Wrapper,
} from "./RecipePreparation.styled";

const RecipePreparation = ({ instructions, title, thumb }) => {
   let instructionsArry = [];

   if (instructions === undefined) {
      return;
   } else {
      if (instructions.join("").includes("\r\n")) {
         instructionsArry = instructions.join("").split("\r\n");
      } else {
         instructionsArry = instructions.join("").split(".");
      }
   }

   let counter = 0;

   return (
      <Wrapper>
         <InnerWrapper>
            <Title>Recipe Preparation</Title>
            <List>
               {instructionsArry &&
                  instructionsArry.map((item) => {
                     if (item.trim() === "") {
                        return null;
                     }
                     return (
                        <Item key={counter}>
                           <Number>{(counter += 1)}</Number>
                           <Text>{item}</Text>
                        </Item>
                     );
                  })}
            </List>
         </InnerWrapper>
         <Image src={thumb || Food} alt={title} />
      </Wrapper>
   );
};
export default RecipePreparation;
