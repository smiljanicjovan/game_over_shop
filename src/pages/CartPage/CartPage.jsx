import React, { useContext } from "react";
import "./cartpage.scss";

import NavBar from "../../components/NavBar/NavBar";
import CartContext from "../../context/Cart/CartContext";
import CartItem from "./CartItem";

export default function CartPage() {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, itemPrice) => total + +itemPrice.salePrice,
    0
  );

  return (
    <>
      <NavBar />
      <div className="cartwrap">
        {cartItems.map(item => (
          <CartItem key={item.gameID} item={item} />
        ))}
        <div className="totalprice">Total is: {totalPrice} €</div>
      </div>
    </>
  );
}
