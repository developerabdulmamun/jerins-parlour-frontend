"use client";

import CustomButton from "@/components/shared/CustomButton";
import GoogleLogin from "@/components/shared/GoogleLogin";
import useAuth from "@/utils/useAuth";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        result.user;
        toast.success("Login Successful");

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
    <>
      <Container maxWidth="lg">
        <Box
          width={{ xs: "100%", sm: "70%", md: "40%" }}
          mx={"auto"}
          pt={"50px"}
        >
          <Box pt={4} pb={3} px={7} border={"1px solid gray"} borderRadius={1}>
            <Typography
              fontSize={24}
              fontWeight={700}
              variant="body1"
              textAlign={"center"}
              mb={3}
            >
              Login
            </Typography>

            <form onSubmit={handleLogin}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    label="Email"
                    type="email"
                    name="email"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="standard-adornment-password">
                      Password
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <CustomButton type="submit" sx={{ width: "100%", mt: 4, mb: 2 }}>
                Login
              </CustomButton>
            </form>

            <Typography fontWeight={500} textAlign={"center"}>
              New to our website?{" "}
              <Link href={"/signup"} className="text-[#F63E7B] underline">
                Create an account
              </Link>
            </Typography>
          </Box>

          <Divider sx={{ mt: "26px", mb: "22px" }}>Or</Divider>

          <GoogleLogin />
        </Box>
      </Container>
    </>
  );
};

export default Login;
