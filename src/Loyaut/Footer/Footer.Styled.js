import styled from "styled-components";


export const FooterWrapper = styled.div`
height: 435px;
padding-top: 28px;
background-color: var( --background-footer);
margin: 0;
width:100%;

@media (min-width: 768px) {
  padding-top: 50px;
    height: 423px;
}
 @media (min-width: 1440px){
  padding-top: 64px;
  padding-right: 100px;
  padding-left: 100px;
    height: 414px;
}
`;

export const MainWrapper = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  //  @media (min-width: 768px) {
  //   padding-top: 50px;
  //   // display: flex;
  //   justify-content: space-between;
  // }

  // @media (min-width: 1440px) {
  //   padding-top: 0;
  //   display: flex;
  //   justify-content: none;
  // }
  `;

 export const Tablet = styled.div`
  @media (min-width: 768px) {
   
    display: flex;
    justify-content: center;
    margin-bottom: 72px;
    // justify-content: space-between;
  }
  @media (min-width: 1440px) {
    padding-top: 0;
   
       margin-bottom: 0px;
  }
`;
