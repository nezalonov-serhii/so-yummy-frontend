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
  Box,
} from "./Navigate.styled";
import { ModalEditProfile } from "../ModalEditProfile/ModalEditProfile";
import { Logout } from "../Logout/Logout";
import { UserProfile } from "../UserProfile/UserProfile";

export const Navigate = () => {
  const [nav, setNav] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const [modalLogoutActive, setModalLogoutActive] = useState(false);
  const [userProfileActive, setUserProfileActive] = useState(false);
  const user = useSelector(selectUser);

  const handleAvatarClick = () => {
    setModalActive(true);
  };

  const closeModal = (setter) => {
    setter(false);
  };

  return (
    <Nav>
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
      <Box>
        <BoxName onClick={handleAvatarClick}>
          <LogoAvatar />
          <Name>{user?.name}</Name>
        </BoxName>
        <MobileBtn size={32} onClick={() => setNav(!nav)}>
          {nav ? <CgClose size={32} /> : <HiOutlineMenuAlt2 size={32} />}
        </MobileBtn>
        {modalActive && (
          <ModalEditProfile
            setModalLogoutActive={setModalLogoutActive}
            setUserProfileActive={setUserProfileActive}
            setModalActive={setModalActive}
          />
        )}
      </Box>

      {modalLogoutActive && (
        <Logout closeModal={() => closeModal(setModalLogoutActive)} />
      )}
      {userProfileActive && (
        <UserProfile closeModal={() => closeModal(setUserProfileActive)} />
      )}
    </Nav>
  );
};
