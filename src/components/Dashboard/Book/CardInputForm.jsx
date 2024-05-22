import CustomButton from "@/components/shared/CustomButton";
import { Box } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const cardElementOptions = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const CardInputForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <CardElement options={cardElementOptions} />
      <CustomButton type="submit" disabled={!stripe}>
        Pay
      </CustomButton>
    </Box>
  );
};

export default CardInputForm;
