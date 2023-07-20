import styled from "styled-components";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";

import Typography from "@mui/material/Typography";

export const Input = styled.input`
  position: absolute;
  z-index: 11;
  opacity: 0;
  width: 98px;
  height: 98px;
  border-radius: 50%;
  background-color: red;
  outline: solid 5px red;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 113px;
    height: 113px;
  }
`;

export const CropWrapper = styled.div`
  margin-top: 150px;
  position: relative;
  outline: solid 4px brown;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100vw;
  height: 100vh;
`;

export const CropContainer = styled.div`
  outline: solid 3px red;
  flex: 1;
  /* position: relative;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  background: #333;

  @media (min-width: 600px) {
    height: 400px;
  }
`;

export const CropButton = styled(Button)`
  flex-shrink: 0;
  margin-left: 16px;
`;

export const Controls = styled.div`
  width: 100%;
  outline: solid 5px blue;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-primary);

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const SliderLabel = styled(Typography)`
  @media (max-width: 599px) {
    min-width: 65px;
  }
`;

export const StyledSlider = styled(Slider)`
  padding: 22px 0px;
  margin-left: 16px;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    margin: 0 16px;
  }
`;

export const Wrapper = styled.div`
  /* outline: solid 3px green;
  position: absolute;
  z-index: 10;
  top: 200%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 60vw; */
`;
