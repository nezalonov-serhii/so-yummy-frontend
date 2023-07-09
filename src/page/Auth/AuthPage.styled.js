import styled from "styled-components";
import { Form, Field } from "formik";
import { Link } from "react-router-dom";

import bgAuthMob from "../../images/Auth/bg-mob.svg";
import bgAuthTab from "../../images/Auth/bg-tab.svg";
import bgAuthDesk from "../../images/Auth/bg-desk.svg";
import bgAuthPanaMob from "../../images/Auth/pana-bg-mob.png";
import bgAuthPanaTab from "../../images/Auth/pana-bg-tab.png";
import bgAuthPanaDesk from "../../images/Auth/pana-bg-desk.png";

export const AuthSection = styled.section`
   display: flex;
   align-items: center;
   flex-direction: column;
   padding: 87px 0 60px 0;
   min-height: 100vh;

   background-image: url(${bgAuthMob});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;

   @media screen and (min-width: 768px) and (max-width: 1280px) {
      padding: 96px 0 60px 0;
      background-image: url(${bgAuthTab});
   }
   @media screen and (min-width: 1281px) {
      background-image: url(${bgAuthDesk});
   }
`;

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   &::before {
      content: "";
      display: block;
      margin-bottom: -23px;
      width: 285px;
      height: 250px;

      background-image: url(${bgAuthPanaMob});
      background-repeat: no-repeat;
      background-size: cover;

      @media screen and (min-width: 768px) and (max-width: 1280px) {
         background-image: url(${bgAuthPanaTab});
         width: 285px;
         margin-bottom: -12px;
         height: 250px;
      }
      @media screen and (min-width: 1281px) {
         margin-bottom: 0;
         width: 532px;
         height: 468px;
         background-image: url(${bgAuthPanaDesk});
      }
   }

   @media screen and (min-width: 1281px) {
      flex-direction: row;
   }
`;

export const AuthForm = styled(Form)`
   margin: 0 auto;
   margin-bottom: 18px;

   padding: 32px 28px 40px;
   border-radius: 30px;
   background-color: var(--background-modal);

   @media screen and (max-width: 479px) {
      max-width: 335px;
   }

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

export const WrapFields = styled.div`
   width: 100%;
   display: flex;
   gap: 30px;
   flex-direction: column;
   margin-bottom: 28px;
   @media screen and (min-width: 768px) {
      margin-bottom: 50px;
      gap: 30px;
   }
`;

export const WrapField = styled.div`
   position: relative;
   top: 0;
   left: 0;
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

   ${(props) => {
      if (props.invalid === "invalid") return "border-color: #E74A3B;";
      else return "";
   }}

   ${(props) => {
      if (props.valid === "valid") return "border-color: #3CBC81;";
      else return "";
   }}

   @media screen and (min-width: 768px) {
      padding: 12px 16px;
   }
`;

export const ErrorMessageStyled = styled.p`
   position: absolute;
   bottom: -3px;
   transform: translateY(100%);
   color: #e74a3b;
   font-family: Poppins;
   font-size: 14px;
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
   transition: var(--cubic-bezier) 250ms;
   cursor: pointer;

   &:hover {
      color: #22252a;
   }
`;

export const AuthLink = styled(Link)`
   display: block;
   width: max-content;
   margin: 0 auto;
   color: #fafafa;
   text-align: center;
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
