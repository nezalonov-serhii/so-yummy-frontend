import styled from "styled-components";
import {FaFacebook } from "react-icons/fa";
import { AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

export const FacebokIcon = styled(FaFacebook)`
  width: 20px;
  height: 20px;
  color: #8BAA36;
`;
export const YouTubeIcon = styled(AiFillYoutube)`
  width: 20px;
  height: 20px;
  color: #8BAA36;
`;
export const TwitterIcon = styled(AiOutlineTwitter)`
  width: 20px;
  height: 20px;
  color: #8BAA36;
`;
export const InstaIcon = styled(AiOutlineInstagram)`
  width: 20px;
  height: 20px;
  color: #8BAA36;
`;
 
export const FollowList = styled.ul`
 display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 44px;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 18px;
  }
  

`

