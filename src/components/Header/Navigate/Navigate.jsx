import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectTheme, selectUser } from "../../../redux/selector/selectors";
import { switcherTheme } from "../../../redux/Slice/themeSwitcherSlice/themeSwitcherSlice";
import { useScreenWidth } from "../../../hooks";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { ModalEditProfile } from "../ModalEditProfile/ModalEditProfile";
import { UserProfile } from "../UserProfile/UserProfile";
import { Logout } from "../Logout/Logout";

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
   LogoAvatarWrapper,
   StyledLinkSearch,
} from "./Navigate.styled";
import { ThemeSwitch, ThemeToggle, WrapThemeSwitchMobile } from "../styled";

export const Navigate = ({ page }) => {
   const theme = useSelector(selectTheme);
   const dispatch = useDispatch();
   const screenWidth = useScreenWidth();

   const [nav, setNav] = useState(false);
   const [modalActive, setModalActive] = useState(false);

   const [modalLogoutActive, setModalLogoutActive] = useState(false);
   const [userProfileActive, setUserProfileActive] = useState(false);
   const user = useSelector(selectUser);

   useEffect(() => {
      const disableScroll = () => {
         window.addEventListener("scroll", preventScroll);
         document.documentElement.style.overflow = "hidden";
      };

      const enableScroll = () => {
         window.removeEventListener("scroll", preventScroll);
         document.documentElement.style.overflow = "auto";
      };

      const preventScroll = (event) => {
         event.preventDefault();
         event.stopPropagation();
      };

      if (nav) {
         disableScroll();
      } else {
         enableScroll();
      }
   }, [nav]);

   const handleAvatarClick = () => {
      setModalActive(!modalActive);
   };

   const closeModal = (setter) => {
      setter(false);
   };

   return (
      <Nav>
         <Line nav={nav} page={page}>
            <li>
               <StyledLink
                  to="/categories/breakfast"
                  onClick={() => {
                     if (!screenWidth.desktop) setNav(!nav);
                  }}
               >
                  Categories
               </StyledLink>
            </li>
            <li>
               <StyledLink
                  to="/add"
                  onClick={() => {
                     if (!screenWidth.desktop) setNav(!nav);
                  }}
               >
                  Add Recipe
               </StyledLink>
            </li>
            <li>
               <StyledLink
                  to="/my"
                  onClick={() => {
                     if (!screenWidth.desktop) setNav(!nav);
                  }}
               >
                  My Recipe
               </StyledLink>
            </li>
            <li>
               <StyledLink
                  to="/favorite"
                  onClick={() => {
                     if (!screenWidth.desktop) setNav(!nav);
                  }}
               >
                  Favorite
               </StyledLink>
            </li>
            <li>
               <StyledLink
                  to="/shopping-list"
                  onClick={() => {
                     if (!screenWidth.desktop) setNav(!nav);
                  }}
               >
                  Shopping list
               </StyledLink>
            </li>
            <Search>
               <StyledLinkSearch
                  to="/search"
                  onClick={() => {
                     if (!screenWidth.desktop) setNav(!nav);
                  }}
               >
                  <FiSearch width={"24"} height={"24"} />
                  <SearchText>Search</SearchText>
               </StyledLinkSearch>
            </Search>
            {!screenWidth.desktop && (
               <WrapThemeSwitchMobile>
                  <ThemeSwitch
                     darkThem={theme}
                     onClick={() => {
                        dispatch(switcherTheme());
                     }}
                  >
                     <ThemeToggle darkThem={theme} />
                  </ThemeSwitch>
               </WrapThemeSwitchMobile>
            )}
         </Line>
         <Box>
            <BoxName onClick={handleAvatarClick}>
               <LogoAvatarWrapper>
                  <LogoAvatar src={user?.avatarURL} />
               </LogoAvatarWrapper>
               <Name page={page} screen={screenWidth}>
                  {user?.name}
               </Name>
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

         {modalLogoutActive && <Logout closeModal={() => closeModal(setModalLogoutActive)} />}
         {userProfileActive && <UserProfile closeModal={() => closeModal(setUserProfileActive)} />}
      </Nav>
   );
};
