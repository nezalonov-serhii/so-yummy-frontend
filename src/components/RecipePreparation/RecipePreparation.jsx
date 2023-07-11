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

const RecipePreparation = ({ thumb, instructions, title }) => {
  let instructionsArray = [];

  const stepSeparatedInstructions = instructions?.split(/^\d+[.)]\s*/gm);

  stepSeparatedInstructions.forEach((step) => {
    if (step.trim() === "") {
      return;
    }

    const lineSeparatedSteps = step
      .split("\n")
      .map((element) => element.trim());
    instructionsArray = instructionsArray.concat(lineSeparatedSteps);
  });

  let counter = 0;
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>Recipe Preparation</Title>
        <List>
          {instructionsArray.map((el, index) => {
            if (el.trim() === "") {
              return null;
            }
            counter += 1;
            return (
              <Item key={index}>
                <Number>{counter}</Number>
                <Text>{el}</Text>
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
