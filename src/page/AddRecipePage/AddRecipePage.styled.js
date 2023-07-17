import styled from "styled-components";

export const Wrapper = styled.div`
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
  @media screen and (min-width: 1280px) and (max-width: 1439px) {
    min-width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 200px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
    margin-bottom: 200px;
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    margin-top: 100px;
  }
`;

export const RightContainer = styled.div`
  @media screen and (min-width: 1280px) {
    width: 319px;
    margin-left: 121px;
  }
`;
