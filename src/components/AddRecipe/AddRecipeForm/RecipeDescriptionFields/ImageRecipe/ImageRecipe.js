import { Image, ImageWrapper, InputImage } from "./ImageRecipe.styled";

import svg from "../../../../images/addRecipe/addPhoto.svg";

export const ImageRecipe = () => {
  return (
    <ImageWrapper>
      <InputImage type="file" id="fileElem" multiple accept="image/*" />
      <a href="#" id="fileSelect">
        <Image src={svg} alt="addPhoto" />
      </a>
      <div id="fileList">{/* <p>No files selected!</p> */}</div>
    </ImageWrapper>
  );
};
