import styled from "styled-components";

export const TitleText = styled.h2`
   font-family: Poppins;
   color: var(--title);
   font-weight: 600;
   font-size: 28px;
   font-style: normal;
   line-height: 28px;
   letter-spacing: -2%;

   @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 32px;
      letter-spacing: -0.64px;
   }
   @media screen and (min-width: 1280px) {
      font-size: 44px;
      line-height: 44px;
      letter-spacing: -0.88px;
   }
`;

export const Section = styled.section`
   padding-top: 50px;
   padding-bottom: 50px;

   @media screen and (min-width: 768px) {
      padding-top: 72px;
      padding-bottom: 100px;
   }
   @mediascreen and (min-width: 1280px) {
      padding-top: 102px;
   }
`;

export const Wrapper = styled.div`
   max-width: 480px;
   // margin: 0 auto;
   padding: 0 15px;

   @media screen and (min-width: 768px) {
      max-width: 768px;
   }
   @media screen and (min-width: 1280px) {
      max-width: 1280px;
   }
`;
