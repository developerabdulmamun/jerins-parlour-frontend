"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import aboutImage from "@/assets/images/about.png";
import useGetAllServices from "@/utils/useGetAllServices";

const AboutSection = () => {
  const services = useGetAllServices();

  return (
    <Box bgcolor={"#FFF8F5"} py={"140px"}>
      <Container maxWidth="lg">
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"center"}
          gap={{ xs: "50px", md: "100px" }}
        >
          <Box width={{ xs: "100%", md: "50%" }}>
            <Image src={aboutImage} alt="about image" />
          </Box>

          <Box width={{ xs: "100%", md: "50%" }}>
            <Typography color={"#2D2D2D"} fontSize={"34px"} fontWeight={"600"}>
              Let us handle your screen{" "}
              <span className="text-[#F63E7B]">Professionally</span>.
            </Typography>

            <Typography
              color={"rgba(0, 0, 0, 0.7)"}
              fontSize={"14px"}
              fontWeight={300}
              mt={4}
              mb={"50px"}
            >
              Discover relaxation and rejuvenation at Jerins Parlour. Our
              skilled artisans offer bespoke beauty treatments tailored to your
              needs, from luxurious facials to soothing massages. Step into our
              serene sanctuary and indulge in a moment of pure bliss.
            </Typography>

            <Box display={"flex"} alignItems={"center"} gap={10}>
              <Box>
                <Typography
                  color={"#F63E7B"}
                  fontWeight={700}
                  fontSize={"42px"}
                >
                  500+
                </Typography>
                <Typography>Happy Customer</Typography>
              </Box>

              <Box>
                <Typography
                  color={"#F63E7B"}
                  fontWeight={700}
                  fontSize={"42px"}
                >
                  {services?.length}+
                </Typography>
                <Typography>Total Service</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
