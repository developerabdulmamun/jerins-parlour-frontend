"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/images/banner-image.png";

const Banner = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF8F5", py: 5 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 5, sm: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "start" },
            }}
          >
            <Typography
              variant="h1"
              color={"#111430"}
              fontSize={48}
              fontWeight={"bold"}
              textAlign={{ xs: "center", sm: "start" }}
            >
              BEAUTY SALON
            </Typography>
            <Typography
              variant="h1"
              color={"#111430"}
              fontSize={48}
              fontWeight={"bold"}
              textAlign={{ xs: "center", sm: "start" }}
            >
              FOR EVERY WOMEN
            </Typography>

            <Typography
              mt={{ xs: 2, md: 3 }}
              mb={{ xs: 3, md: 5 }}
              color={"#666666"}
              textAlign={{ xs: "center", sm: "start" }}
              width={{ xs: "100%", md: "370px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#F63E7B",
                fontWeight: "medium",
                textTransform: "capitalize",
              }}
            >
              Get an Appointment
            </Button>
          </Box>

          <Image
            src={bannerImage}
            alt="banner image"
            width={484}
            height={478}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
