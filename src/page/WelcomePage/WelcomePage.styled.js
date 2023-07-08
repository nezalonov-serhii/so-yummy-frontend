import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerWelcome = styled.div`
   height: 100vh;
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   background-color: gray;

   @media screen and (min-width: 768px) {
      padding: 0 135px;
   }
   @media screen and (min-width: 1280px) {
   }
`;

export const Title = styled.h2`
   font-size: 24px;
   font-weight: 600;
   line-height: 1;
   letter-spacing: -0.48px;
   color: var(--text-light);
   @media screen and (min-width: 768px) {
      font-size: 28px;
      letter-spacing: -0.56px;
   }
`;

export const Text = styled.p`
   width: 305px;

   text-align: center;
   font-size: 18px;
   line-height: 1.3;
   letter-spacing: -0.36px;
   color: var(--text-light);

   @media screen and (min-width: 768px) {
      font-size: 18px;
      width: 505px;
   }
   @media screen and (min-width: 1280px) {
      font-size: 18px;
      width: 540px;
   }
`;

export const NavBox = styled.nav`
   display: flex;
   gap: 12px;
`;

export const StyledLink = styled(Link)`
   border-radius: 20px 60px;
   border: 2px solid #fafafa;
   padding: 12px 24px;
   font-size: 14px;
   padding: 12px 24px;
   background-color: transparent;
   text-decoration: none;
   color: #fafafa;

   @media screen and (min-width: 768px) {
      padding: 22px 44px;
      font-size: 16px;
   }
`;
