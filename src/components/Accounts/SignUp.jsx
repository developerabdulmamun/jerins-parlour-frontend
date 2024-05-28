"use client";

import CustomButton from "@/components/shared/CustomButton";
import GoogleLogin from "@/components/shared/GoogleLogin";
import useAuth from "@/utils/useAuth";
import useAxiosSecure from "@/utils/useAxiosSecure";
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
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const router = useRouter();
  const axiosSecure = useAxiosSecure();
  const { createUser, updateUserProfile } = useAuth();

  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleCreateUser = (event) => {
    event.preventDefault();

    const form = event.target;

    const firstName = form.first.value;
    const lastName = form.last.value;
    const name = firstName + " " + lastName;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;

    console.log(name, email, password, confirmPassword);

    // Password Validation
    if (password.length < 6) {
      setError("Password must be at least 6 character");
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must contain at least one lowercase");
      return;
    }

    if (!/(?=.*[a-z])/.test(password)) {
      setError("Password must contain at least one lowercase");
      return;
    }

    if (!/(?=.[!@#$&*])/.test(password)) {
      setError("Password must contain at least one special character");
      return;
    }

    if (!/(?=.*[0-9])/.test(password)) {
      setError("Password must contain at least one number");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and Confirm Password does not match");
      return;
    } else {
      setError("");
    }

    // Firebase Authentication
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        toast.success("Account create successful");
        form.reset();
        router.push("/login");
        updateUserProfile(name).then(() => {
          const userInfo = {
            email: createdUser.email,
            name: name,
          };

          axiosSecure.post("/users", userInfo).then((res) => {
            res.data;
          });
        });
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
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    label="Last Name"
                    type="text"
                    name="last"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    label="Email"
                    type="email"
                    name="email"
                    fullWidth
                    required
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
                      required
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
                      required
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

              <Typography variant="body2" color={"error"}>
                {error}
              </Typography>

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
