"use client";

import CustomButton from "@/components/shared/CustomButton";
import useAuth from "@/utils/useAuth";
import { Box, Grid, Rating, TextField } from "@mui/material";
import React, { useState } from "react";

const Review = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleReview = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const service = form.service.value;
    const message = form.message.value;
    const rating = form.rating.value;

    console.log(name, service, message, rating);
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
