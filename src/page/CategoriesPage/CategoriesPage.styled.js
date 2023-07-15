import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding-bottom: 200px;
  }
  @media (min-width: 1280px) {
    margin: 0 auto;
    width: 1280px;
    padding: 0 20px;
    padding-bottom: 200px;
  }
`;
