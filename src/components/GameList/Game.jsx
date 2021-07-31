import React, { useContext } from "react";
import CartContext from "../../context/Cart/CartContext";
import "./game.scss";

export default function Game({ value }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="gameitem">
      <div className="gameitem-title">{value.title}</div>
      <div className="gameitem-image">
        {<img src={value.thumb} alt="game" />}
        <div className="gameitem-image-rating">{value.dealRating}</div>
      </div>
      <div className="gameitem-price">
        <p className="gameitem-price-normal">
          Regular Price: <span>{value.normalPrice}€</span>
        </p>
        <p className="gameitem-price-sale">
          Sale Price:
          <span>{value.isOnSale === "1" ? value.salePrice : null}€</span>
        </p>
      </div>
      <div className="gameitem-savings">
        <p className="gameitem-price-save">
          You Will Save:
          <span>{value.normalPrice - value.isOnSale}€</span>
        </p>
      </div>
      <div className="gameitem-id">Steam ID is: {value.steamAppID}</div>
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
