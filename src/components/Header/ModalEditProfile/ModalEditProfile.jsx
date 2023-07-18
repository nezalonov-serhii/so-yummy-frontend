import { RxPencil1 } from "react-icons/rx";

import { Box, Button, Profile } from "./ModalEditProfile.styled";

export const ModalEditProfile = ({
   setModalLogoutActive,
   setUserProfileActive,
   setModalActive,
}) => {
   const handleLogoutClick = () => {
      setModalLogoutActive(true);
      setModalActive(false);
      setUserProfileActive(false);
   };

   const handleUserProfileClick = () => {
      setUserProfileActive(true);
      setModalActive(false);
      setModalLogoutActive(false);
   };

   return (
      <Box>
         <Profile onClick={handleUserProfileClick}>
            Edit profile <RxPencil1 />
         </Profile>
         <Button onClick={handleLogoutClick}>Log out</Button>
      </Box>
   );
};
