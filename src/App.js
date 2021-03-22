import React, { useEffect, useState } from "react";
import Games from "./gamesOnSale/gamesOnSale";
import Header from "./header/header";
import "./App.css";

function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    gameOnSale();
  }, []);

  const gameOnSale = async () => {
    const responce = await fetch("https://www.cheapshark.com/api/1.0/deals");
    const data = await responce.json();
    setGames(data);
  };

  return (
    <div className="App">
      <Header />
      <div className="cont">
        {games.map(game => (
          <Games
            key={game.dealID}
            title={game.title}
            price={game.normalPrice}
            salePrice={game.salePrice}
            savings={Math.round(game.savings)}
            rate={game.steamRatingText}
            deal={game.dealRating}
            image={game.thumb}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
