import styled from "styled-components";
import { Link } from "react-router-dom";
import { PiForkKnifeBold } from "react-icons/pi";

export const LogoIcon = styled(PiForkKnifeBold)`
   width: 30px;
   height: 30px;
   color: #8baa36;
   transition: all 0.5s var(--cubic-bezier);
`;

export const LogoBox = styled(Link)`
   display: flex;
   left: 100px;
   top: 18px;
   justify-content: center;
   align-items: center;
   border-radius: 30%;
   width: 40px;
   height: 40px;
   background-color: #8baa36;
   z-index: 999;
`;
