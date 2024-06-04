import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor={"#F63E7B"} pt={"60px"} pb={"135px"}>
      <Container maxWidth="lg">
        <Grid container spacing={3} color={"white"}>
          <Grid item xs={12} sm={6} md={3}>
            <Box display={"flex"} gap={"14px"}>
              <LocationOnIcon />
              <Typography fontWeight={500} variant="body2">
                H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka,
                Bangladesh
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            textAlign={{ xs: "start", md: "center" }}
          >
            <Typography
              variant="body1"
              fontWeight={600}
              fontSize={"20px"}
              mb={2}
              lineHeight={1}
            >
              Company
            </Typography>
            <ul className="space-y-2">
              <li>
                <Typography component={"a"} href="/about" variant="body2">
                  About
                </Typography>
              </li>
              <li>
                <Typography component={"a"} href="/customers" variant="body2">
                  Customers
                </Typography>
              </li>
              <li>
                <Typography component={"a"} href="/team" variant="body2">
                  Our Team
                </Typography>
              </li>
              <li>
                <Typography component={"a"} href="/terms" variant="body2">
                  Terms Conditions
                </Typography>
              </li>
              <li>
                <Typography component={"a"} href="/reviews" variant="body2">
                  Reviews
                </Typography>
              </li>
            </ul>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            textAlign={{ xs: "start", md: "center" }}
          >
            <Typography
              variant="body1"
              fontWeight={600}
              fontSize={"20px"}
              mb={2}
              lineHeight={1}
            >
              Quick Links
            </Typography>
            <ul className="space-y-2">
              <li>
                <Typography component={"a"} href="/rentals" variant="body2">
                  Rentals
                </Typography>
              </li>
              <li>
                <Typography component={"a"} href="/services" variant="body2">
                  Services
                </Typography>
              </li>
              <li>
                <Typography component={"a"} href="/contact" variant="body2">
                  Contact
                </Typography>
              </li>
              <li>
                <Typography component={"a"} href="/blog" variant="body2">
                  Our Blog
                </Typography>
              </li>
              <li>
                <Typography component={"a"} href="/" variant="body2">
                  Home
                </Typography>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="body1"
              fontWeight={600}
              fontSize={"20px"}
              lineHeight={1}
            >
              About us
            </Typography>
            <Typography variant="body2" color={"#D8D8D8"} my={2}>
              Discover beauty redefined at Jerins Parlour. Our expert team
              delivers personalized services, from rejuvenating skincare to
              stunning makeovers. Step in and experience perfection.
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <Facebook />
              <Instagram />
              <LinkedIn />
              <YouTube />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
