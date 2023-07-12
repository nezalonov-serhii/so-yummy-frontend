import styled from "styled-components";

export const NotFoundContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (min-width: 768) {
    margin-bottom: 204px;
  }
`;

export const NotFoundTitle = styled.h3`
  color: #000000;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -2%;
  margin-bottom: 8px;

  @media (min-width: 768) {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 14px;
  }
`;

export const NotFoundText = styled.p`
  color: #000000;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -2%;

  @media (min-width: 768) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const NotFoundImg = styled.img`

`
