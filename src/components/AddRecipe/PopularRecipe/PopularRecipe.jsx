import { useDispatch } from "react-redux";
// import recipes from "../../../recipes.json";
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
import { fetchRecipePopular } from "../../../redux/thunk/addRecipe/operations";
import { useEffect, useState } from "react";
export const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchRecipePopular());
        const responseData = response.payload.data;
        setRecipes(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Container>
      <Title>Popular recipe</Title>
      <List>
        {recipes.map(({ _id, preview, title, description }) => {
          const name = title.length < 26 ? title : title.slice(0, 21) + "...";
          const paragraph =
            description.length < 100
              ? description
              : description.slice(0, 80) + "...";
          return (
            <Item key={_id}>
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
