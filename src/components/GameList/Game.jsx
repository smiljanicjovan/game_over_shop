import React, { useContext } from "react";
import CartContext from "../../context/Cart/CartContext";
import "./game.scss";

export default function Game({ value }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="gameitem">
      <div className="gameitem-image">
        <img src={value.thumb} alt="game" />
        <div className="gameitem-image-rating">{value.dealRating}</div>
        <div className="gameitem-id">Steam ID: {value.steamAppID}</div>
      </div>
      <div className="gameitem-title">{value.title}</div>
      <div className="gameitem-desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>

      <div className="gameitem-price">
        <span className="gameitem-price_normal">{value.normalPrice}€</span>
        <span className="gameitem-price_sale">
          {value.isOnSale === "1" ? value.salePrice : null}€
        </span>
      </div>

      <div className="gameitem-button">
        <button
          className="gameitem-button_btn"
          onClick={() => addToCart(value)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

// gameID: "221551"
