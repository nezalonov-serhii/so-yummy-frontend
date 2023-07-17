import styled from "styled-components";

export const NotFoundContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  @media (min-width: 768px) {
    margin-bottom: 204px;
  }
`;

export const NotFoundTitle = styled.h3`
  color: var(--text-other);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -2%;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 14px;
  }
`;

export const NotFoundText = styled.p`
  color: var(--text-third);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -2%;
  width: 206px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    width: auto;
  }
`;

export const NotFoundImg = styled.img`

`
