import styled from "styled-components";

export const BenefList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    list-style: disc;
  }
`
export const BenefItem = styled.li`
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  margin-left: 20px;
  color: var(--text-light);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`
