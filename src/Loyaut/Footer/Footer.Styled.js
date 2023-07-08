import styled from "styled-components";

export const FooterWrapper = styled.div`
height: 450px;
background-color: var( --background-footer);
margin: 0;
width:100%;

@‌media (min-width: 768px) {
    height: 423px;
}
@‌media (min-width: 768px) and (max-width: 1023px){
    height: 414px;
}
`

export const MainWrapper = styled.div`
  @media (min-width: 1440px) {
    padding-top: 64px;
    display: flex;
    justify-content: space-between;
  }
`