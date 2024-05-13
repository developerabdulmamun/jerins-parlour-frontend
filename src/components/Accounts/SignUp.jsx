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
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const { createUser } = useAuth();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleCreateUser = (event) => {
    event.preventDefault();

    const form = event.target;

    const firstName = form.first.value;
    const lastName = form.last.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;

    console.log(firstName, lastName, email, password, confirmPassword);

    createUser(email, password)
      .then((result) => {
        result.user;
        toast.success("Account create successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box
          width={{ xs: "100%", sm: "80%", md: "50%" }}
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
              Create an account
            </Typography>

            <form onSubmit={handleCreateUser}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    label="First Name"
                    type="text"
                    name="first"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    label="Last Name"
                    type="text"
                    name="last"
                    fullWidth
                  />
                </Grid>
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
                <Grid item xs={12}>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="standard-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      name="confirm"
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
                Create an account
              </CustomButton>

              <Toaster />
            </form>

            <Typography fontWeight={500} textAlign={"center"}>
              Already have an account?{" "}
              <Link href={"/login"} className="text-[#F63E7B] underline">
                Login
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

export default SignUp;
