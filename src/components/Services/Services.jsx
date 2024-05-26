"use client";

import useGetAllServices from "@/utils/useGetAllServices";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Service from "./Service";

const Services = () => {
  const { services } = useGetAllServices();

  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={2} mt={9} mb={5}>
            {services?.map((service) => (
              <Service key={service._id} service={service} />
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services;
