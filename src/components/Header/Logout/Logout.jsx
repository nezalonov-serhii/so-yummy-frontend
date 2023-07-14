

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Text, ButtonLogOut, BoxLogout, ButtonCancel, IconClose } from "./Logout.styled";
import { logoutThunk } from "../../../redux/thunk/auth/authThunk";

export const Logout = ({ closeModal }) => {
  const [closeModalFlag, setCloseModalFlag] = useState(true);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  const handleClose = () => {
    setCloseModalFlag(false);
    closeModal();
  };

  if (!closeModalFlag) {
    return null;
  }

  return (
    <Box>
      <IconClose onClick={handleClose} />
      <Text>Are you sure you want to log out?</Text>
      <BoxLogout>
        <ButtonLogOut onClick={handleLogout}>Log out</ButtonLogOut>
        <ButtonCancel onClick={handleClose}>Cancel</ButtonCancel>
      </BoxLogout>
    </Box>
  );
};

export default Logout;
