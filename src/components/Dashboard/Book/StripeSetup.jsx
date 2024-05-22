import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const stripePromise = loadStripe("");

const StripeSetup = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeSetup;
