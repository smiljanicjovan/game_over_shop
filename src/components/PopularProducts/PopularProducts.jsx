import React, { useEffect, useState } from "react";
import "./popular.scss";

import { ReactComponent as Best } from "../../assets/best.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import Game from "../GameList/Game";

export default function PopularProducts() {
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
      <h1 className="popular-text">
        <Best className="popular_svg" />
        Popular Products
        <Best className="popular_svg" />
      </h1>
      <div className="gameslist">
        {value.slice(2, -52).map((game, idx) => (
          <Game key={idx} value={game} />
        ))}
      </div>
      <p>
        <Link className="allDeals" to="/deals">
          See all products &#10140;
        </Link>
      </p>
    </>
  );
}
