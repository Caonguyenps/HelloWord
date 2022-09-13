import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import success from "../../assets/image/success.png";
import { useHistory } from "react-router-dom";
import path from "../../../src/resources/path";
import "./modal.css";

export default function ModalErrorComponent(props) {
  const history = useHistory();
  const handleClickLogin = () => {
    history.push(path.LOGIN);
  };
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thông báo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="error-title-icon">
              <img src={success} alt="" width="100%" />
            </div>
            <div className="error-title-content">
              <span>{props.title}</span>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickLogin} color="primary">
            Login
          </Button>
          <Button onClick={props.handleClose} color="secondary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
