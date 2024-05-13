import { Box, Typography } from "@mui/material";
import React from "react";
import googleLogo from "@/assets/icons/Google.png";
import Image from "next/image";
import useAuth from "@/utils/useAuth";
import toast, { Toaster } from "react-hot-toast";

const GoogleLogin = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully sign in with Google");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Box
      onClick={handleGoogleSignIn}
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

      <Toaster />
    </Box>
  );
};

export default GoogleLogin;
