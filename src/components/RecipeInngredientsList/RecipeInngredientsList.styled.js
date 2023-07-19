import styled from "styled-components";
import Сheck from "../../images/RecipePage/svg/сheck.svg";

export const Div = styled.div`
   padding: 0 16px;
   margin-left: auto;
   margin-right: auto;
   max-width: 343px;

   @media (min-width: 480px) {
      max-width: 480px;
   }

   @media (min-width: 768px) {
      padding: 0 32px;
      max-width: 704px;
   }

   @media (min-width: 1280px) {
      max-width: 1280px;
   }
`;

export const Head = styled.div`
   display: flex;
   justify-content: space-between;

   min-width: 288px;
   min-height: 42px;
   padding: 12px 14px;
   margin-bottom: 24px;

   background: var(--button-background-primary);
   border-radius: 8px;

   @media (min-width: 768px) {
      padding: 21px 32px;
      margin-bottom: 32px;
   }

   @media (min-width: 1280px) {
      padding: 21px 40px;
      margin-bottom: 50px;
   }
`;

export const HeadText = styled.p`
   font-weight: 600;
   font-size: 10px;
   line-height: 1.5;
   letter-spacing: 0.03em;
   color: var(--text-light);

   @media (min-width: 768px) {
      font-size: 18px;
      letter-spacing: 0.03em;
   }
`;

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 18px;

   @media (min-width: 768px) {
      gap: 38px;
   }

   @media (min-width: 1280px) {
      gap: 109px;
   }
`;

export const List = styled.ul`
   margin-bottom: 50px;

   @media (min-width: 768px) {
      margin-bottom: 96px;
   }

   @media (min-width: 1280px) {
      margin-bottom: 100px;
   }
`;

export const Item = styled.li`
   display: flex;
   justify-content: space-between;
   align-items: center;

   min-width: 288px;
   min-height: 86px;
   padding: 10px 29px 10px 10px;
   background: var(--background-recipe-card);
   border-radius: 8px;

   &:not(:last-child) {
      margin-bottom: 16px;
   }

   @media (min-width: 768px) {
      padding: 16px 58px 16px 24px;

      &:not(:last-child) {
         margin-bottom: 24px;
      }
   }

   @media (min-width: 1280px) {
      padding: 1px 70px 1px 32px;
   }
`;

export const Ingredient = styled.div`
   display: flex;
   align-items: center;
   gap: 12px;

   @media (min-width: 768px) {
      gap: 24px;
   }

   @media (min-width: 1280px) {
      gap: 40px;
   }
`;

export const Image = styled.img`
   width: 65px;
   height: 65px;

   @media (min-width: 768px) {
      width: 112px;
      height: 112px;
   }

   @media (min-width: 1280px) {
      width: 180px;
      height: 180px;
   }
`;

export const IngredientTitle = styled.span`
   font-weight: 500;
   font-size: 12px;
   line-height: 1.17;
   letter-spacing: -0.24px;

   color: var(--text-primary);
   @media (min-width: 768px) {
      font-size: 24px;
      line-height: 1;
   }
`;

export const ItemWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 28px;

   @media (min-width: 768px) {
      gap: 78px;
   }

   @media (min-width: 1280px) {
      gap: 151px;
   }
`;

export const Measure = styled.div`
   min-width: 47px;
   max-width: 70px;
   min-height: 23px;
   padding: 4px;
   text-align: center;

   font-weight: 600;
   font-size: 10px;
   line-height: 1.5;
   background: var(--accent-color);
   color: var(--text-light);

   border-radius: 4px;

   @media (min-width: 768px) {
      min-width: 68px;
      max-width: 121px;
      min-height: 35px;

      font-size: 18px;
   }
`;

export const Checkbox = styled.input`
   margin: 0;

   height: 18px;
   width: 18px;

   background: transparent;
   appearance: none;
   border: 1px solid rgba(126, 126, 126, 0.5);
   border-radius: 4px;
   outline: none;
   cursor: pointer;

   &:checked {
      background-image: url(${Сheck});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 50% 50%;
   }

   @media (min-width: 768px) {
      height: 35px;
      width: 35px;
   }
`;
