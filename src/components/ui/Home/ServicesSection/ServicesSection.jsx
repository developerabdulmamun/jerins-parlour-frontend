"use client";

import useAxiosPublic from "@/utils/useAxiosPublic";
import { Container, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import ServiceCard from "./ServiceCard";
import CustomButton from "@/components/shared/CustomButton";
import Link from "next/link";

const ServicesSection = () => {
  const axiosPublic = useAxiosPublic();

  const { data: services } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get("/services");
      return res.data;
    },
  });

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ mt: { xs: 6, md: 12 }, mb: { xs: 3, md: 6 } }}
      >
        {/* Heading */}
        <Typography
          textAlign={"center"}
          color={"#111430"}
          fontWeight={"bold"}
          fontSize={"34px"}
        >
          Our Awesome <span className="text-[#F63E7B]">Services</span>
        </Typography>

        {/* Services */}
        <Grid container spacing={2} mt={"72px"} mb={"42px"}>
          {services &&
            services
              .slice(0, 3)
              .map((service) => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
              ))}
        </Grid>

        {/* Button */}
        <Link href={"/services"}>
          <CustomButton sx={{ display: "block", mx: "auto" }}>
            Explore more
          </CustomButton>
        </Link>
      </Container>
    </>
  );
};

export default ServicesSection;
