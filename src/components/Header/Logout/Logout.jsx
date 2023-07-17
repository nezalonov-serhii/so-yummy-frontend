import React from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Text,
  ButtonLogOut,
  BoxLogout,
  ButtonCancel,
  IconClose,
} from "./Logout.styled";
import { logoutThunk } from "../../../redux/thunk/auth/authThunk";

export const Logout = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
    closeModal();
  };

  return (
    <Box>
      <IconClose onClick={closeModal} />
      <Text>Are you sure you want to log out?</Text>
      <BoxLogout>
        <ButtonLogOut onClick={handleLogout}>Log out</ButtonLogOut>
        <ButtonCancel onClick={closeModal}>Cancel</ButtonCancel>
      </BoxLogout>
    </Box>
  );
};
