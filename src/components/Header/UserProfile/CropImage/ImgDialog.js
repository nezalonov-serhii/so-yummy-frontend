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

const Toolbar = styled("div")`
  display: flex;
  padding: 15px;
`;

const ImageContainer = styled("div")`
  outline: solid 1px red;

  position: relative;

  padding: 160px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled("img")`
  border-radius: 50%;
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
        <div>
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
        </div>
      </Dialog>
    </ImgDialogContainer>
  );
};

export default ImgDialog;
