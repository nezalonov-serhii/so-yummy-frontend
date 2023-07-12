import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 440px;
  padding-top: 28px;
  background-color: var(--background-footer);

  @media (min-width: 768px) {
    padding-top: 50px;
  }

  @media (min-width: 1280px) {
    padding-top: 64px;
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
