// ModalEditProfile.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "./ModalEditProfile.styled";
import { logoutThunk } from "../../../redux/thunk/auth/authThunk";
import { Logout } from "../Logout/Logout";

export const ModalEditProfile = ({ closeModal }) => {
  const [modalLogoutActive, setModalLogoutActive] = useState(false);



  const handleLogoutClick = () => {
    setModalLogoutActive(true);
  };

 

  return (
    <Box onClick={handleLogoutClick}>
      <p>Edit profile</p>
      <Button>Log out</Button>
      {modalLogoutActive && <Logout closeModal={closeModal} />}
    </Box>
  );
};

export default ModalEditProfile;
