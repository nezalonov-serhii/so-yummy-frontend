import styled from "styled-components";

export const BenefList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    list-style: disc;
  }
`;
export const BenefItem = styled.li`
  font-size: 14px;
  font-weight: 400; 
   min-width: fit-content;
  line-height: 1.28;
  letter-spacing: -0.02em;
  margin-left: 20px;
  color: var(--text-light);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
    margin-left: 0,
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;
