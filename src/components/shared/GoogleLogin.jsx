import { Box, Typography } from "@mui/material";
import React from "react";
import googleLogo from "@/assets/icons/google.png";
import Image from "next/image";
import useAuth from "@/utils/useAuth";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "@/utils/useAxiosSecure";
import { useRouter, useSearchParams } from "next/navigation";

const GoogleLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosSecure = useAxiosSecure();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Successfully sign in with Google");

        const userInfo = {
          email: loggedUser?.email,
          name: loggedUser?.displayName,
        };

        axiosSecure.post("/users", userInfo).then((res) => {
          res.data;
        });

        if (redirect) {
          router.push(decodeURIComponent(redirect));
        } else {
          router.push("/");
        }
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
