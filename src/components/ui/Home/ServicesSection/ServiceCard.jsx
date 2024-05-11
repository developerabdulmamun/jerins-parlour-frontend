import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  const { icon, heading, price, description } = service;

  return (
    <Grid
      item
      xs={12}
      lg={4}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign={"center"}
      p={3}
      borderRadius={"10px"}
      sx={{
        transition: "box-shadow 0.3s",
        "&:hover": {
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
        },
        cursor: "pointer",
      }}
    >
      <Box
        height={72}
        width={72}
        borderRadius={"50%"}
        bgcolor={"rgba(246, 62, 123, 0.2)"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={icon} alt="service icon" height={42} width={42} />
      </Box>
      <Typography
        my={"18px"}
        color={"#111430"}
        fontWeight={600}
        fontSize={"20px"}
        lineHeight={1}
      >
        {heading}
      </Typography>
      <Typography
        mb={1}
        color={"#F63E7B"}
        fontWeight={500}
        fontSize={"20px"}
        lineHeight={1}
      >
        ${price}
      </Typography>
      <Typography color={"rgba(0, 0, 0, 0.7)"}>{description}</Typography>
    </Grid>
  );
};

export default ServiceCard;
