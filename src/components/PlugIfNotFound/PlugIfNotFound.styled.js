import styled from "styled-components";

export const PlugContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  @media (min-width: 768px) {
    margin-bottom: 200px;
  }
`;

export const NotFoundText = styled.p`
  color: var(--text-third);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: medium;
  line-height: 14px;
  letter-spacing: -2%;
  /* width: 206px; */
  text-align: center;
  margin-top: 24px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
    margin-top: 32px;
    /* width: auto; */
  }
`;