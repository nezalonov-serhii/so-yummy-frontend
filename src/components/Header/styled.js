import styled from "styled-components";

export const HeaderContainer = styled.header`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   padding: 18px 0;
   display: flex;
   justify-content: space-between;
`;

export const Box = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const ThemeSwitch = styled.div`
   width: 61px;
   height: 27px;
   border-radius: 27px;
   background-color: var(--toggle-them);
   box-shadow: 1px 3px 9px 4px rgba(52, 52, 52, 0.2) inset;

   position: absolute;
   bottom: 16px;
   left: 16px;

   cursor: pointer;

   @media (min-width: 768px) {
      bottom: 32px;
      left: 32px;
   }

   @media (min-width: 1280px) {
      position: relative;
      bottom: 0;
      left: 0;
   }
`;

export const WrapThemeSwitchMobile = styled.div`
   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translateX(-50%);

   width: 100%;

   @media (min-width: 480px) {
      width: 480px;
   }

   @media (min-width: 768px) {
      width: 768px;
   }
`;

export const WrapThemeSwitcher = styled.div`
   display: flex;
   align-items: center;
   gap: 50px;
`;

export const ThemeToggle = styled.div`
   position: relative;
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: var(--text-light);
   box-shadow: 0px 0px 6px 2px rgba(52, 52, 52, 0.3);

   transition: all 250ms linear;

   ${({ darkThem }) => {
      if (!darkThem) {
         return `
           top: 50%;
           left: 0%;
           transform: translate(3px, -50%);
           `;
      } else {
         return ` 
           top: 50%;
           left: 100%;
           transform: translate(calc(-100% - 3px), -50%);
          `;
      }
   }}
`;
