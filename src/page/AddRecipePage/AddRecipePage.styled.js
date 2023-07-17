import styled from "styled-components";

export const Container = styled.div`
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  font-style: normal;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    min-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    min-width: 1280px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
