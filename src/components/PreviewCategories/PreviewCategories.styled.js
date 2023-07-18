import styled from "styled-components";

export const CategoryList = styled.ul`
   list-style: none;
   display: flex;
   justify-content: center;
   @media (min-width: 768px) {
      justify-content: space-between;
   }
`;

export const CategoryItem = styled.li`
   font-family: Poppins;
   font-size: 28px;
   font-style: normal;
   font-weight: 600;
   line-height: 28px;
   letter-spacing: -0.56px;

   @media (min-width: 768px) {
      font-size: 44px;
      line-height: 44px;
      letter-spacing: -0.88px;
   }
`;

export const SeeAllButton = styled.button`
   width: 94px;
   height: 38px;
   font-size: 14px;
   font-weight: 400;
   line-height: 18px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: var(--text-light);
   background-color: var(--button-background-primary);
   margin-top: 24px;
   padding: 10px 24px;
   border: none;
   border-radius: 6px;
   cursor: pointer;
   align-self: flex-end;
   transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
   opacity: 1;
   &:hover,
   &:focus {
      background: var(--button-background-primary);
      opacity: 0.9;
   }
   @media (min-width: 768px) {
      margin-top: 40px;
   }
   @media (min-width: 1280px) {
      margin-top: 50px;
   }
`;

export const CategoryContainer = styled.div`
   display: flex;
   margin-top: 32px;
   flex-direction: column;
   justify-content: space-between;
`;

export const CategoryTitle = styled.h2`
   color: var(--title);
   font-family: Poppins;
   font-size: 28px;
   margin-bottom: 32px;
   @media (min-width: 768px) {
      font-size: 44px;
   }
`;

export const OtherCategoriesButton = styled.button`
   margin: 0 auto;
   width: 195px;
   height: 46px;
   background-color: transparent;
   border: 2px solid var(--button-background-primary);
   color: var(--background-footer);
   border-radius: 24px 44px;
   justify-content: center;
   margin-top: 40px;
   margin-bottom: 118px;
   line-height: 1.5;
   letter-spacing: -0.02em;
   font-size: 14px;
   font-weight: 400;
   cursor: pointer;
   transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

   &:hover,
   &:focus {
      background: var(--button-background-primary);
      color: var(--text-light);
   }

   @media (min-width: 768px) {
      width: 239px;
      height: 61px;
      font-size: 16px;
   }
`;
