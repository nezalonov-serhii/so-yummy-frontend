import styled from "styled-components";

const ShoppingPageContainer = styled.div`
   margin: 0 auto;
   width: 100%;
   padding-left: 16px;
   padding-right: 16px;

   @media (min-width: 480px) {
      width: 480px;
   }

   @media (min-width: 768px) {
      padding-left: 32px;
      padding-right: 32px;
      width: 768px;
   }
   @media (min-width: 1280px) {
      width: 1280px;
   }
`;

export { ShoppingPageContainer };
