import React, { useContext, useState } from "react";
import "./cartpage.scss";

import NavBar from "../../components/NavBar/NavBar";
import CartContext from "../../context/Cart/CartContext";
import CartItem from "./CartItem";
import StripeContainer from "../../components/Stripe/StripeContainer";

export default function CartPage() {
  const { cartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const totalPrice = cartItems.reduce(
    (total, itemPrice) => total + +itemPrice.salePrice,
    0
  );

  return (
    <>
      <NavBar />
      {!showCart ? (
        <>
          <div className="cartwrap">
            <div className="cartwrap_table">
              <p className="cartwrap_table-title">title</p>
              <p>price</p>
              <p>image</p>
              <p>remove</p>
            </div>

            {cartItems.map(item => (
              <CartItem key={item.gameID} item={item} />
            ))}
            <div className="totalprice">Total is: {totalPrice} €</div>
            {cartItems.length === 0 ? null : (
              <button onClick={() => setShowCart(true)}>Pay now</button>
            )}
          </div>
        </>
      ) : (
        <StripeContainer />
      )}
    </>
  );
}
