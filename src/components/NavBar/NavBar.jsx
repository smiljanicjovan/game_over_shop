import React from "react";
import "./navbar.scss";

import NavBarLinks from "./NavBarLinks";
import NavBarLogo from "./NavBarLogo";
import NavBarProperty from "./NavBarProperty";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavBarLinks />
      <NavBarLogo />
      <NavBarProperty />
    </nav>
  );
};

export default NavBar;
