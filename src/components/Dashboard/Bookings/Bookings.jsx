"use client";

import useGetAllServices from "@/utils/useGetAllServices";
import { Grid } from "@mui/material";
import React from "react";

const Bookings = () => {
  const { services } = useGetAllServices();

  return (
    <>
      <Grid container spacing={4}>
        {
            
        }
      </Grid>
    </>
  );
};

export default Bookings;
