import styled from "styled-components";

export const Section = styled.div`
   background-color: var(--background-footer);
`;

export const Wrapper = styled.div`
   max-width: 480px;
   margin: 0 auto;
   padding: 0 16px;

   @media screen and (min-width: 768px) {
      max-width: 768px;
      padding: 0 32px;
   }
   @media screen and (min-width: 1280px) {
      max-width: 1280px;
   }
`;

export const FooterWrapper = styled.div`
   margin: 0 auto;
   width: 100%;
   padding-top: 28px;
   padding-bottom: 17px;

   @media (min-width: 768px) {
      padding-top: 50px;
      padding-bottom: 23px;
   }

   @media (min-width: 1280px) {
      padding-top: 64px;
      padding-bottom: 50px;
   }
`;

export const MainWrapper = styled.div`
   @media (min-width: 1280px) {
      display: flex;
      justify-content: space-between;
   }
`;

export const Tablet = styled.div`
   @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
   }
   @media (min-width: 1280px) {
      padding-top: 0;
      margin-bottom: 0px;
   }
`;
