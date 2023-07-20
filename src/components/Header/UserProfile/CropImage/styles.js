import styled from "styled-components";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";

import Typography from "@mui/material/Typography";

export const CropContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
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
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

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
