import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { onSignInRequest as signInRequestAction } from "../../../store/auth/sessionSlice";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "./signIn";

const SignInDialog = () => {
  const dispatch = useDispatch();

  const onSignInRequest = useSelector(
    (state) => state.auth.session.signInRequest
  );

  const handleClose = () => {
    dispatch(signInRequestAction(false));
  };

  return (
    <Dialog
      open={onSignInRequest}
      onClose={handleClose}
      maxWidth={"xl"}
      PaperProps={{
        component: "form",
        onSubmit: (e) => {
          e.preventDefault();
          handleClose();
        },
        sx: { backgroundImage: "none" },
      }}
    >
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
      >
        <SignIn />
      </DialogContent>
      {/* <DialogActions sx={{ pb: 3, px: 3 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" type="submit">
            Continue
          </Button>
        </DialogActions> */}
    </Dialog>
  );
};

export default SignInDialog;
