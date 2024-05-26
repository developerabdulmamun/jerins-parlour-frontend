import { Box, Container, TextField } from "@mui/material";
import React from "react";
import CustomButton from "../shared/CustomButton";

const ContactForm = () => {
  return (
    <Box mt={5}>
      <Container maxWidth="md">
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={5}
          />

          <Box textAlign={"center"}>
            <CustomButton sx={{ mt: 3, width: "200px" }}>Submit</CustomButton>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
