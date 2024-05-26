"use client";

import React from "react";
import PageHeader from "../shared/PageHeader";
import { Box, Container, Grid, Typography } from "@mui/material";
import useAxiosPublic from "@/utils/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const About = () => {
  const axiosPublic = useAxiosPublic();

  const { data: team } = useQuery({
    queryKey: "team",
    queryFn: async () => {
      const res = await axiosPublic.get("/team");
      return res.data;
    },
  });

  return (
    <>
      <PageHeader title={"About Us"} />
      <Box>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            gutterBottom
            mt={5}
            textAlign="center"
            fontWeight="500"
          >
            Our Story
          </Typography>
          <Typography variant="body1" paragraph>
            At Jerins Parlour, our journey began with a simple yet profound
            belief: beauty is not just skin deep; it is a reflection of ones
            inner confidence and well-being. Founded by Jerin, a passionate
            beauty enthusiast with over a decade of experience, our salon has
            grown from a small, cozy space to a renowned beauty destination.
            What started as a one-person operation has blossomed into a team of
            skilled professionals dedicated to delivering personalized beauty
            experiences. Each service at our parlour is crafted with care,
            precision, and a touch of artistry, ensuring that every client
            leaves feeling not just beautiful, but empowered. Our commitment to
            using the finest products and staying updated with the latest trends
            sets us apart. At Jerins Parlour, we celebrate every womans unique
            beauty and strive to enhance it, one visit at a time.
          </Typography>

          <Typography
            variant="h4"
            gutterBottom
            mt={5}
            textAlign="center"
            fontWeight="500"
          >
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            At Jerins Parlour, our mission is to celebrate and enhance the
            natural beauty of every woman who walks through our doors. We are
            dedicated to providing exceptional beauty services that not only
            transform appearances but also uplift spirits and boost confidence.
            By blending innovation with time-honored techniques, we strive to
            offer a sanctuary where our clients can escape the daily hustle and
            embrace their true selves. Our team of expert stylists and
            aestheticians are committed to continuous learning and excellence,
            ensuring that we deliver the highest standards of service and care.
            We believe in the power of beauty to inspire, empower, and create
            lasting impressions. At Jerins Parlour, your beauty journey is our
            passion, and your satisfaction is our ultimate goal.
          </Typography>

          <Typography
            variant="h4"
            gutterBottom
            mt={5}
            textAlign="center"
            fontWeight="500"
          >
            Meet Our Team
          </Typography>

          {team && team.length > 0 ? (
            <Grid container spacing={4} mb={5}>
              {team.map((member) => (
                <Grid item xs={12} sm={6} md={4} key={member._id}>
                  <Box
                    textAlign="center"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={100}
                      height={100}
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                    <Typography variant="h6" mt={2}>
                      {member.name}
                    </Typography>
                    <Typography variant="body1">{member.role}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="body1">No team members found.</Typography>
          )}
        </Container>
      </Box>
    </>
  );
};

export default About;
