import CustomButton from "@/components/shared/CustomButton";
import useAuth from "@/utils/useAuth";
import { Box, Typography } from "@mui/material";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
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

const CardInputForm = ({ selectedServicePrice, handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("PaymentMethod created: ", paymentMethod);

      const clientSecret = await handlePayment();

      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardNumberElement,
            billing_details: {
              email: user?.email || "anonymous",
              name: user?.displayName || "anonymous",
            },
          },
        });

      if (stripeError) {
        setError(stripeError.message);
      } else {
        console.log("PaymentIntent: ", paymentIntent);
        if (paymentIntent.status === "succeeded") {
          setTransactionId(paymentIntent.id);
        }
      }
    }
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <Box sx={{ borderRadius: "4px", p: 2, mb: "10px", bgcolor: "white" }}>
        <CardNumberElement options={cardElementOptions} />
      </Box>

      <Box sx={{ display: "flex", gap: "10px", mb: "10px" }}>
        <Box sx={{ flex: 1, borderRadius: "4px", p: 2, bgcolor: "white" }}>
          <CardExpiryElement options={cardElementOptions} />
        </Box>
        <Box sx={{ flex: 1, borderRadius: "4px", p: 2, bgcolor: "white" }}>
          <CardCvcElement options={cardElementOptions} />
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
        mt={2}
      >
        <Typography variant="body1" color="textPrimary">
          Your service charge will be{" "}
          <span className="font-bold">${selectedServicePrice}</span>
        </Typography>
        <CustomButton type="submit" disabled={!stripe} sx={{ width: "170px" }}>
          Pay
        </CustomButton>
      </Box>

      {error && (
        <Typography variant="body2" color={"error"} mt={2}>
          {error}
        </Typography>
      )}

      {transactionId && (
        <Typography variant="body2" mt={2}>
          Your transaction id:{" "}
          <span className="text-green-600 font-semibold">{transactionId}</span>
        </Typography>
      )}
    </Box>
  );
};

export default CardInputForm;
