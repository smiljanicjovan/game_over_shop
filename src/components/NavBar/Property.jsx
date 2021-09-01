import React, { useContext, useState } from "react";
import "./property.scss";

import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import CartContext from "../../context/Cart/CartContext";

import { ReactComponent as Bag } from "../../assets/cart.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Login } from "../../assets/login.svg";

export default function NavBarProperty() {
  const { cartItems } = useContext(CartContext);
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState();
  const history = useHistory();
  const cartItemCount = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("failed");
    }
  }
  if (error) {
    console.error(error);
  }
  return (
    <>
      <div className="navbar-property">
        <ul>
          <li>
            <Link to="/search">
              <div className="cart-icon">
                <Search className="cart-icon-svg" />
              </div>
            </Link>
          </li>

          <li>
            <Link to="/checkout" className="cart">
              <div className="cart-icon">
                <Bag className="cart-icon-svg" />
                <div className="cart-icon-length">
                  {cartItems.length > 0 ? cartItemCount : null}
                </div>
              </div>
            </Link>
          </li>

          <li>
            {!currentUser ? (
              <Link to="/signup">
                <div className="cart-icon">
                  <Login className="cart-icon-svg" />
                </div>
              </Link>
            ) : (
              <Link to="" onClick={handleLogout}>
                <div className="cart-icon">
                  <Login className="cart-icon-svg" />
                </div>
                <span className="loggout_text">Logout</span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
