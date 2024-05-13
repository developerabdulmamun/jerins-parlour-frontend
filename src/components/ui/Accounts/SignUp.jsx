"use client";

import CustomButton from "@/components/shared/CustomButton";
import GoogleLogin from "@/components/shared/GoogleLogin";
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

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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

            <form>
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
