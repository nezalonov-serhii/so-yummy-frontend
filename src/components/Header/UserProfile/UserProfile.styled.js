import styled from "styled-components";
import { RxAvatar, RxPencil1 } from "react-icons/rx";
import { BiUser } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";

export const Box = styled.div`
   position: fixed;
   width: 100%;
   height: 327px;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   z-index: 9;
   padding: 24px;
   background-color: var(--background-recipe-card);
   border-radius: 10px;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;

   @media (min-width: 768px) {
      width: 480px;
      height: 402px;
      padding: 50px;
   }
   @media (min-width: 1280px) {
      width: 500px;
      height: 425px;
      padding: 50px;
   }
`;
export const Icon = styled(BiUser)`
   width: 16px;
   height: 18px;
   position: absolute;
   top: 50%;
   left: 14px;
   transform: translateY(-50%);
   z-index: 999;
   @media (min-width: 768px) {
      left: 19px;
   }
`;

export const Avatar = styled.img`
   width: 88px;
   height: 88px;
   border-radius: 50px;
   margin: 0 auto;
   margin-bottom: 40px;
   @media (min-width: 768px) {
      width: 103px;
      height: 103px;
      margin-bottom: 50px;
   }
   @media (min-width: 1280px) {
      width: 103px;
      height: 103px;
      margin-bottom: 50px;
   }
`;

export const Form = styled.form`
   margin-left: auto;
   margin-right: auto;
`;

export const InputWrapper = styled.div`
   position: relative;
   color: var(--text-primary);
`;

export const Input = styled.input`
   width: 100%;
   background-color: var(--background-recipe-card);
   color: inherit;

   border: 1px solid #d9d9d9;
   border-radius: 5px;
   padding: 16px 15px;
   padding-left: 40px;
   font-family: Poppins;
`;

export const Button = styled.button`
   width: 100%;
   height: 49px;
   color: white;
   margin-top: 30px;
   background-color: #8baa36;
   border: none;
   border-radius: 6px;
   font-size: 14px;
   @media (min-width: 768px) {
      font-size: 16px;
   }
   @media (min-width: 1280px) {
      font-size: 16px;
      margin-top: 40px;
   }
`;

export const Pencil = styled(RxPencil1)`
   position: absolute;
   top: 50%;
   right: 50%;
   transform: translateY(-50%);
   @media (min-width: 768px) {
      right: 15px;
   }
   @media (min-width: 1280px) {
      right: 15px;
   }
`;

export const IconClose = styled(VscClose)`
   width: 20px;
   height: 20px;
   position: absolute;
   top: 24px;
   right: 24px;
   color: var(--text-primary);
   @media (min-width: 768px) {
      width: 24px;
      height: 24px;
   }
   @media (min-width: 1280px) {
      width: 24px;
      height: 24px;
   }
`;
