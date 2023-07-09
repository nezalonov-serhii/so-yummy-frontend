import styled from "styled-components";
import { Link } from "react-router-dom";


export const HeaderContainer = styled.header`
  width: 100%;
  margin-top: 18px;
`;
// export const Container = styled.header`
//   width: 100%;
//   `;

export const Nav = styled.nav`
display: flex;
`;

export const MobileBtn = styled.div`
  display: none;
  @media (max-width: 1439px) {
    display: flex;
    width: 32px;
    height: 32px;
    position: absolute;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
  }
`;


export const Line = styled.ul`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  gap: 30px;
  padding-left:200px;
  @media (max-width: 1439px) {
    display: ${props => (props.nav ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    position: fixed;
    font-size: 22px;
    line-height: 20px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    transition: left 1s;
    background-color: #fff;
    padding: 20px;
  }
`;

export const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
`;

export const Box = styled.div`
  display: flex;
  height: 46px;
  justify-content: space-between;
  align-items: center;
`;




export const Logo = styled.div`
  display: flex;
  // position: absolute;
  // left: 16px;
  // top: 18px;
  justify-content: center;
  align-items: center;
  border-radius:30%;
  width: 40px;
    height: 40px;
    background-color: 
    #8BAA36;
`;