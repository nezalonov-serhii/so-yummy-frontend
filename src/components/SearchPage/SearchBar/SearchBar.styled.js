import styled from "styled-components";

export const CustomButtonStyles = styled.button`
background-color: var(--button-background-primary);
color: var(--text-light);
transition: background-color 0.3s ease;
position: absolute;
font-family: 'Poppins', sans-serif;
font-weight: 400;
font-size: 14px;
top: 0;
right: 0;
bottom: 0;
width:113px; 
border: none;
cursor: pointer;
height:52px;
border-radius: 24px 44px;;
font-style: normal;
line-height: 1.28;
text-align: center;
  :hover {
    background-color: var(--button-background-secondary);
  }
  :focus {
    background-color: var(--button-background-secondary);
  }
  @media (min-width: 768px) {
    width: 161px;
    height: 59px;
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    height: 70px;
  }
`;

export const CustomSearchFormContainer = styled.div`
display: flex;
justify-content: center;
`;
