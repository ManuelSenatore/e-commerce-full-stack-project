import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from '@mui/material/Dialog';
import { DialogActions } from "@mui/material";

const LoadingComponent = (props) => {
  return (
    <Dialog
    className="dialog"
    open={ props.loading }
    onClose={props.loadingOff}
    fullScreen={true}
>
    <CircularProgress className="loading" color="error"/>
</Dialog>
  );
};

export default LoadingComponent;
