import React from "react";
import "./singlegame.scss";

import NavBar from "../NavBar/NavBar";
import { useContext } from "react";
import CartContext from "../../context/Cart/CartContext";

export default function SingleGame({ game }) {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <NavBar />
      <div className="game">
        <div className="game-wrap">
          <div className="game_title">
            <p>{game.external}</p>
          </div>
          <div className="game_image">
            <img src={game.thumb} alt="game" />
          </div>
          <div className="game_price">
            <p>
              Only for: <span> {game.cheapest}€</span>
            </p>
          </div>
          <div className="gameId">
            <p className="game-gameId">Game ID: {game.gameID}</p>
            <p className="game-steamId">Steam ID: {game.steamAppID}</p>
          </div>

          <button className="game_button" onClick={() => addToCart(game)}>
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
}
