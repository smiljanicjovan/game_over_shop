import React, { useEffect, useState } from "react";
import axios from "axios";
import Game from "../GameList/Game";
import Loader from "react-loader-spinner";

export default function Deal() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/deals?storeID=1`)
      .then(res => setValue(res.data))
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1 className="gamelist-text">Some of best deals for today</h1>

      {value.length === 0 ? (
        <div className="loader_deal">
          <Loader type="Circles" color="red" height={200} width={200} />
        </div>
      ) : (
        <>
          <div className="gameslist">
            {value.map((game, idx) => (
              <Game key={idx} value={game} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
