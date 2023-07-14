
import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/selector/selectors";
import {
  Nav,
  Line,
  StyledLink,
  MobileBtn,
  Search,
  SearchText,
  Name,
  BoxName,
  LogoAvatar,
} from "./Navigate.styled";
import { ModalEditProfile } from "../ModalEditProfile/ModalEditProfile";
import { Logout } from "../Logout/Logout";

export const Navigate = () => {
  const [nav, setNav] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalLogoutActive, setModalLogoutActive] = useState(false);
  const user = useSelector(selectUser);

  const handleAvatarClick = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
    setModalLogoutActive(false);
  };

  return (
    <Nav>
      <nav>
        <Line nav={nav}>
          <li>
            <StyledLink to="/categories/breakfast">Categories</StyledLink>
          </li>
          <li>
            <StyledLink to="/add">Add Recipe</StyledLink>
          </li>
          <li>
            <StyledLink to="/my">My Recipe</StyledLink>
          </li>
          <li>
            <StyledLink to="/favorite">Favorite</StyledLink>
          </li>
          <li>
            <StyledLink to="/shopping-list">Shopping list</StyledLink>
          </li>
          <Search>
            <StyledLink to="/search">
              <FiSearch width={24} height={24} />
              <SearchText>Search</SearchText>
            </StyledLink>
          </Search>
        </Line>
        <MobileBtn size={32} onClick={() => setNav(!nav)}>
          {nav ? <CgClose size={32} /> : <HiOutlineMenuAlt2 size={32} />}
        </MobileBtn>
      </nav>
      {modalActive && <ModalEditProfile closeModal={closeModal} />}
      <BoxName onClick={handleAvatarClick}>
        <LogoAvatar />
        <Name>{user.name}</Name>
      </BoxName>
      {modalLogoutActive && <Logout closeModal={closeModal} />}
    </Nav>
  );
};

export default Navigate;
