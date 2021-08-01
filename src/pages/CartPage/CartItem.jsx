import React, { useContext } from "react";
import CartContext from "../../context/Cart/CartContext";

export default function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);
  console.log(item);
  return (
    <>
      <p>{item.title}</p>
      <p>{item.salePrice}</p>
      <img src={item.thumb} alt="" />
      <button onClick={() => removeItem(item.gameID)}>REMOVE ITEM</button>
    </>
  );
}
