import React, { useContext } from "react";
import CartContext from "../../context/Cart/CartContext";

import "./searchvalue.scss";

export default function SearchValue({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="filterValue">
      <img src={item.thumb} alt="game" className="filterValue-image" />
      <p className="filterValue-title">{item.title}</p>
      <p className="filterValue-price">{item.salePrice}€</p>

      <button className="gameitem-button_btn" onClick={() => addToCart(item)}>
        Add to cart
      </button>
    </div>
  );
}
