import React from "react";
import { Link } from "react-router-dom";
import "./searchvalue.scss";

export default function SearchValue({ filter }) {
  return (
    <div className="filterValue">
      <Link to={`${filter.steamAppID}`}>
        <img src={filter.thumb} alt="game" className="filterValue-image" />
        <p className="filterValue-title">{filter.external}</p>
        <p className="filterValue-price">{filter.cheapest}€</p>
      </Link>
    </div>
  );
}
