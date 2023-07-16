import styled from "styled-components";

export const WrapPage = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
