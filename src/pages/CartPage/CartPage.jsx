import React, { useContext } from "react";
import "./cartpage.scss";

import NavBar from "../../components/NavBar/NavBar";
import CartContext from "../../context/Cart/CartContext";
import CartItem from "./CartItem";

import StripeButton from "../../components/Stripe/StripeButton";

export default function CartPage() {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce(
    (total, itemPrice) => total + +itemPrice.salePrice * itemPrice.quantity,
    0
  );

  return (
    <>
      <NavBar />
      <>
        <div className="cartwrap">
          {cartItems.map(item => (
            <CartItem key={item.gameID} item={item} />
          ))}
          <div className="paying">
            <div className="paying_totalprice">
              Total is: <span>{totalPrice.toFixed(2)} €</span>
            </div>
            <div className="paying_button">
              <StripeButton price={totalPrice} />
            </div>
          </div>
        </div>
      </>
      <div className="test-warning">
        **Cart number for testing**
        <br />
        Card Number :4242 4242 4242 4242
        <br /> Exp: 01/23 CVV: 123
      </div>
    </>
  );
}
