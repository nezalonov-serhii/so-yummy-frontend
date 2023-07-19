import styled from "styled-components";
import { Form, Field } from "formik";
import { Link } from "react-router-dom";
import { FiUser, FiLock, FiMail } from "react-icons/fi";
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";

import {
   bgAuthMob,
   bgAuthTab,
   bgAuthDesk,
   bgAuthPanaMob,
   bgAuthPanaMob2x,
   bgAuthPanaTab,
   bgAuthPanaTab2x,
   bgAuthPanaDesk,
   bgAuthPanaDesk2x,
} from "../../images/Auth";

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

   @media screen and (min-width: 768px) and (max-width: 1279px) {
      padding: 96px 0 60px 0;
      background-image: url(${bgAuthTab});
   }
   @media screen and (min-width: 1280px) {
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

      @media screen and (min-width: 768px) and (max-width: 1279px) {
         background-image: url(${bgAuthPanaTab});
         width: 285px;
         margin-bottom: -12px;
         height: 250px;
      }

      @media screen and (min-width: 1280px) {
         margin-bottom: 0;
         width: 532px;
         height: 468px;
         background-image: url(${bgAuthPanaDesk});
      }
   }

   @media screen and (min-width: 1280px) {
      flex-direction: row;
   }

   @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      &::before {
         background-image: url(${bgAuthPanaMob2x});
      }

      @media screen and (min-width: 768px) and (max-width: 1279px) {
         &::before {
            background-image: url(${bgAuthPanaTab2x});
         }
      }

      @media screen and (min-width: 1280px) {
         &::before {
            background-image: url(${bgAuthPanaDesk2x});
         }
      }
   }
`;

export const AuthForm = styled(Form)`
   margin: 0 auto;
   margin-bottom: 18px;

   padding: 32px 28px 40px;
   border-radius: 30px;
   background-color: var(--background-modal);

   width: 288px;

   @media screen and (min-width: 367px) {
      width: 335px;
   }

   @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: 500px;
      padding: 44px 50px;
   }
   @media screen and (min-width: 1280px) {
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
   margin-bottom: 45px;
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

export const ValidCheckIcon = styled(BsFillCheckCircleFill)`
   position: absolute;
   top: 50%;
   right: 14px;
   transform: translateY(-50%);
   width: 18px;
   color: #3cbc81;
`;

export const InvalidCheckIcon = styled(BsXCircleFill)`
   position: absolute;
   top: 50%;
   right: 14px;
   transform: translateY(-50%);
   width: 18px;
   color: #e74a3b;
`;

export const NameIcon = styled(FiUser)`
   position: absolute;
   top: 50%;
   left: 14px;
   transform: translateY(-50%);
   width: 18px;

   color: var(--text-light);

   ${(props) => {
      if (props.invalid === "invalid") return "color: #E74A3B;";
      else return "";
   }}

   ${(props) => {
      if (props.valid === "valid") return "color: #3CBC81;";
      else return "";
   }}
`;

export const LockIcon = styled(FiLock)`
   position: absolute;
   top: 50%;
   left: 14px;
   transform: translateY(-50%);
   width: 18px;

   color: var(--text-light);

   ${(props) => {
      if (props.invalid === "invalid") return "color: #E74A3B;";
      else return "";
   }}

   ${(props) => {
      if (props.valid === "valid") return "color: #3CBC81;";
      else return "";
   }}
`;

export const MailIcon = styled(FiMail)`
   position: absolute;
   top: 50%;
   left: 14px;
   transform: translateY(-50%);
   width: 18px;

   color: var(--text-light);

   ${(props) => {
      if (props.invalid === "invalid") return "color: #E74A3B;";
      else return "";
   }}

   ${(props) => {
      if (props.valid === "valid") return "color: #3CBC81;";
      else return "";
   }}
`;

export const AuthField = styled(Field)`
   width: 100%;
   padding: 12px 16px 12px 40px;
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
   cursor: pointer;

   transition: color 250ms var(--cubic-bezier);
   &:hover {
      color: #22252a;
   }

   &:disabled {
      opacity: 0.4;
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

   transition: color 250ms var(--cubic-bezier);
   &:hover {
      color: var(--accent-color);
   }

   @media screen and (min-width: 768px) {
      font-size: 16px;
   }
`;
