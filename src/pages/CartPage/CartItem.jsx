import React, { useContext } from "react";
import "./cartitem.scss";

import CartContext from "../../context/Cart/CartContext";

export default function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <div className="cartitem">
        <p className="cartitem-title">{item.title}</p>
        <p>{item.salePrice} €</p>
        <img src={item.thumb} alt="" />
        <button onClick={() => removeItem(item.gameID)}> &#10006;</button>
      </div>
    </>
  );
}
