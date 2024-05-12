import CustomButton from "@/components/shared/CustomButton";
import {
  Box,
  Container,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";

const ContactSection = () => {
  return (
    <Box bgcolor={"#FFF8F5"} pt={"100px"} pb={"50px"}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          fontWeight={700}
          fontSize={"43px"}
          color={"#2D2D2D"}
          lineHeight={1}
          textAlign={"center"}
        >
          Let us handle your beauty.
        </Typography>

        {/* Contact Form */}
        <form className="w-full lg:w-3/4 mx-auto">
          <Grid container spacing={3} pt={{ xs: 6, sm: 10 }} pb={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Email" fullWidth sx={{ bgcolor: "white" }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Contact Number"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>
          <Box textAlign={"center"}>
            <CustomButton type="submit">Send Message</CustomButton>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default ContactSection;
