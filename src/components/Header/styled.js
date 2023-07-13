
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { PiForkKnifeBold } from "react-icons/pi";
import modalMOb from "../../images/Modal/modalLeafMob.png";
import modalTab from "../../images/Modal/modalLeafTab.png";


export const HeaderContainer = styled.header`
  width: 100%;
  height:46px;
  margin-top: 18px;
  margin-bottom: 10px;
`;
export const LogoIcon = styled(PiForkKnifeBold)`
  width: 30px;
  height: 30px;
  color: #8baa36;
  transition: all 0.5s var(  --cubic-bezier);
  
`;
export const Nav = styled.nav`
  display: flex;
`;

export const MobileBtn = styled.div`
    position: fixed;
    right: 20px;
    top: 20px;
    display: flex;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    @media (min-width: 1268px) {
      display: none;
    }
`;

export const Line = styled.ul`
display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 18px;
    font-family: Poppins;
    gap: 30px;
@media (max-width: 480px) {
    padding-left: 20px;
    background-image: url(${modalMOb});
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #fff;
    padding-left: 0;
}
  @media (max-width: 1280px) {
    padding-left: 20px;
    background-image: url(${modalTab});
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #fff;
    width: 100vw;
    padding-left: 0;
  }

  @media (max-width: 1280px) {
    display: ${props => (props.nav ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    position: fixed;
    font-size: 22px;
    line-height: 20px;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    transition: left 1s;
    background-color: #ebf3d4;
    padding: 20px;
  }
`;

export  const StyledLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  &.active {
    color: #8baa36;
  }
  @media (max-width: 1280px) {
    &.active {
      color: #8baa36;
      display:flex;
    }
    
  }

`;

export  const Box = styled.div`
display: flex;
  height: 100%;
  margin-left: 200px; 
  margin-right: auto; 
  flex-direction: column-reverse;
`;

export const Logo = styled(Link)`
  display: flex;
  position: absolute;
  left: 16px;
  top: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 30%;
  width: 40px;
  height: 40px;
  background-color: #8baa36;
  z-index: 999;
`;
export const  Search  = styled.li`
display: flex;
justify-content: center;
  align-items: center;
`
export const SearchText = styled(StyledLink)`
  margin-left: 8px;
  @media (min-width: 1280px) {
    display: none;
  }
`;


// export const ThemeSwitch = styled.div`
// @media (max-width: 768px) {
//   display: flex;
//   margin-left: 20px;
//   align-items: flex-end;
// flex-direction: column-reverse;
// }
// `;


// export const ThemeToggle = styled.input`
// @media (max-width: 768px) {
//   width: 40px;
//   height: 20px;
//   appearance: none;
//   z-index:999;
//   background-color: #ccc;
//   outline: none;
//   border-radius: 10px;
//   position: relative;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   &:checked {
//     background-color: #8baa36;
//   }
//   &:before {
//     content: "";
//     width: 16px;
//     height: 16px;
//     background-color: #fff;
//     border-radius: 50%;
//     position: absolute;
//     bottom: 2px;
//     left: ${props => (props.checked ? "22px" : "2px")};
//     transition: left 0.3s;
//   }}
// `;