import styled from "styled-components";
import { Link } from "react-router-dom";
import { PiForkKnifeBold } from "react-icons/pi";

import {
   startDesk,
   startTab,
   startMob,
   startDeskX2,
   startTabX2,
   startMobX2,
} from "../../images/startPage";

export const ContainerWelcome = styled.div`
   height: 100vh;
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   background-image: url(${startMob});
   background-repeat: no-repeat;
   background-size: cover;

   @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${startMobX2});
   }

   @media screen and (min-width: 768px) {
      padding: 0 135px;
      background-image: url(${startTab});
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
         background-image: url(${startTabX2});
      }
   }

   @media screen and (min-width: 1280px) {
      background-image: url(${startDesk});
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
         background-image: url(${startDeskX2});
      }
   }
`;

export const LogoIcon = styled(PiForkKnifeBold)`
   width: 40px;
   height: 40px;
   color: var(--text-light);
`;

export const IconWrapper = styled.div`
   padding: 5px;
   background: var(--button-background-primary);
   border-radius: 12px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 28px;
`;

export const Title = styled.h2`
   margin-bottom: 14px;

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
   margin-bottom: 44px;

   text-align: center;
   font-size: 14px;
   line-height: 1.3;
   letter-spacing: -0.36px;
   color: var(--text-light);

   @media screen and (min-width: 768px) {
      width: 505px;
      margin-bottom: 44px;

      font-size: 18px;
   }
   @media screen and (min-width: 1280px) {
      width: 540px;
      font-size: 18px;
   }
`;

export const NavBox = styled.nav`
   display: flex;
   gap: 12px;
`;

export const LinkRegister = styled(Link)`
   border-radius: 20px 60px;
   border: 2px solid var(--button-background-primary);
   padding: 12px 24px;
   font-size: 14px;
   padding: 12px 24px;
   background-color: var(--button-background-primary);
   text-decoration: none;
   color: #fafafa;

   transition: all 250ms var(--cubic-bezier);

   &:hover {
      background-color: var(--button-background-secondary);
      border: 2px solid var(--button-background-secondary);
      color: var(--text-light);
   }

   @media screen and (min-width: 768px) {
      padding: 22px 44px;
      font-size: 16px;
   }
`;

export const LinkSignin = styled(Link)`
   border-radius: 20px 60px;
   border: 2px solid var(--text-light);
   padding: 12px 24px;
   font-size: 14px;
   padding: 12px 24px;
   background-color: transparent;
   text-decoration: none;
   color: var(--text-light);

   transition: all 250ms var(--cubic-bezier);
   &:hover {
      background-color: var(--text-light);
      border: 2px solid var(--button-background-primary);
      color: var(--button-background-primary);
   }

   @media screen and (min-width: 768px) {
      padding: 22px 44px;
      font-size: 16px;
   }
`;
