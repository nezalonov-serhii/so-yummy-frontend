import styled from "styled-components";
import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from "react-router-dom";

export const SeeRecipe = styled.div`
width: 225px;
height: 92px;
border-radius:8px;
background: var(--background-primary);
position: absolute;
top: 435px;
right: 34px;
@media (min-width: 768px) {
   width: 260px;
   height: 100px;
   top: 372px;
   right: 32px;
  }
  @media (min-width: 1280px) {
   width: 298px;
   height: 114px;
   top: 472px;
   right: 122px;
  }
`
export const TextSeeRecipe = styled.p`
font-family: 'Poppins', sans-serif;
font-weight: 400;
color: var(--text-secondary);
font-style: normal;
font-size: 12px;
line-height: 1.5;
letter-spacing: -0.24px;
margin-left: auto;
margin-right: auto;
padding: 8px;
@media (min-width: 768px) {
   top: 45%;
   left: 63%;
   padding-top: 12px;
   padding-left:12px;
   padding-right: 12px;
   font-size: 14px;
   line-height: 1.28;
    }
  @media (min-width:1280px) {
    line-height: 1.42;
  }
`
export const IconSpanTextLink = styled(BsArrowRight)`
color: var(--text-primary);
width: 18px;
height: 18px;
margin-left: 4px;
margin-right: 8px;
`
export const TextLink = styled(NavLink)`
 font-family: 'Poppins', sans-serif;
 font-weight: 400;
 font-style: normal;
 font-size: 10px;
 line-height: 1.2;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 text-align: center;
 letter-spacing: 0.2px;
 color: var(--text-primary);
 padding-bottom: 11px;
 cursor: pointer;

  &:hover {
    color: green;

    ${IconSpanTextLink} {
      color: var(--button-background-primary);
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 15px;
  }
`;
export const SpanSeeRecipe = styled.span`
color: var(--button-background-primary);
`
