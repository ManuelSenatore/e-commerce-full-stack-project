import React from "react";
import { Alert, Snackbar } from "@mui/material";
const SnackbarSuccess = ({ openFlag, closeFunction, message }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={openFlag}
      autoHideDuration={4000}
      onClose={closeFunction}
    >
        <Alert severity="info">{message}</Alert>
    </Snackbar>
  );
};
export default SnackbarSuccess;
