"use client";

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
import React, { useEffect, useState } from "react";
import StripeSetup from "./StripeSetup";
import CardInputForm from "./CardInputForm";
import useAxiosPublic from "@/utils/useAxiosPublic";
import { useSearchParams } from "next/navigation";

const Book = () => {
  const { user } = useAuth();
  const { services } = useGetAllServices();
  const axiosPublic = useAxiosPublic();
  const searchParams = useSearchParams();

  const [selectedService, setSelectedService] = useState("");
  const [selectedServicePrice, setSelectedServicePrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  useEffect(() => {
    const serviceQueryParams = searchParams.get("service");
    if (serviceQueryParams) {
      setSelectedService(serviceQueryParams);
    }
  }, [searchParams]);

  useEffect(() => {
    const service = services?.find(
      (service) => service.heading === selectedService
    );

    if (service) {
      setSelectedServicePrice(service.price);
    } else {
      setSelectedServicePrice(0);
    }
  }, [selectedService, services]);

  const handleChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayment = async () => {
    const res = await axiosPublic.post("/create-payment-intent", {
      amount: selectedServicePrice,
    });

    const { clientSecret } = res.data;

    return clientSecret;
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
                value="paypal"
                control={<Radio />}
                label="PayPal"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        {paymentMethod === "creditCard" && (
          <Grid item xs={12}>
            <StripeSetup>
              <CardInputForm
                selectedService={selectedService}
                selectedServicePrice={selectedServicePrice}
                handlePayment={handlePayment}
              />
            </StripeSetup>
          </Grid>
        )}

        {paymentMethod === "paypal" && (
          <Grid item xs={12}>
            <Typography variant="body1">
              Paypal payment option coming soon
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Book;
