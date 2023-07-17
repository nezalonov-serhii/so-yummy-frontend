import { Avatar, Box, Input, Button, Form, Pencil, InputWrapper, Icon, IconClose } from './UserProfile.styled';
import { useSelector} from "react-redux";
import { selectUser } from "../../../redux/selector/selectors";
// import { updateUserName } from "../../../service/api/apiAuth";
import { useState } from "react";
// import { updateUserNameThunk } from '../../../redux/thunk/auth/authThunk';

export const UserProfile = ({ closeModal }) => {
  const user = useSelector(selectUser);
  const [name, setName] = useState(user?.name || "");
  // const dispatch = useDispatch();

  // const handleUpdateUser = async () => {
  //   try {
  //     await updateUserName(token, name);
  //     dispatch(updateUserNameThunk());
  //   } catch (error) {
  //    console.log(error)
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <Box>
      <IconClose onClick={handleClose} />
      <Avatar />
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




