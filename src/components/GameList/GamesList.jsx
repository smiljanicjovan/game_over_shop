import React, { useEffect, useState } from "react";
import "./gameslist.scss";

import { ReactComponent as Fire } from "../../assets/fire.svg";

import axios from "axios";
import Game from "./Game";
import { Link } from "react-router-dom";

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
      <h1 className="gamelist-text">
        <Fire className="hot_deals" /> Hot Deals <Fire className="hot_deals" />
      </h1>
      <div className="gameslist">
        {value.slice(24, -30).map((game, idx) => (
          <Game key={idx} value={game} />
        ))}
      </div>
      <p>
        <Link className="allDeals" to="/deals">
          See all deals &#10140;
        </Link>
      </p>
    </>
  );
}
