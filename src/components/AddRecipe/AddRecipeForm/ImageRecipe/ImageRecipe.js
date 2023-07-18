import { toast } from "react-toastify";
import {
  Button,
  Image,
  ImageWrapper,
  InputImage,
  NewImage,
} from "./ImageRecipe.styled";

import svg from "../../../../images/addRecipe/addPhoto.svg";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../../../redux/Slice/addRecipeSlice/addRecipeFormSlice";

export const ImageRecipe = () => {
  const dispatch = useDispatch();
  const selectedFile = useSelector((state) => state.data.image);

  const handleFileSelect = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const fileSizeInBytes = file.size;
      const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
      // const maxSizeInBytes = 100 * 1024; // 100КВ

      if (fileSizeInBytes > maxSizeInBytes) {
        toast.error(
          "File size exceeds 5 MB. Please select a smaller file size."
        );

        return;
      }

      dispatch(setImage(URL.createObjectURL(file)));
    }
  };

  return (
    <ImageWrapper>
      <InputImage
        type="file"
        id="fileElem"
        accept="image/*"
        onChange={handleFileSelect}
      />
      <Button id="fileSelect">
        {!selectedFile ? (
          <Image src={svg} alt="addPhoto" />
        ) : (
          <NewImage src={selectedFile} alt="photoRecipe" />
        )}
      </Button>
    </ImageWrapper>
  );
};
