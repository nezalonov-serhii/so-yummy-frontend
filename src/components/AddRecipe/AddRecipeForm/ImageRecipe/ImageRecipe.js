import {
  Image,
  ImageWrapper,
  InputImage,
  NewImage,
} from "./ImageRecipe.styled";

import svg from "../../../../images/addRecipe/addPhoto.svg";
import { useEffect, useState } from "react";

export const ImageRecipe = ({ onChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    onChange(selectedFile);
  }, [selectedFile]);

  const handleFileSelect = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(URL.createObjectURL(e.target.files[0]));
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
      <a href="#" id="fileSelect">
        {!selectedFile ? (
          <Image src={svg} alt="addPhoto" />
        ) : (
          <NewImage src={selectedFile} alt="photoRecipe" />
        )}
      </a>
    </ImageWrapper>
  );
};
