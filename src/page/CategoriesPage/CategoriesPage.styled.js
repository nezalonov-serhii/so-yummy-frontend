import styled from "styled-components";

export const Container = styled.div`
   margin: 0 auto;
   width: 100%px;
   padding: 0 16px 100px 16px;

   @media (min-width: 480px) {
      width: 480px;
   }

   @media (min-width: 768px) {
      width: 768px;
      padding: 0 32px 200px 32px;
   }
   @media (min-width: 1280px) {
      width: 1280px;
      padding: 0 32px;
      padding-bottom: 200px;
   }
`;
