import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./canvasUtils";
import {
  CropContainer,
  CropButton,
  Controls,
  SliderContainer,
  SliderLabel,
  StyledSlider,
  Input,
  Wrapper,
  CropWrapper,
} from "./styles";

const CropImage = ({ onSaveCroppedImage }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showCropImage, setShowCropImage] = useState(true);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const cropImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);
      return croppedImage;
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  const showCroppedImageAndSave = useCallback(async () => {
    const croppedImage = await cropImage();

    setShowCropImage(false);
    onSaveCroppedImage(croppedImage);
  }, [onSaveCroppedImage, cropImage]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
    setShowCropImage(false);
  }, []);

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
      setShowCropImage(true);
    }
  };

  return (
    <Wrapper>
      {showCropImage && imageSrc ? (
        <React.Fragment>
          <CropWrapper>
            <CropContainer>
              <Cropper
                image={imageSrc}
                crop={crop}
                rotation={rotation}
                zoom={zoom}
                aspect={1}
                cropShape="round"
                onCropChange={setCrop}
                onRotationChange={setRotation}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </CropContainer>
            <Controls>
              <SliderContainer>
                <SliderLabel variant="overline">Zoom</SliderLabel>
                <StyledSlider
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  aria-label="Zoom"
                  onChange={(e, zoom) => setZoom(zoom)}
                />
              </SliderContainer>

              <CropButton
                onClick={showCroppedImageAndSave}
                variant="contained"
                color="primary"
              >
                Save
              </CropButton>
              <CropButton onClick={onClose} variant="contained" color="primary">
                Close
              </CropButton>
            </Controls>
          </CropWrapper>
        </React.Fragment>
      ) : (
        <Input type="file" onChange={onFileChange} accept="image/*" />
      )}
    </Wrapper>
  );
};

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export default CropImage;
