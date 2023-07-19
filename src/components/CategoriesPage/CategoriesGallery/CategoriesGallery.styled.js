import styled from "styled-components";

export const List = styled.ul`
   list-style: none;
   margin: 0 auto;

   @media (min-width: 768px) {
      display: flex;

      flex-wrap: wrap;
      gap: 32px;
      justify-content: center;
   }
   @media (min-width: 1280px) {
      gap: 13px;
   }
`;

export const Item = styled.li`
   position: relative;
   width: 100%;
   height: 323px;
   margin: 0 auto;
   @media (max-width: 767px) {
      &:not(:last-child) {
         margin-bottom: 28px;
      }
   }

   @media (min-width: 768px) {
      width: calc((100% - 32px) / 2);
      margin: 0px;
   }
   @media (min-width: 1280px) {
      width: calc((100% - 39px) / 4);

      &:not(:last-child) {
         margin-bottom: 87px;
      }
   }
`;

export const Picture = styled.img`
   display: block;
   width: 100%;
   height: 100%;
   border-radius: 8px;
   object-fit: cover;
`;

export const Title = styled.p`
   position: absolute;
   bottom: 18px;
   left: 18px;
   background-color: var(--background-primary);
   width: calc(100% - 36px);
   padding-top: 16px;
   padding-left: 16px;
   padding-bottom: 16px;
   display: flex;
   align-items: center;

   border-radius: 8px;
   color: var(--text-primary);
   font-size: 15px;
   font-weight: 500;
   @media (min-width: 768px) {
      width: 300px;
   }
   @media (min-width: 1280px) {
      width: 268px;
      bottom: 16px;
      left: 16px;
      font-size: 14px;
   }
`;
