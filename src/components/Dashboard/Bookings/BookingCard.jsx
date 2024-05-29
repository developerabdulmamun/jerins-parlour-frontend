import { Box, Chip, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const statusColors = {
  Pending: "warning",
  Done: "success",
  Ongoing: "primary",
};

const BookingCard = ({ booking }) => {
  const { service, image, description, status } = booking;

  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{ p: 3, borderRadius: 2, boxShadow: 3, bgcolor: "white" }}
        height={"100%"}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
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
            <Image src={image} alt={service} height={50} width={50} />
          </Box>
          <Chip
            label={status}
            color={statusColors[status]}
            variant="outlined"
          />
        </Box>
        <Typography
          color={"#111430"}
          fontWeight={600}
          fontSize={"20px"}
          variant="body1"
          mb={0.5}
        >
          {service}
        </Typography>
        <Typography color={"#606268"} variant="body2">
          {description}
        </Typography>
      </Box>
    </Grid>
  );
};

export default BookingCard;
