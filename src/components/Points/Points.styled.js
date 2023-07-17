import styled from "styled-components";

export const Container = styled.div`
   position: relative;
   top: 0;
`;
export const CentralPoint = styled.div`
   position: absolute;
   width: 6px;
   height: 6px;
   transform: rotate(-25deg);
   flex-shrink: 0;
   border-radius: 3px;
   background: var(--central-point-title);
   top: 20px;
   left: 247px;

   @media screen and (min-width: 768px) {
      width: 12px;
      height: 12px;
      top: 23px;
      left: 453px;
   }
   @media screen and (min-width: 1280px) {
      top: 38px;
      left: 707px;
   }
`;
export const LeftPoint = styled.div`
   position: absolute;
   width: 8px;
   height: 8px;
   background: var(--accent-color);
   border-radius: 3px;
   transform: rotate(-25deg);
   flex-shrink: 0;
   top: -40px;
   left: 136px;

   @media screen and (min-width: 768px) {
      width: 14px;
      height: 14px;
      top: -51px;
      left: 235px;
   }

   @media screen and (min-width: 1280px) {
      left: 290px;
      top: -47px;
   }
`;
export const RightPoint = styled.div`
   position: absolute;
   width: 8px;
   height: 8px;
   background: var(--accent-color);
   border-radius: 3px;
   transform: rotate(-25deg);
   flex-shrink: 0;
   top: -6px;
   right: 16px;

   @media screen and (min-width: 768px) {
      width: 14px;
      height: 14px;
      top: -20px;
      right: 24px;
   }

   @media screen and (min-width: 1280px) {
      right: 171px;
   }
`;
