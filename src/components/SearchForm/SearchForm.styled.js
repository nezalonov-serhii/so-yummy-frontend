import styled from "styled-components";

export const Form = styled.div`
position: relative;
display: inline-flex;
align-items: center;
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
position: absolute;
background: var(--button-background-secondary);
font-family: 'Poppins', sans-serif;
color: var(--text-secondary);
font-weight: 600;
top: 0;
right: 0;
bottom: 0;
width:113px; 
border: none;
cursor: pointer;
font-weight: bold;
height:52px;
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
    bottom: 0;
    }
    @media (min-width: 1440px) {
    width: 161px;
    height: 70px;
    top: 0;
    bottom: 0;
    }
`