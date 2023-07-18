import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
   margin-top: 72px;
   margin-bottom: 100px;
   @media screen and (min-width: 768px) and (max-width: 1279px) {
      margin-top: 100px;
      margin-bottom: 200px;
   }
   @media screen and (min-width: 768px) {
      margin-top: 100px;
      width: 100%;
   }
`;

export const List = styled.ul`
   margin-top: 32px;
   @media screen and (min-width: 768px) and (max-width: 1279px) {
      display: flex;
      gap: 32px;
      margin-top: 40px;
      padding: 0;
   }
   @media screen and (min-width: 1280px) {
   }
`;

export const Paragraph = styled.p`
   margin-top: 32px;
   color: var(--text-primary);
`;

export const Item = styled.li`
   margin-top: 24px;
   padding-right: 14px;

   @media screen and (min-width: 768px) and (max-width: 1279px) {
      padding-right: 0;
      margin-top: 0;
   }
   @media screen and (min-width: 1280px) {
   }
   &::after {
      content: "";
      display: block;
      border-bottom: solid 1px #707070;
      opacity: 0.17;
      margin-top: 13px;
   }
`;

export const LinkId = styled(Link)`
   display: flex;
   gap: 12px;
`;

export const Image = styled.img`
   width: 104px;
   height: 85px;
   border-radius: 7px;
   @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: 102px;
   }
   @media screen and (min-width: 1280px) {
   }
`;

export const TextWrapper = styled.div`
   flex: 1;
`;
export const SecondaryTitle = styled.h4`
   font-size: 16px;

   font-weight: 500;
   line-height: 20px;
   letter-spacing: -0.24px;
   color: var(--text-primary);
`;

export const Text = styled.p`
   max-height: 56px;
   font-size: 12px;
   font-weight: 400;
   line-height: 16px;
   letter-spacing: -0.24px;
   color: #7e7e7e;
`;
