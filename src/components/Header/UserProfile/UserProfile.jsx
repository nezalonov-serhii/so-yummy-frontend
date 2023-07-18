import {
   Avatar,
   Box,
   Input,
   Button,
   Form,
   Pencil,
   InputWrapper,
   Icon,
   IconClose,
} from "./UserProfile.styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/selector/selectors";

import { useState } from "react";

export const UserProfile = ({ closeModal }) => {
   const user = useSelector(selectUser);
   const [name, setName] = useState(user?.name || "");

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   const handleNameChange = (e) => {
      setName(e.target.value);
   };

   return (
      <Box>
         <IconClose onClick={closeModal} />
         <Avatar src={user?.avatarURL} />
         <Form onSubmit={handleSubmit}>
            <InputWrapper>
               <Icon />
               <Input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder={user?.name}
               />
               <Pencil />
            </InputWrapper>
            <Button type="submit">Save changes</Button>
         </Form>
      </Box>
   );
};
