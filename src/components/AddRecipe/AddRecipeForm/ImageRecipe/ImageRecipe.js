import { Button, Image, ImageWrapper, InputImage, NewImage } from "./ImageRecipe.styled";

import svg from "../../../../images/addRecipe/addPhoto.svg";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../../../redux/Slice/addRecipeSlice/addRecipeFormSlice";

export const ImageRecipe = () => {
   const dispatch = useDispatch();
   const selectedFile = useSelector((state) => state.data.image);

   const handleFileSelect = (e) => {
      if (e.target.files.length > 0) {
         dispatch(setImage(URL.createObjectURL(e.target.files[0])));
      }
   };

   return (
      <ImageWrapper>
         <InputImage type="file" id="fileElem" accept="image/*" onChange={handleFileSelect} />
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
