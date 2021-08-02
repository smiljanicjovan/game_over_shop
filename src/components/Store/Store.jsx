import React from "react";
import { Link } from "react-router-dom";
import "./store.scss";

export default function Store({ store }) {
  return (
    <div className="store">
      <Link to={`/${store.storeID}`}>
        <p>{store.storeName}</p>
        <img
          src={`https://www.cheapshark.com${store.images.logo}`}
          alt="store"
        />
      </Link>
    </div>
  );
}
