import { Box, Typography } from "@mui/material";
import React from "react";
import googleLogo from "@/assets/icons/Google.png";
import Image from "next/image";

const GoogleLogin = () => {
  return (
    <Box
      border={"1px solid gray"}
      borderRadius={"57px"}
      display={"flex"}
      alignItems={"center"}
      px={1}
      sx={{ cursor: "pointer" }}
    >
      <Image src={googleLogo} alt="google logo" height={31} width={31} />
      <Typography
        width={"100%"}
        fontWeight={500}
        textAlign={"center"}
        py={"12px"}
      >
        Continue with Google
      </Typography>
    </Box>
  );
};

export default GoogleLogin;
