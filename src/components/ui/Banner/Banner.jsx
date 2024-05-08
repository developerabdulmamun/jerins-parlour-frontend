import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/images/banner-image.png";
import Navbar from "@/components/shared/Navbar";

const Banner = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF8F5", py: "40px" }}>
      <Container maxWidth="lg">
        <Navbar />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 5,
            mt: "30px",
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
              mt={{ xs: 2, sm: 3 }}
              mb={{ xs: 3, sm: 5 }}
              color={"#666666"}
              textAlign={{ xs: "center", sm: "start" }}
              width={{ xs: "100%", sm: "370px" }}
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
            height={478}
            width={484}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
