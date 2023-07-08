import styled from "styled-components";
import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from "react-router-dom";

import pathToDishMobileX1 from "../../images/MainPage/HeroMain-dish-mobile-1x.webp";
import pathToDishMobileX2 from "../../images/MainPage/HeroMain-dish-mobile-2x.webp";
import pathToDishTabletX1 from "../../images/MainPage/HeroMain-dish-tablet-1x.webp"
import pathToDishTabletX2 from "../../images/MainPage/HeroMain-dish-tablet-2x.webp"
import pathToDishDesktopX1 from "../../images/MainPage/HeroMain-dish-desktop-1x.webp"
import pathToDishDesktopX2 from "../../images/MainPage/HeroMain-dish-desktop-2x.webp"
import leafsMobileX1 from "../../images/MainPage/HeroMain-leafs-mobile-1x.webp"
import leafsMobileX2 from "../../images/MainPage/HeroMain-leafs-mobile-2x.webp"
import leafsTabletX1 from "../../images/MainPage/HeroMain-leafs-tablet-1x.webp"
import leafsTabletX2 from "../../images/MainPage/HeroMain-leafs-tablet-2x.webp"
import leafsDesktopX1 from "../../images/MainPage/HeroMain-leafs-desktop-1x.webp"
import leafsDesktopX2 from "../../images/MainPage/HeroMain-dish-desktop-2x.webp"

export const Section = styled.section`
  width: 100%;
  height: 777px;
  background-image: url(${leafsMobileX1}), url(${pathToDishMobileX1});
  background-size: 55px auto, 375px auto;
  background-position: 0px 20px, 100% 58px;
  background-repeat: no-repeat;
  text-align: center;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image:url(${leafsMobileX2}), url(${pathToDishMobileX2});
  }
  @media (min-width: 768px) {
    background-image:url(${leafsTabletX1}),url(${pathToDishTabletX1});
    text-align:start;
    background-size: 55px auto, 580px auto;
    background-position: 0px 0px, top right;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image:  url(${leafsTabletX2}),url(${pathToDishTabletX2});
  }
  @media (min-width: 1440px) {
    background-image: url(${leafsDesktopX1}),url(${pathToDishDesktopX1});
    background-size: 100px auto, 907px auto;
    background-position: 0px 0px, top right;  
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${leafsDesktopX2}),url(${pathToDishDesktopX2});
    }
  }
}
`

export const Title = styled.h1`
font-family: 'Poppins', sans-serif;
color: var(--text-secondary);
font-weight: 600;
padding-top: 68px;
font-style: normal;
font-size: 60px;
line-height: 60px;
text-align: center;
letter-spacing: -0.005em;
margin-bottom: 14px;
  @media (min-width: 768px) {
    text-align:start;
    font-size: 72px;
    line-height: 72px;
    padding-top: 205px;
    }
  @media (min-width: 1440px) {
    padding-top: 162px;
    font-size: 100px;
    line-height: 1;
}
`

export const Span = styled.span`
color: var(--button-background-primary);

`

export const TextHero = styled.p`
font-family: 'Poppins', sans-serif;
color: var(--text-secondary);
font-weight: 500;
font-size: 14px;
line-height: 1.28;
margin-bottom: 364px;
font-style: normal;
text-align: center;
letter-spacing: -0.02em;
  @media (min-width: 768px) {
    text-align:start;
    margin-bottom: 50px;
    }
  @media (min-width: 1440px){
    font-size: 18px;
    line-height: 1.34;
  }
`

export const Form = styled.form`
position: relative;
`

export const Input = styled.input`
width: 295px;
height: 52px;
background: var(--background-primary);
border: 1px solid #F0F0F0;
border-radius: 15px 50px;
padding-top: 17px;
padding-right: 113px;
padding-bottom: 17px;
padding-left: 32px;
margin-bottom: 147px;
  @media (min-width: 768px) {
    width: 362px;
    height: 59px;
    }
    @media (min-width: 1440px) {
    width: 510px;
    height: 70px;
    }
`

export const Button = styled.button`
background: var(--button-background-secondary);
font-family: 'Poppins', sans-serif;
color: var(--text-secondary);
font-weight: 600;
position: absolute;
top: 0;
right: 40px;
bottom: 0;
width:113px; 
border: none;
cursor: pointer;
font-weight: bold;
height:51px;
border-radius: 15px 50px;
font-style: normal;
line-height: 1.28;
color: var(--background-primary);
transition: background cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover, 
  &:focus {
    background: var(--button-background-primary);
  }

  @media (min-width: 768px) {
    width: 161px;
    height: 59px;
    top: 0;
    left: 30%;
    bottom: 0;
    }
    @media (min-width: 1440px) {
    width: 161px;
    height: 70px;
    top: 0;
    left: 29%;
    bottom: 0;
    }
`
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
  @media (min-width: 1440px) {
   width: 260px;
   height: 100px;
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
padding-top: 8px;
margin-bottom: 7px;
@media (min-width: 768px) {
   top: 45%;
   left: 63%;
   padding-top: 12px;
   padding-left:12px;
   padding-right: 12px;
    }
  @media (min-width:1440px) {
   
  }
`
export const IconSpanTextLink = styled(BsArrowRight)`
color: var(--text-primary);
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
export const SpanTextLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  margin-left: 7px;
  padding-right: 13px;
`;
