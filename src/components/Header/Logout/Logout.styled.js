import styled from "styled-components";
import { VscClose } from "react-icons/vsc";

export const Box = styled.div`
   position: fixed;
   width: 100%;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   z-index: 9;
   padding: 44px;
   background-color: var(--background-recipe-card);
   border-radius: 10px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   @media (min-width: 768px) {
      width: 480px;
      height: 215px;
   }
   @media (min-width: 1280px) {
      width: 500px;
      height: 215px;
   }
`;
export const Text = styled.p`
   display: flex;
   justify-content: center;
   font-weight: 400;
   font-size: 14px;
   line-height: 18px;
   color: var(--text-primary);
   @media (min-width: 768px) {
      font-size: 18px;
   }
   @media (min-width: 1280px) {
      font-size: 18px;
      line-height: 24px;
   }
`;
export const BoxLogout = styled.div`
   display: flex;
   margin-top: 20px;
   @media (min-width: 768px) {
      margin-top: 40px;
   }
   @media (min-width: 1280px) {
      margin-top: 40px;
   }
`;

export const ButtonLogOut = styled.button`
   width: 137px;
   height: 49px;
   color: white;
   margin-right: 20px;
   background-color: #8baa36;
   border: none;
   border-radius: 6px;
   @media (min-width: 768px) {
      width: 192px;
      height: 59px;
   }
   @media (min-width: 1280px) {
      width: 192px;
      height: 59px;
   }
`;
export const ButtonCancel = styled.button`
   color: var(--text-dark);
   background-color: #d9d9d9;
   border: none;
   border-radius: 6px;
   width: 137px;
   height: 49px;
   @media (min-width: 768px) {
      width: 192px;
      height: 59px;
   }
   @media (min-width: 1280px) {
      width: 192px;
      height: 59px;
   }
`;
export const IconClose = styled(VscClose)`
   cursor: pointer;
   width: 20px;
   height: 20px;
   position: absolute;
   top: 15px;
   right: 15px;
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
