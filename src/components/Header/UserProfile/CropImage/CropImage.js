import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import ImgDialog from "./ImgDialog";
import { getCroppedImg } from "./canvasUtils";
import {
  CropContainer,
  CropButton,
  Controls,
  SliderContainer,
  SliderLabel,
  StyledSlider,
} from "./styles";

const CropImage = () => {
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

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);
  const onSave = useCallback(() => {
    // Виконуємо якісь дії для збереження обрізаного зображення
    console.log("Обрізане зображення збережено!", croppedImage);
    setCroppedImage(null);
    setShowCropImage(false);
  }, [croppedImage]);

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
      setShowCropImage(true);
    }
  };

  return (
    <div>
      {showCropImage && imageSrc ? (
        <React.Fragment>
          <CropContainer>
            <Cropper
              image={imageSrc}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={4 / 3}
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
            <SliderContainer>
              <SliderLabel variant="overline">Rotation</SliderLabel>
              <StyledSlider
                value={rotation}
                min={0}
                max={360}
                step={1}
                aria-label="Rotation"
                onChange={(e, rotation) => setRotation(rotation)}
              />
            </SliderContainer>
            <CropButton
              onClick={showCroppedImage}
              variant="contained"
              color="primary"
            >
              Show Result
            </CropButton>
          </Controls>
          <ImgDialog
            img={croppedImage}
            onClose={onClose}
            onSave={onSave}
            showCropImage={showCropImage}
          />
        </React.Fragment>
      ) : (
        <input type="file" onChange={onFileChange} accept="image/*" />
      )}
    </div>
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
