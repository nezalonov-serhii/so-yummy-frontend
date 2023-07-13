import styled from "styled-components";
import { RiFacebookCircleFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

export const FacebokIcon = styled(RiFacebookCircleFill)`
  width: 20px;
  height: 20px;
  color: var(--button-dark-background-primary);
  transition: var(--cubic-bezier) 250ms;
  cursor: pointer;
  &:hover {
    color: var(--text-light);
  }
`;
export const YouTubeIcon = styled(AiFillYoutube)`
  width: 20px;
  height: 20px;
  color: var(--button-dark-background-primary);
  cursor: pointer;
  transition: var(--cubic-bezier) 250ms;
  &:hover {
    color: var(--text-light);
  }
`;
export const TwitterIcon = styled(AiOutlineTwitter)`
  width: 20px;
  height: 20px;
  color: var(--button-dark-background-primary);
  transition: var(--cubic-bezier) 250ms;
  cursor: pointer;
  &:hover {
    color: var(--text-light);
  }
`;
export const InstaIcon = styled(AiOutlineInstagram)`
  width: 20px;
  height: 20px;
  color: var(--button-dark-background-primary);
  transition: var(--cubic-bezier) 250ms;
  cursor: pointer;
  &:hover {
    color: var(--text-light);
  }
`;

export const FollowList = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 44px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;
