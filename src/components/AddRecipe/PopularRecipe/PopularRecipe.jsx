import recipes from "../../../recipes.json";
import { Title } from "../AddRecipe.styled";
import {
  Container,
  Image,
  Item,
  List,
  SecondaryTitle,
  Text,
  TextWrapper,
} from "./PopularRecipe.styled";
export const PopularRecipe = () => {
  return (
    <Container>
      <Title>Popular recipe</Title>
      <List>
        {recipes.slice(0, 4).map(({ _id, preview, title, description }) => {
          const name = title.length < 26 ? title : title.slice(0, 21) + "...";
          const paragraph =
            description.length < 100
              ? description
              : description.slice(0, 80) + "...";
          return (
            <Item key={_id.$oid}>
              <Image src={preview} />

              <TextWrapper>
                <SecondaryTitle>{name}</SecondaryTitle>
                <Text>{paragraph}</Text>
              </TextWrapper>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};
