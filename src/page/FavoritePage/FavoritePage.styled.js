import styled from "styled-components";

export const WrapPage = styled.div`
   max-width: 480px;
   margin: 0 auto;
   padding: 0 16px;

   @media screen and (min-width: 768px) {
      max-width: 768px;
      padding: 0 32px;
   }
   @media screen and (min-width: 1280px) {
      max-width: 1280px;
   }
`;
export const BacketWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   margin-bottom: 50px;
`;

export const EmptyText = styled.p`
   color: var(--text-third);
   text-overflow: ellipsis;
   font-family: Poppins;
   font-size: 8px;
   font-style: normal;
   font-weight: 400;
   line-height: 10px;
   letter-spacing: -0.16px;
   margin-top: 20px;

   @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.28px;
   }

   @media screen and (min-width: 1280px) {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.36px;
   }
`;
