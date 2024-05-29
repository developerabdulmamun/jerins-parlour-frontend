"use client";

import useAuth from "@/utils/useAuth";
import useAxiosSecure from "@/utils/useAxiosSecure";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import BookingCard from "./BookingCard";

const Bookings = () => {
  const user = useAuth();
  const axiosSecure = useAxiosSecure();

  const email = user.user.reloadUserInfo.email;

  const { data: bookings } = useQuery({
    queryKey: ["bookings", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${email}`);
      return res.data;
    },
  });

  return (
    <>
      <Grid container spacing={4}>
        {bookings?.map((booking) => (
          <BookingCard key={booking._id} booking={booking} />
        ))}
      </Grid>
    </>
  );
};

export default Bookings;
