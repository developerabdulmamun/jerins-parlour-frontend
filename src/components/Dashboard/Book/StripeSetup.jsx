import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_Stripe_PK);

const StripeSetup = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeSetup;
