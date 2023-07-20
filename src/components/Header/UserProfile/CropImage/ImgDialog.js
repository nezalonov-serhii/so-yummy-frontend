import React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";

const styles = {
  appBar: {
    position: "relative",
  },
  flex: {
    flex: 1,
  },
  imgContainer: {
    position: "relative",
    flex: 1,
    padding: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
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
              <IconButton color="inherit" onClick={onClose} aria-label="Close">
                {/* <CloseIcon /> */}
                <div>CloseIcon</div>
              </IconButton>
              <button
                color="inherit"
                onClick={onSave}
                aria-label="Save"
                edge="end"
              >
                Зберегти
              </button>
              <Typography variant="h6" color="inherit">
                Cropped image
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={styles.imgContainer}>
            <img src={img} alt="Cropped" className={styles.img} />
          </div>
        </div>
      </Dialog>
    </ImgDialogContainer>
  );
};

export default ImgDialog;
