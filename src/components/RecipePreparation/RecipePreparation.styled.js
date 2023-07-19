import styled from "styled-components";

export const Wrapper = styled.div`
   padding: 0 16px;
   margin-left: auto;
   margin-right: auto;
   margin-bottom: 100px;
   max-width: 343px;

   @media (min-width: 480px) {
      max-width: 480px;
   }

   @media (min-width: 768px) {
      padding: 0 32px;
      margin-bottom: 200px;
      max-width: 704px;
   }

   @media (min-width: 1280px) {
      display: flex;
      justify-content: space-between;
      gap: 50px;
      max-width: 1280px;
   }
`;

export const InnerWrapper = styled.div`
   @media (min-width: 1280px) {
      display: flex;
      flex-direction: column;
   }
`;

export const Title = styled.h2`
   margin-bottom: 28px;

   font-weight: 600;
   font-size: 24px;
   line-height: 1;
   letter-spacing: -0.02em;
   color: var(--text-primary);
   @media (min-width: 768px) {
      margin-bottom: 32px;
   }
`;

export const List = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 14px;

   margin-bottom: 40px;

   @media (min-width: 768px) {
      gap: 18px;
      margin-bottom: 50px;
   }
`;

export const Item = styled.li`
   display: flex;
   align-items: center;
   gap: 14px;
`;

export const Number = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   min-width: 21px;
   height: 21px;

   font-weight: 600;
   font-size: 12px;
   line-height: 1.5;
   color: var(--text-light);
   background-color: var(--button-background-primary);

   border-radius: 50%;

   @media (min-width: 768px) {
      font-size: 14px;
   }
`;

export const Text = styled.p`
   font-size: 12px;
   line-height: 1.17;
   letter-spacing: -0.02em;
   color: var(--text-primary);
   @media (min-width: 768px) {
      font-size: 14px;
      line-height: 1.29;
   }
`;

export const Image = styled.img`
   width: 343px;
   height: 250px;
   border-radius: 8px;

   @media (min-width: 768px) {
      width: 433px;
      height: 332px;
   }

   @media (min-width: 1280px) {
      width: 433px;
      height: 332px;
      flex-shrink: 0;
   }
`;
