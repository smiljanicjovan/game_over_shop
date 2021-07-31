import React, { useContext } from "react";
import CartContext from "../../context/Cart/CartContext";
import "./cartdropdownitem.scss";

export default function CartDropdownItem({ item }) {
  const { removeItem } = useContext(CartContext);
  return (
    <>
      <div className="cartitems">
        <img src={item.thumb} alt="product img" className="img" />
        <p>{item.external}</p>
        {console.log(removeItem)}
        <button onClick={() => removeItem(item.id)}>remove</button>
      </div>
    </>
  );
}
