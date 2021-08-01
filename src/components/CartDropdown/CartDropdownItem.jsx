import React, { useContext } from "react";
import CartContext from "../../context/Cart/CartContext";
import "./cartdropdownitem.scss";

export default function CartDropdownItem({ item }) {
  const { removeItem } = useContext(CartContext);

  // const totalPrice = item.reduce(
  //   (total, itemPrice) => total + itemPrice.salePrice,
  //   0
  // );
  // console.log(totalPrice);
  return (
    <>
      <div className="cartDropdownItems">
        <img src={item.thumb} alt="product img" className="img" />
        <p className="cartDropdownItems-title">{item.title}</p>
        <p>{item.salePrice} €</p>

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
