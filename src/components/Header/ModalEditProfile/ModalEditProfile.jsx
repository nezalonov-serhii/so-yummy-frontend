import { RxPencil1 } from 'react-icons/rx';
import React, { useState } from "react";
import { Box, Button, Profile } from "./ModalEditProfile.styled";
import { Logout } from "../Logout/Logout";
import { UserProfile } from '../UserProfile/UserProfile';

export const ModalEditProfile = ({ closeModal }) => {
  const [modalLogoutActive, setModalLogoutActive] = useState(false);
  const [userProfileActive, setUserProfileActive] = useState(false);

  const handleLogoutClick = () => {
    setModalLogoutActive(true);
  };

  const handleUserProfileClick = () => {
    setUserProfileActive(true);
  };

  const closeUserProfile = () => {
    setUserProfileActive(false);
  };

  return (
    <Box>
      <Profile onClick={handleUserProfileClick}>
        Edit profile <RxPencil1 />
      </Profile>
      <Button onClick={handleLogoutClick}>Log out</Button>
      {modalLogoutActive && <Logout closeModal={closeModal} />}
      {userProfileActive && (
        <UserProfile closeUserProfile={closeUserProfile} />
      )}
    </Box>
  );
};

export default ModalEditProfile;

