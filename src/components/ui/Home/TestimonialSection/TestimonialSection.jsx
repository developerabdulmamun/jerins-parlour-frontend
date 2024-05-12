"use client";

import useAxiosPublic from "@/utils/useAxiosPublic";
import { Box, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Rating from "react-rating";

const TestimonialSection = () => {
  const axiosPublic = useAxiosPublic();

  const { data: testimonials } = useQuery({
    queryKey: "testimonials",
    queryFn: async () => {
      const res = await axiosPublic.get("/testimonials");
      return res.data;
    },
  });

  return (
    <Box mt="75px" mb="100px">
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          color={"#1F1632"}
          fontSize={"34px"}
          fontWeight={700}
          lineHeight={1}
          textAlign={"center"}
        >
          Testimonials
        </Typography>

        {/* Reviews */}
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 3500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {testimonials?.map((testimonial) => (
            <SwiperSlide key={testimonial._id} className="py-14">
              <Box>
                <Box display={"flex"} alignItems={"center"} gap={"18px"}>
                  <Box borderRadius={"50%"}>
                    <Image
                      src={testimonial.image}
                      alt="image"
                      width={64}
                      height={64}
                    />
                  </Box>
                  <Box>
                    <Typography fontSize={"20px"} fontWeight={600}>
                      {testimonial.name}
                    </Typography>
                    <Typography fontWeight={500} lineHeight={1}>
                      {testimonial.service}
                    </Typography>
                  </Box>
                </Box>

                <Typography my={2} color={"#707070"}>
                  {testimonial.comment}
                </Typography>

                <Rating
                  initialRating={testimonial.rating}
                  emptySymbol={<StarHalfIcon className="text-[#FFAC0C]" />}
                  fullSymbol={<StarIcon className="text-[#FFAC0C]" />}
                  readonly
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
