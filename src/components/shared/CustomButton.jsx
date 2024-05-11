import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ children, sx, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#F63E7B",
        fontWeight: "medium",
        textTransform: "capitalize",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
