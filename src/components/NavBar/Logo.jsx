import React from "react";
import "./logo.scss";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function NavBarLogo() {
  return (
    <>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </>
  );
}
