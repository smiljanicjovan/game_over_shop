import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51IG0JaCxMtpUvbdt0lAInHOmLAA1PxXZ23eFwFk8vTHJlo4Iw2Raxfzr5SO25mX0YX0SUII2hLgfAIhkEnPRCqpy00HWabjitx";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Game Over d.o.o"
        billingAddress
        shippingAddress
        description={`Your Total is ${price} €`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishablekey}
        image="https://stripe.com/img/documentation/checkout/marketplace.png"
        currency="EUR"
        bitcoin
        allowRememberMe
      />
    </div>
  );
}
