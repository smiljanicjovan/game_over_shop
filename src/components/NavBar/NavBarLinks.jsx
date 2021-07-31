import React from "react";
import { Link } from "react-router-dom";

export default function NavBarLinks() {
  return (
    <>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/deals">Deals</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
