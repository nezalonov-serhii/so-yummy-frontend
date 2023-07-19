import styled from "styled-components";

const Container = styled.div`
   width: 100%;
   margin: 0 auto;
   padding: 0 16px;
   @media (min-width: 480px) {
      width: 480px;
   }
   @media (min-width: 768px) {
      padding: 0 32px;
      width: 768px;
   }
   @media (min-width: 1280px) {
      width: 1280px;
   }
`;

export default Container;
