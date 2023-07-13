import styled from "styled-components";

export const RightsBox = styled.div`
  height: 66px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 78px;
  }
  @media screen and (min-width: 1280px) {
    height: 114px;
  }
`;

export const RightsText = styled.div`
  color: var(--background-footer);
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.1px;
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const Span = styled.span`
  font-weight: 400;
`;
