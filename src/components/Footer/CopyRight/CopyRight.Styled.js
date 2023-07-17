import styled from "styled-components";

export const RightsBox = styled.div`
  padding-top: 28px;
  padding-bottom: 28px;
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const RightsText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 14px;
  color: var(--central-point-title);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: -0.1px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.14px;
    gap: 28px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;

export const Span = styled.div`
  color: var(--central-point-title);
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: -0.1px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.14px;
  }
`;
