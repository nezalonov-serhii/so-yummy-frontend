import styled from "styled-components";

const RecipeImage = styled.img`
  border-radius: 8px;
  width: 100%;
`;

const RecipeTitle = styled.p`
  width: 307px;

  padding: 16px 0 16px 16px;

  border-radius: 8px;

  position: absolute;
  left: 50%;
  transform: translate(-50%);

  bottom: 26px;

  background-color: #ffffff;

  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.23999999463558197px;
  text-align: left;

  color: #3e4462;
  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 1024px) {
    width: 268px;
    bottom: 24px;
  }
`;

export { RecipeImage, RecipeTitle };
