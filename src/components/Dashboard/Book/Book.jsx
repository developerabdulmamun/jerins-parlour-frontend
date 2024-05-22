"use client";

import CustomButton from "@/components/shared/CustomButton";
import useAuth from "@/utils/useAuth";
import useGetAllServices from "@/utils/useGetAllServices";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import StripeSetup from "./StripeSetup";
import CardInputForm from "./CardInputForm";

const Book = () => {
  const { user } = useAuth();
  const { services } = useGetAllServices();
  const [selectedService, setSelectedService] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handleChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const commonTextFieldStyles = {
    bgcolor: "white",
    borderRadius: "4px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": { border: "none" },
    },
  };

  return (
    <Box width={{ xs: "100%", md: "35%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            defaultValue={user?.displayName}
            fullWidth
            sx={commonTextFieldStyles}
            InputProps={{ notched: false }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant="outlined"
            defaultValue={user?.email}
            fullWidth
            sx={commonTextFieldStyles}
            InputProps={{ notched: false }}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth sx={commonTextFieldStyles}>
            <Select
              value={selectedService}
              onChange={handleChange}
              displayEmpty
              renderValue={(value) => (value ? value : "Select a service")}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300,
                  },
                },
              }}
            >
              <MenuItem value="" disabled>
                Select a service
              </MenuItem>
              {services?.map((service) => (
                <MenuItem key={service._id} value={service.heading}>
                  {service.heading}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} mt={3}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Pay with</FormLabel>
            <RadioGroup
              aria-label="payment method"
              name="paymentMethod"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              row
            >
              <FormControlLabel
                value="creditCard"
                control={<Radio />}
                label="Credit Card"
              />
              <FormControlLabel
                value="bkash"
                control={<Radio />}
                label="Bkash"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        {paymentMethod === "creditCard" && (
          <Grid item xs={12}>
            <StripeSetup>
              <CardInputForm />
            </StripeSetup>
          </Grid>
        )}

        {paymentMethod === "bkash" && (
          <Grid item xs={12}>
            <Typography variant="body1">Bkash payment option</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Book;
