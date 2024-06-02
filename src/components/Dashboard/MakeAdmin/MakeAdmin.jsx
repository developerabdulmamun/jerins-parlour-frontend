"use client";

import CustomButton from "@/components/shared/CustomButton";
import useAxiosSecure from "@/utils/useAxiosSecure";
import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const axiosSecure = useAxiosSecure();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axiosSecure.patch("/make-admin", { email });
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <>
      <Box bgcolor={"white"} borderRadius={"20px"} p={4}>
        <Typography color={"#232323"} fontWeight={"500"} mb={0.5}>
          Email
        </Typography>
        <Box
          component={"form"}
          display={"flex"}
          alignItems={"center"}
          gap={1}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            placeholder="youremail@gmail.com"
            variant="outlined"
            size="small"
            sx={{ width: { xs: "100%", md: "50%" } }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <CustomButton type="submit">Make Admin</CustomButton>
        </Box>

        {message && (
          <Typography color={"#f00"} mt={2}>
            {message}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default MakeAdmin;
