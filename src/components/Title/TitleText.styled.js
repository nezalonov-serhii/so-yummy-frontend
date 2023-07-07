import styled from "styled-components";

export const TitleText = styled.h2`
  font-family: Poppins;
  color: #001833;
  font-weight: 600;
  font-size: 28px;
  font-style: normal;
  line-height: 28px;
  letter-spacing: -2%;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.64px;
  }
  @media (min-width: 1280px) {
    font-size: 44px;
    line-height: 44px;
    letter-spacing: -0.88px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 50px;
  margin-left: 16px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    margin-top: 72px;
    margin-left: 32px;
    margin-bottom: 100px;
  }
  @media (min-width: 1280px) {
    margin-top: 102px;
    margin-left: 100px;
    margin-bottom: 100px;
  }
`;
