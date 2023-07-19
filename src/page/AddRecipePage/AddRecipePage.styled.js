import styled from "styled-components";

export const Wrapper = styled.div`
   max-width: 480px;
   margin-left: auto;
   margin-right: auto;
   padding-left: 16px;
   padding-right: 16px;
   font-style: normal;
   @media screen and (min-width: 480px) {
      width: 480px;
   }
   @media screen and (min-width: 768px) {
      min-width: 768px;
      padding-left: 32px;
      padding-right: 32px;
      margin-bottom: 200px;
   }
   @media screen and (min-width: 1280px) {
      min-width: 1280px;
      margin-bottom: 200px;
   }
`;

export const Container = styled.div`
   @media screen and (min-width: 1280px) {
      display: flex;
      padding-top: 100px;
   }
`;

export const RightContainer = styled.div`
   @media screen and (min-width: 1280px) {
      width: 319px;
      margin-left: 121px;
   }
`;
