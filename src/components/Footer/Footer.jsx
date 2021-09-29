import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="row_item">
          <ul>
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
        <div className="footer_rights">&copy;Jovan Smiljanic 2021</div>
      </div>
    </div>
  );
}
