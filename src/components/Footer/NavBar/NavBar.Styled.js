
import styled from "styled-components";
// import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  margin-bottom: 32px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    text-align: start;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 101px;
  }
`;

export const ItemNav = styled.li`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const Styledlink = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: var(-dark-text-primary);
  &:hover,
  :focus {
    color: var( --dark-background-footer);
  }
`;