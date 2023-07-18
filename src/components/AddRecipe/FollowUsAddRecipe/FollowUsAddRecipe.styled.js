import styled from "styled-components";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

export const Container = styled.div`
   @media screen and (max-width: 1279px) {
      display: none;
   }

   @media screen and (min-width: 1280px) {
      width: 163px;
   }
`;

export const FollowList = styled.ul`
   @media (min-width: 1280px) {
      display: flex;
      gap: 20px;
      height: 26px;
      margin-top: 40px;
   }
`;

export const FacebookIcon = styled(RiFacebookCircleFill)`
   width: 26px;
   height: 100%;

   color: var(--social-icon);
   transition: var(--cubic-bezier) 250ms;
   cursor: pointer;
   &:hover {
      height: 110%;
   }
`;
export const YouTubeIcon = styled(AiFillYoutube)`
   width: 28px;
   height: 100%;

   color: var(--social-icon);
   cursor: pointer;
   transition: var(--cubic-bezier) 250ms;
   &:hover {
      height: 110%;
   }
`;
export const TwitterIcon = styled(AiOutlineTwitter)`
   width: 25px;
   height: 100%;

   color: var(--social-icon);
   transition: var(--cubic-bezier) 250ms;
   cursor: pointer;
   &:hover {
      height: 110%;
   }
`;
export const InstaIcon = styled(AiOutlineInstagram)`
   width: 24px;
   height: 100%;

   color: var(--social-icon);
   transition: var(--cubic-bezier) 250ms;
   cursor: pointer;
   &:hover {
      height: 110%;
   }
`;
