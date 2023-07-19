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
   background-color: var(--background-mobile-modal);

   @media (max-width: 479px) {
      background-image: url(${modalMOb});
      background-position: left bottom;
      background-repeat: no-repeat;
      background-size: contain;
   }
   @media (max-width: 1279px) {
      padding-left: 20px;
      background-image: url(${modalTab});
      background-position: right bottom;
      background-repeat: no-repeat;
      background-size: contain;
      width: 100vw;
      padding-left: 0;

      ${({ nav }) => {
         if (nav) {
            return `
      transform: translateY(0%);
      display: flex;`;
         } else {
            return `
      transform: translateY(-150%);
       `;
         }
      }}

      flex-direction: column;
      justify-content: center;
      font-size: 22px;
      line-height: 20px;

      position: absolute;
      left: 0;
      top: 0;

      width: 100vw;
      height: 101vh;
      z-index: 10;
      padding: 20px;
   }

   @media (min-width: 1280px) {
      align-items: center;
      background-color: transparent;
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

   font-size: 18px;
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

   @media (min-width: 780px) {
      font-size: 24px;
   }
   @media (min-width: 1280px) {
      font-size: 14px;
   }
`;

export const StyledLinkSearch = styled(NavLink)`
   color: var(--text-primary);
   font-size: 24px;
   display: flex;
   align-items: center;

   transition: color 250ms linear;
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

   &:hover p {
      color: var(--accent-color);
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

   transition: color 250ms var(--cubic-bezier);

   ${({ page, screen }) => {
      if (page === "/main" && screen.desktop) return "color: var(--text-dark);";
      if (page.includes("/recipe")) return "color: var(--text-dark);";
   }};
`;
export const Box = styled.div`
   display: flex;
   align-items: center;
   position: relative;
`;
