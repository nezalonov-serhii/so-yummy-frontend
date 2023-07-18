import styled from "styled-components";
import { ReactComponent as Clock } from "../../images/RecipePage/svg/clock.svg";

import bgMobile from "../../images/RecipePage/recipePageMob.webp";
import bgMobileRetina from "../../images/RecipePage/recipePageMob@2x.webp";
import bgTablet from "../../images/RecipePage/recipePageTab.webp";
import bgTabletRetina from "../../images/RecipePage/recipePageTab@2x.webp";
import bgDesktop from "../../images/RecipePage/recipePageDesk.webp";
import bgDesktopRetina from "../../images/RecipePage/recipePageDesk@2x.webp";

export const Wrapper = styled.div`
   display: flex;
   padding-top: 144px;
   padding-bottom: 90px;
   margin-bottom: 32px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   background-image: url("${bgMobile}");
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   height: auto;

   @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url("${bgMobileRetina}");
   }

   @media (min-width: 768px) {
      padding-top: 136px;
      padding-bottom: 32px;
      margin-bottom: 50px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: auto;
      background-image: url("${bgTablet}");

      @media screen and (min-device-pixel-ratio: 2),
         screen and (min-resolution: 192dpi),
         screen and (min-resolution: 2dppx) {
         background-image: url("${bgTabletRetina}");
      }
   }

   @media (min-width: 1280px) {
      padding-top: 164px;
      padding-bottom: 32px;
      background-image: url("${bgDesktop}");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: auto;

      @media screen and (min-device-pixel-ratio: 2),
         screen and (min-resolution: 192dpi),
         screen and (min-resolution: 2dppx) {
         background-image: url("${bgDesktopRetina}");
      }
   }
`;

export const HeroTitle = styled.h1`
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 1;
   letter-spacing: -0.02em;
   text-align: center;
   color: var(--button-background-primary);
   @media (min-width: 768px) {
      font-size: 44px;
   }
`;

export const Descr = styled.span`
   margin-top: 18px;
   font-size: 12px;
   max-width: 299px;
   line-height: 1.33;
   letter-spacing: -0.02em;
   color: var(--text-dark);
   @media (min-width: 768px) {
      margin-top: 24px;
      max-width: 506px;
      font-size: 18px;
   }

   @media (min-width: 1280px) {
      max-width: 656px;
      margin-top: 30px;
   }
`;

export const FavoriteBtn = styled.button`
   padding: 10px 18px;
   margin-top: 24px;
   width: 150px;
   height: 35px;

   font-size: 10px;
   line-height: 1.5;
   border: 1px solid var(--button-background-primary);
   border-radius: 24px 44px;
   background-color: transparent;
   color: var(--text-dark);
   transition: all 250ms linear;
   @media (min-width: 768px) {
      width: 278px;
      height: 59px;
      padding: 18px 44px;
      font-size: 16px;
   }

   @media (min-width: 1280px) {
      margin-top: 30px;
      width: 270px;
      height: 59px;
      padding: 18px 44px;
      font-size: 16px;
   }

   &:hover {
      background-color: var(--button-background-primary);
      border: 1px solid var(--button-background-primary);
      color: var(--text-light);
   }

   &:disabled {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;
      white-space: nowrap;
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
   }
`;

export const СlockWrap = styled.div`
   display: flex;
   align-items: center;
   gap: 4px;

   margin-top: 42px;

   @media (min-width: 768px) {
      gap: 8px;
      margin-top: 60px;
   }

   @media (min-width: 1280px) {
      margin-top: 48px;
   }
`;

export const ClockIcon = styled(Clock)`
   width: 14px;
   height: 14px;
   fill: transparent;

   @media (min-width: 768px) {
      width: 20px;
      height: 20px;
   }
`;

export const Time = styled.span`
   font-weight: 500;
   font-size: 10px;
   line-height: 1.4;
   letter-spacing: -0.24px;
   color: var(--text-dark);

   @media (min-width: 768px) {
      font-size: 14px;
   }
`;
