import styled from "styled-components";
const RecipesList = styled.ul`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 28px;
   margin: 0 auto;
   @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 32px;
   }

   @media (min-width: 1280px) {
      gap: 90px 14px;
   }
`;
const RecipeItem = styled.li`
   width: 100%;
   overflow: hidden;
   height: 323px;

   border-radius: 8px;
   position: relative;
   @media (min-width: 768px) {
      width: calc((100% / 2) - 16px);
   }

   @media (min-width: 1280px) {
      width: calc((100% / 4) - 12px);
   }

   & a {
      height: 323px;
   }
`;
export { RecipesList, RecipeItem };
