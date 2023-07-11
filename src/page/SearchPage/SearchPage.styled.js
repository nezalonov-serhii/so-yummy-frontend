import styled from "styled-components";

const SearchPageContainer = styled.div`
   margin: 0 auto;
   max-width: 480px;
   padding-left: 15px;
   padding-right: 15px;
   padding-bottom: 100px;
   @media (min-width: 768px) {
      max-width: 768px;
   }

   @media (min-width: 1280px) {
      max-width: 1280px;
   }
`;

export { SearchPageContainer };
