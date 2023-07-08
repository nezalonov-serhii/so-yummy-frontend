import styled from "styled-components";
import { PiForkKnifeBold } from "react-icons/pi";

export const LogoIcon = styled(PiForkKnifeBold)`
  width: 30px;
  height: 30px;
  color: #8BAA36;
`;


export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  background-color: #FFF;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
   @media (min-width: 1024px){
    width: 44px;
    height: 44px;
    border-radius: 12px;
  }
`;

export const Title = styled.h2`
  margin-left: 8px;
  font-family: Poppins;
  font-style: normal;
  font-weight:700px;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.27px;
  color: #FAFAFA;

  @media (min-width: 768px) {
    font-size: 28px;
  }
 
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 28px;
  margin-bottom: 32px;
 
  @‌media (max-width: 767px) {
    padding-top: 0;
    margin-bottom: 24px;
    justify-content: flex-start;
    align-items: center;
   
  }
 

`