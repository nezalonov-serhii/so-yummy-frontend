import styled from "styled-components";

export const WrapPage = styled.div`
   width: 100%;
   margin: 0 auto;
   padding: 0 16px;

   @media screen and (min-width: 480px) {
      width: 480px;
   }

   @media screen and (min-width: 768px) {
      width: 768px;
      padding: 0 32px;
   }
   @media screen and (min-width: 1280px) {
      width: 1280px;
   }
`;

export const Container = styled.div`
   padding-top: 50px;
   @media screen and (min-width: 768px) {
      padding-top: 100px;
   }
`;
