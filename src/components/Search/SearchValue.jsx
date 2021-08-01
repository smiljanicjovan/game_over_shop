import React from "react";
import { Link } from "react-router-dom";
import "./searchvalue.scss";

export default function SearchValue({ item }) {
  return (
    <div className="filterValue">
      <Link to={`${item.steamAppID}`}>
        <img src={item.thumb} alt="game" className="filterValue-image" />
        <p className="filterValue-title">{item.external}</p>
        <p className="filterValue-price">{item.cheapest}€</p>
      </Link>
    </div>
  );
}
