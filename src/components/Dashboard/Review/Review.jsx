"use client";

import CustomButton from "@/components/shared/CustomButton";
import useAuth from "@/utils/useAuth";
import useAxiosPublic from "@/utils/useAxiosPublic";
import { Box, Grid, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Review = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleReview = async (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const service = form.service.value;
    const message = form.message.value;
    const rating = form.rating.value;
    const photo = user?.reloadUserInfo?.photoUrl;

    const userInfo = { photo, name, service, comment: message, rating };

    const res = await axiosPublic.post("/reviews", userInfo);
    if (res.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Thank you for your review",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <Box width={{ xs: "100%", sm: "80%", md: "35%" }}>
      <form onSubmit={handleReview}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              variant="outlined"
              defaultValue={user?.displayName}
              fullWidth
              sx={{
                bgcolor: "white",
                borderRadius: "4px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { border: "none" },
                },
              }}
              InputProps={{ notched: false }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="service"
              variant="outlined"
              fullWidth
              sx={{
                bgcolor: "white",
                borderRadius: "4px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { border: "none" },
                },
              }}
              InputProps={{ notched: false }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="message"
              variant="outlined"
              multiline
              rows={6}
              fullWidth
              sx={{
                bgcolor: "white",
                borderRadius: "4px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { border: "none" },
                },
              }}
              InputProps={{ notched: false }}
            />
          </Grid>

          <Grid item xs={12}>
            <Rating
              name="rating"
              value={rating}
              onChange={handleRatingChange}
              size="large"
            />
          </Grid>
        </Grid>

        <CustomButton type="submit" sx={{ width: "40%", mt: 2 }}>
          Submit
        </CustomButton>
      </form>
    </Box>
  );
};

export default Review;
