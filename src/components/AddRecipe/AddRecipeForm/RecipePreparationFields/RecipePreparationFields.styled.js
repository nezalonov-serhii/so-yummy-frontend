import styled from "styled-components";

export const Container = styled.div`
   margin-top: 44px;
   position: relative;
   @media screen and (min-width: 768px) and (max-width: 1279px) {
      margin-top: 100px;
      padding-right: 199px;
   }
   @media screen and (min-width: 1280px) {
      margin-top: 100px;
      padding-right: 295px;
   }
`;

export const Textarea = styled.textarea`
   background-color: var(--background-input-secondary);
   border: 1px solid var(--border-input);
   color: var(--text-primary);
   border-radius: 7px;
   padding: 9px 16px;
   margin-top: 24px;
   min-height: 154px;
   width: 100%;
   resize: none;
   ${({ hasError }) =>
      hasError &&
      `
    border: solid 1px red;
    
  `}
   &:active,
  &:focus,
  &:hover {
      outline: solid 2px rgb(241, 196, 15);
   }

   @media screen and (min-width: 768px) {
      margin-top: 32px;
      padding: 16px 23px;
      min-height: 224px;
   }
`;

export const ErrorMessagePreparation = styled.span`
   position: absolute;
   top: 30px;
   left: 0;
   color: red;
   font-size: 12px;
`;
