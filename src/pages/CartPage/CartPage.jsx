import React, { useContext } from "react";
import NavBar from "../../components/NavBar/NavBar";
import CartContext from "../../context/Cart/CartContext";
import CartItem from "./CartItem";

export default function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <NavBar />
      {cartItems.map(item => (
        <CartItem key={item.gameID} item={item} />
      ))}
    </div>
  );
}
