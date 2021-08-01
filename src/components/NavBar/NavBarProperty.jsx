import React, { useContext, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import CartDropdown from "../CartDropdown/CartDropdown";
import CartContext from "../../context/Cart/CartContext";

import { ReactComponent as Bag } from "../../assets/cart.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Login } from "../../assets/login.svg";

export default function NavBarProperty() {
  const { cartItems, showHideCart } = useContext(CartContext);
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState();
  const history = useHistory();

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
              <div className="nav-search">
                Search
                <div className="nav-search-icon">
                  <Search className="nav-search-icon-svg" />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="cart" onClick={showHideCart}>
              Cart
              <div className="cart-icon">
                <Bag className="cart-icon-svg" />
                <div className="cart-icon-length">
                  {cartItems.length > 0 ? cartItems.length : null}
                </div>
              </div>
            </div>
          </li>
          {!currentUser ? (
            <li>
              <Link to="/signup">
                <div className="nav-search">
                  Sign Up
                  <div className="nav-search-icon">
                    <Login className="nav-search-icon-svg" />
                  </div>
                </div>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="">
                <div className="nav-search" onClick={handleLogout}>
                  Loggout
                  <div className="nav-search-icon">
                    <Login className="nav-search-icon-svg" />
                  </div>
                </div>
              </Link>
            </li>
          )}
        </ul>
        <CartDropdown />
      </div>
    </>
  );
}
