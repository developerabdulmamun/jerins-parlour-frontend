"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bannerImage from "@/assets/images/banner-image.png";
import CustomButton from "@/components/shared/CustomButton";
import BannerSkeleton from "./BannerSkeleton";

const Banner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <BannerSkeleton />;
  }

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
              Welcome to Jerins Parlour. Discover indulgent treatments from
              facials to hair styling. Step into our oasis and emerge radiant.
              Your beauty journey starts here.
            </Typography>

            <CustomButton>Get an Appointment</CustomButton>
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
