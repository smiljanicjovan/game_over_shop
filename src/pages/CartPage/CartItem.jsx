import React, { useContext } from "react";
import "./cartitem.scss";

import CartContext from "../../context/Cart/CartContext";

export default function CartItem({ item }) {
  const { removeItem, decreaseItem, addToCart } = useContext(CartContext);

  return (
    <>
      <div className="cartitem">
        <div className="cartitem-about">
          <p className="cartitem-title">{item.title}</p>
          <img src={item.thumb} alt="game" className="cartitem-img" />
        </div>
        <div className="cartitem-price">
          <p className="cartitem-price_item">
            {(item.quantity * item.salePrice).toFixed(2)} €
          </p>
        </div>

        <div className="quantity cartitem-qty">
          <button onClick={() => decreaseItem(item)}>&#10094;</button>
          <p>{item.quantity}</p>
          <button onClick={() => addToCart(item)}>&#10095;</button>
        </div>
        <div className="cartitem-remove">
          <button
            className="cartitem-remove_btn"
            onClick={() => removeItem(item.gameID)}
          >
            {" "}
            &#10006;
          </button>
        </div>
      </div>
    </>
  );
}
