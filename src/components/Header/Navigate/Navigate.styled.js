import styled from "styled-components";
import { NavLink } from "react-router-dom";
import modalMOb from "../../../images/Modal/modalLeafMob.png";
import modalTab from "../../../images/Modal/modalLeafTab.png";

export const Nav = styled.nav`
  display: flex;
  @media (min-width: 1280px) {
  }
`;

export const Line = styled.ul`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 18px;
  font-family: Poppins;
  gap: 30px;
  transition: all 250ms linear;

  @media (max-width: 480px) {
    padding-left: 20px;
    background-image: url(${modalMOb});
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: contain;
    padding-left: 0;
  }
  @media (max-width: 1280px) {
    padding-left: 20px;
    background-image: url(${modalTab});
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100vw;
    padding-left: 0;
  }

  @media (max-width: 1280px) {
    /* transform: translateY(-100%); */
    ${({ nav }) => {
      console.log(nav);

      if (nav) {
        return `
      transform: translateY(0%);
      display: flex;`;
      } else {
        return `
      transform: translateY(-100%);
       `;
      }
    }}

    /* display: ${(props) => (props.nav ? "flex" : "none")}; */
      flex-direction: column;
    justify-content: center;
    font-size: 22px;
    line-height: 20px;
    align-items: center;

    position: absolute;
    left: 0;
    top: 0;

    width: 100vw;
    height: 101vh;
    z-index: 10;
    background-color: var(--background-primary);
    padding: 20px;
  }

  & a {
    ${({ page }) => {
      if (page.includes("/recipe")) return "color: var(--text-dark);";
    }}
  }
`;

export const MobileBtn = styled.div`
  margin-left: 30px;
  right: 20px;
  top: 20px;
  display: flex;
  width: ${(props) => (props.size ? `${props.size}px` : "32px")};
  height: ${(props) => (props.size ? `${props.size}px` : "32px")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  color: var(--text-primary);

  @media (min-width: 1280px) {
    display: none;
    position: absolute;
  }
`;
export const StyledLink = styled(NavLink)`
  color: var(--text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: 500;
  line-height: 1.6;

  transition: color 250ms var(--cubic-bezier);
  &.active {
    color: var(--accent-color);
  }
  &:hover {
    color: var(--accent-color);
  }
`;
export const Search = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchText = styled.p`
  margin-left: 8px;
  @media (min-width: 1280px) {
    display: none;
  }
`;
export const BoxName = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  @media (min-width: 1280px) {
    margin-left: 150px;
  }
`;

export const LogoAvatarWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;
export const LogoAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.p`
  margin-left: auto;
  padding-left: 10px;
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.7;

  @media (min-width: 1280px) {
  }

  ${({ page }) => {
    if (page === "/main") return "color: var(--text-dark);";
    if (page.includes("/recipe")) return "color: var(--text-dark);";
  }}
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
