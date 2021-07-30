import React from "react";
import "./singlegame.scss";

import NavBar from "../NavBar/NavBar";

export default function SingleGame({ game }) {
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
            <p>Only for: {game.cheapest}€</p>
          </div>
          <div className="gameId">
            <p className="game-dealId">{game.cheapestDealID}</p>
            <p className="game-gameId">{game.gameID}</p>
            <p className="game-steamId">{game.steamAppID}</p>
          </div>
          <div className="game_button">Add to Cart</div>
        </div>
      </div>
    </>
  );
}
