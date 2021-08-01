import React, { useContext } from "react";
import CartContext from "../../context/Cart/CartContext";
import "./cartdropdownitem.scss";

export default function CartDropdownItem({ item }) {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <div className="cartDropdownItems">
        <img src={item.thumb} alt="product img" className="img" />
        <p className="cartDropdownItems-title">
          {item.title}
          {item.external}
        </p>

        <p>
          {item.salePrice}
          {item.cheapest}€
        </p>

        <button
          onClick={() => removeItem(item.gameID)}
          className="cartDropdownItems-button"
        >
          &#10006;
        </button>
      </div>
    </>
  );
}
