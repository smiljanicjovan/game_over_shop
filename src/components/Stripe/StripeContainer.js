import React from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import PaymentForm from "./PaymentForm";

export default function StripeContainer() {
  const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}
