import React, { useEffect, useState } from "react";
import "./gameslist.scss";

import axios from "axios";
import Game from "./Game";

export default function GamesList() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/deals?storeID=15`)
      .then(res => setValue(res.data))
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 className="gamelist-text">Some of best deals for today</h1>
      <div className="gameslist">
        {value.slice(-8).map((game, idx) => (
          <Game key={idx} value={game} />
        ))}
      </div>
    </>
  );
}
