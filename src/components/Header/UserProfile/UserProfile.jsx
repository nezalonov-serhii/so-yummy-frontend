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
  ImgContainer,
  Image,
  NewImage,
  IconAdd,
  Label,
} from "./UserProfile.styled";
import PlusIcon from "../../../images/Modal/plus-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/selector/selectors";

import { useState } from "react";
import { fetchChangeUser } from "../../../redux/thunk/changeUser/operation";
import {
  updateName,
  updateAvatarURL,
} from "../../../redux/Slice/signup/signupSlice";
import { toast } from "react-toastify";
import { ErrorMessage } from "../../AddRecipe/AddRecipeForm/AddRecipeForm.styled";
import Loader from "../../Loader/Loader";
import CropImage from "./CropImage/CropImage";

export const UserProfile = ({ closeModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.avatarURL || "");
  const [croppedImage, setCroppedImage] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    if (!name) {
      return;
    }
    try {
      if (croppedImage) {
        setIsLoading(true);
        const res = await fetch(croppedImage);
        const contentType = res.headers.get("content-type");
        const blob = await res.blob();
        const file = new File([blob], "image", { type: contentType });
        formData.append("avatar", file);
        await fetchChangeUser(formData);
        dispatch(updateAvatarURL(croppedImage));
      } else {
        await fetchChangeUser(formData);
      }
      closeModal();
      dispatch(updateName(name));
    } catch (error) {
      toast.error("Something went wrong, please try again later...");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const onSaveCroppedImage = (croppedImage) => {
    setCroppedImage(croppedImage);
  };

  return (
    <Box>
      <IconClose onClick={closeModal} />

      <Form onSubmit={handleSubmit}>
        <AvatarWrapper>
          <Label htmlFor="fileElem">
            <CropImage
              image={image}
              setImage={setImage}
              onSaveCroppedImage={onSaveCroppedImage}
            />
            <ImgContainer id="fileSelect">
              {croppedImage ? (
                <NewImage src={croppedImage} alt="userPhoto" />
              ) : !image ? (
                <Image />
              ) : (
                <NewImage src={image} alt="userPhoto" />
              )}
            </ImgContainer>
            <IconAdd src={PlusIcon} alt="Add Icon" />
          </Label>
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
            hasError={name.length < 1}
          />
          {name.length < 1 && <ErrorMessage>Please select name</ErrorMessage>}
          <Pencil />
        </InputWrapper>

        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader size={"20"} color={"var(--text-dark)"} />}
          {!isLoading && "Save changes"}
        </Button>
      </Form>
    </Box>
  );
};
