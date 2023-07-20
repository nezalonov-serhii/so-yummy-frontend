import styled from "styled-components";

const SearchPageContainer = styled.div`
   margin: 0 auto;
   max-width: 480px;

   padding: 0 16px;

   @media (min-width: 768px) {
      padding: 0 32px;
      max-width: 768px;
   }

   @media (min-width: 1280px) {
      max-width: 1280px;
   }
`;

const Container = styled.div`
   padding-top: 50px;
   padding-bottom: 100px;

   @media (min-width: 768px) {
      padding-top: 40px;
      padding-bottom: 200px;
   }

   @media (min-width: 1280px) {
      padding-top: 50px;
   }
`;

export { SearchPageContainer, Container };
