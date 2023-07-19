import styled from "styled-components";

export const Container = styled.div`
   margin-top: 72px;
   /* margin-bottom: 72px; */
   @media screen and (min-width: 768px) {
      margin-top: 100px;
   }
   @media screen and (min-width: 1280px) {
      width: 100%;
      margin-top: 0;
      flex: 1;
   }
`;
export const Button = styled.button`
   color: var(--text-light);
   border-radius: 15px 30px 15px 30px;
   margin-top: 18px;
   padding: 12px 48px;
   border: none;
   font-size: 16px;
   font-weight: 400;
   line-height: normal;
   background-color: ${(props) =>
      props.isFormValid ? "var(--accent-color)" : "var(--background-footer)"};

   @media screen and (min-width: 768px) {
      padding: 14px 64px;
      margin-top: 32px;
   }

   &:disabled {
      opacity: 0.4;
   }
`;

export const ErrorMessage = styled.span`
   position: absolute;
   bottom: -22px;
   left: 0;
   color: #e74a3b;
   font-size: 14px;
   font-weight: 400;
   line-height: normal;
`;
