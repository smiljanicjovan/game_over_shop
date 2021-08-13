import React from "react";
import "./navbar.scss";

import Links from "./Links";
import Logo from "./Logo";
import Property from "./Property";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Links />
      <Logo />
      <Property />
    </nav>
  );
};

export default NavBar;
