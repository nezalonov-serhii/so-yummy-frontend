import {
  Box,
  Input,
  Button,
  Form,
  Pencil,
  InputWrapper,
  Icon,
  IconClose,
  AvatarWrapper,
  InputImage,
  ImgContainer,
  Image,
  NewImage,
} from "./UserProfile.styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/selector/selectors";

import { useState } from "react";
import { fetchChangeUser } from "../../../redux/thunk/changeUser/operation";

export const UserProfile = ({ closeModal }) => {
  const user = useSelector(selectUser);
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.avatarURL || "");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    try {
      if (image) {
        const res = await fetch(image);
        const contentType = res.headers.get("content-type");
        const blob = await res.blob();
        const file = new File([blob], "image", { type: contentType });
        formData.append("avatar", file);
        await fetchChangeUser(formData);
      } else {
        await fetchChangeUser(formData);
      }
      console.log(image);
      console.log(name);
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFileSelect = (event) => {
    if (event.target.files.length > 0) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <Box>
      <IconClose onClick={closeModal} />

      <Form onSubmit={handleSubmit}>
        <AvatarWrapper>
          <InputImage
            type="file"
            id="fileElem"
            accept="image/*"
            onChange={handleFileSelect}
          />
          <ImgContainer id="fileSelect">
            {!image ? <Image /> : <NewImage src={image} alt="userPhoto" />}
          </ImgContainer>
        </AvatarWrapper>
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
