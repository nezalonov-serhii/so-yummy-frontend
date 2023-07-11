import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 440px;
  padding-top: 28px;
  padding-bottom: 20px;
  background-color: var(--background-footer);
  margin: 0;
  width: 100%;

  @media (min-width: 767px) {
    padding-top: 50px;
    padding-bottom: 24px;
  };
  
  @media (min-width: 1280px) {
    padding-top: 64px;
    padding-bottom: 50px;
    padding-right: 100px;
    padding-left: 100px;
    
  }
`;

export const MainWrapper = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Tablet = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 72px;
    
  }
  @media (min-width: 1280px) {
    padding-top: 0;
    margin-bottom: 0px;
  }
`;
