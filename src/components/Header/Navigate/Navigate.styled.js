import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import modalMOb from "../../../images/Modal/modalLeafMob.png";
import modalTab from "../../../images/Modal/modalLeafTab.png";

export const Nav = styled.nav`
  display: flex;
  @media (min-width: 1280px) {
margin-left:150px;

  }
`;

export const Line = styled.ul`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 18px;
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
    display: ${(props) => (props.nav ? "flex" : "none")};
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

export const MobileBtn = styled.div`

  margin-left:30px;
  right: 20px;
  top: 20px;
  display: flex;
  width: ${(props) => (props.size ? `${props.size}px` : "32px")};
  height: ${(props) => (props.size ? `${props.size}px` : "32px")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  @media (min-width: 1268px) {
    display: none;
    position: absolute;
  }
`;
export const StyledLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  display: flex;
  &.active {
    color: #8baa36;
  }
`;
export const Search = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchText = styled.p`
  margin-left: 8px;
  @media (min-width: 1280px) {
    display: none;
  }
`;
export const BoxName = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 1280px) {
    margin-left: 100px;
  }
`;
export const LogoAvatar = styled(RxAvatar)`
  width: 44px;
  height: 44px;
`;

export const Name = styled.p`
  margin-left: auto;
  padding-left: 10px;
`;
 export const Box = styled.div`
 display: flex;
 align-items: center;
 position: relative;
 `