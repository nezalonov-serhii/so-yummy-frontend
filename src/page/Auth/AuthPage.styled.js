import styled from "styled-components";
import { Form, Field } from "formik";
import { Link } from "react-router-dom";

export const AuthSection = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;

   height: 100vh;
   background-color: gray;
`;

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const AuthForm = styled(Form)`
   margin: 0 auto;
   margin-bottom: 18px;
   max-width: 335px;
   border-radius: 30px;
   background-color: var(--background-modal);
   @media screen and (min-width: 768px) and (max-width: 1280px) {
      width: 500px;
      padding: 44px 50px;
   }
   @media screen and (min-width: 1281px) {
      width: 500px;
      padding: 44px 50px;
   }
`;

export const AuthTitle = styled.h2`
   margin-bottom: 40px;

   font-size: 24px;
   font-weight: 600;
   line-height: 1.2;
   letter-spacing: -0.48px;
   color: var(--text-light);
   @media screen and (min-width: 768px) {
      font-size: 28px;
      line-height: 1;
      margin-bottom: 32px;
   }
`;

export const WrapField = styled.div`
   width: 100%;
   display: flex;
   gap: 12px;
   flex-direction: column;
   margin-bottom: 28px;
   @media screen and (min-width: 768px) {
      margin-bottom: 50px;
      gap: 24px;
   }
`;

export const AuthField = styled(Field)`
   width: 100%;
   padding: 12px 16px;
   border-radius: 6px;

   border: 1px solid var(--text-light);

   background-color: transparent;

   color: var(--text-light);
   font-size: 18px;
   line-height: 1.5px;
   letter-spacing: -0.02em;

   &::placeholder {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: -0.02em;
      color: var(--text-light);
      @media screen and (min-width: 768px) {
         font-size: 18px;
      }
   }
   @media screen and (min-width: 768px) {
      padding: 12px 16px;
   }
`;

export const Button = styled.button`
   width: 100%;
   height: 45px;
   border: none;
   border-radius: 10px;
   background-color: #8baa36;
   box-sizing: border-box;

   font-size: 16px;
   text-align: center;
   color: #fafafa;
   transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
   cursor: pointer;
   @media screen and (min-width: 768px) {
      height: 56px;
   }
`;

export const AuthLink = styled(Link)`
   color: #fafafa;
   font-family: Poppins;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   text-decoration-line: underline;
   @media screen and (min-width: 768px) {
      font-size: 16px;
   }
`;
