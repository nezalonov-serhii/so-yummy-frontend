import styled from "styled-components";

export const MyRecipesListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  @media screen and(nim-width: 768px) {
    margin-bottom: 50px;
  }
`;
