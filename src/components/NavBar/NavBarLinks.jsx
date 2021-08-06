import React from "react";
import { Link } from "react-router-dom";

export default function NavBarLinks() {
  return (
    <>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Homea</Link>
          </li>
          <li>
            <Link to="/deals">Best Deals</Link>
          </li>
          <li>
            <Link to="/stores">Stores</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
