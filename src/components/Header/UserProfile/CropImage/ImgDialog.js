import React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
// import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";

const styles = {
  appBar: {
    position: "relative",
  },
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ImgDialogContainer = styled("div")`
  .MuiDialog-paper {
    width: 100%;
    max-height: 100%;
  }
`;

const ContainerPreview = styled("div")`
  height: 90vh;
`;
const Toolbar = styled("div")`
  display: flex;
  padding: 15px;
`;

const ImageContainer = styled("div")`
  margin-top: 100px;
  max-width: 100%;
  max-height: 100%;
`;

const Image = styled("img")`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  max-width: 350px;
`;

const ImgDialog = ({ img, onClose, onSave }) => {
  return (
    <ImgDialogContainer>
      <Dialog
        fullScreen
        open={!!img}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <ContainerPreview>
          <AppBar>
            <Toolbar>
              <button onClick={onClose} aria-label="Close">
                Close
              </button>
              <button
                color="inherit"
                onClick={onSave}
                aria-label="Save"
                edge="end"
              >
                Save
              </button>
              <Typography variant="h6" color="inherit">
                Cropped image
              </Typography>
            </Toolbar>
          </AppBar>
          <ImageContainer>
            <Image src={img} alt="Cropped" />
          </ImageContainer>
        </ContainerPreview>
      </Dialog>
    </ImgDialogContainer>
  );
};

export default ImgDialog;
