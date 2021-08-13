import React, { useState } from "react";
import "./links.scss";

import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

export default function NavBarLinks() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <div className="navbar-links">
        <div className="hamburger_btn" onClick={() => setShowLinks(!showLinks)}>
          <Hamburger />
        </div>

        <ul id={showLinks ? "hidden" : ""}>
          <li>
            <Link to="/">Home</Link>
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
