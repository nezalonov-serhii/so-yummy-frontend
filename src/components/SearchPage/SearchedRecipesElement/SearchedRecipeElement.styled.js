import styled from "styled-components";

const RecipeImage = styled.img`
   height: 323px;
   min-width: 100%;
   border-radius: 8px;
   object-fit: cover;
`;

const RecipeTitle = styled.p`
   width: calc(100% - 32px);

   padding: 16px 0 16px 16px;

   border-radius: 8px;

   position: absolute;
   left: 16px;
   bottom: 0;
   /* transform: translate(-50%); */

   bottom: 26px;

   background-color: var(--background-secondary);

   font-family: Poppins;
   font-size: 16px;
   font-weight: 500;
   line-height: 1.25;
   letter-spacing: -0.23999999463558197px;
   text-align: left;

   color: var(--text-primary);

   @media (min-width: 1280px) {
      bottom: 24px;
   }
`;

export { RecipeImage, RecipeTitle };
