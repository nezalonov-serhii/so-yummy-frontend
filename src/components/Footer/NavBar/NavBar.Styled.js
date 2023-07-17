import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  margin-bottom: 32px;
  text-align: center;
  min-width: fit-content;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-left: 175px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 120px;
  }
`;

export const ItemNav = styled.li`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
  @media screen and (min-width: 768px) {
    text-align: start;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const Styledlink = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.28px;
  color: var(--text-light);
  &:hover,
  :focus {
    transition: var(--cubic-bezier);
    color: var(--navlink-hover);
  }
`;
