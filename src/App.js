import React, { useEffect, useState } from "react";
import Games from "./games";
import "./App.css";

function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    gameData();
  }, []);

  const gameData = async () => {
    const responce = await fetch("https://www.cheapshark.com/api/1.0/deals");
    const data = await responce.json();
    setGames(data);
    // console.log(data);
  };

  return (
    <div className="App">
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
