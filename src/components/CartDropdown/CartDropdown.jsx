import React, { useContext } from "react";
import "./cartdropdown.scss";

import CartContext from "../../context/Cart/CartContext";
import { Link } from "react-router-dom";
import CartDropdownItem from "./CartDropdownItem";

export default function CartDropdown() {
  const { showCart, cartItems, showHideCart, closeDropdown } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, itemPrice) => total + +itemPrice.salePrice,
    0
  );

  return (
    <>
      {!showCart ? null : (
        <div className="dropdown">
          <div className="dropdown-item">
            <p className="dropdown-item_close" onClick={showHideCart}>
              &times;
            </p>

            {cartItems.length === 0 ? (
              <p className="dropdown-item_text">Your cart is empty.</p>
            ) : (
              <ul id="droop">
                {cartItems.map((item, index) => (
                  <CartDropdownItem key={index} item={item} />
                ))}
              </ul>
            )}
          </div>
          {cartItems.length === 0 ? null : (
            <>
              <p className="totalprice">
                Total price is:
                <span>{totalPrice} €</span>
              </p>
              <Link to="/cart" className="dropdown-link">
                <p className="dropdown-button" onClick={closeDropdown}>
                  Go to checkout
                </p>
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
}
