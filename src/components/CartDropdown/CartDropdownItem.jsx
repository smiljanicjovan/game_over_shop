import React, { useContext } from "react";
import CartContext from "../../context/Cart/CartContext";
import "./cartdropdownitem.scss";

export default function CartDropdownItem({
  item: { thumb, title, quantity, salePrice, gameID },
}) {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <div className="cartDropdownItems">
        <img src={thumb} alt="product img" className="img" />
        <p className="cartDropdownItems-title">{title}</p>

        <p>
          {quantity} x {(salePrice * quantity).toFixed(2)}€
        </p>

        <button
          onClick={() => removeItem(gameID)}
          className="cartDropdownItems-button"
        >
          &#10006;
        </button>
      </div>
    </>
  );
}
