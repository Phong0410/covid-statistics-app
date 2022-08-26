import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const LoadingOverlay = ({ loading }) => {
  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default LoadingOverlay;
