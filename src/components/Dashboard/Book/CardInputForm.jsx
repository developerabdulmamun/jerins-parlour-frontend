import CustomButton from "@/components/shared/CustomButton";
import { Box, Typography } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

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

  const [error, serError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      serError(error.message);
    } else {
      console.log("PaymentMethod created: ", paymentMethod);
    }
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <CardElement options={cardElementOptions} />

      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
        mt={2}
      >
        <Typography variant="body1" color="textPrimary">
          Your service charge will be <span className="font-bold">$1000</span>
        </Typography>
        <CustomButton type="submit" disabled={!stripe} sx={{ width: "170px" }}>
          Pay
        </CustomButton>
      </Box>

      <Typography variant="body2" color={"error"}>
        {error}
      </Typography>
    </Box>
  );
};

export default CardInputForm;
