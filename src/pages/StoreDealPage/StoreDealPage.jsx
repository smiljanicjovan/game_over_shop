import React, { useEffect, useState } from "react";
import "./storedealpage.scss";

import axios from "axios";
import { useParams } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import Game from "../../components/GameList/Game";
import Loader from "react-loader-spinner";

export default function StoreDealPage() {
  const { storeid } = useParams();
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/deals?storeID=${storeid}`)
      .then(res => setValue(res.data))
      .catch(err => {
        console.log(err);
      });
  }, [storeid]);

  return (
    <>
      <NavBar />
      {value.length === 0 ? (
        <div className="loader_deal">
          <Loader type="Circles" color="red" height={200} width={200} />
          <p>sorry</p>
        </div>
      ) : (
        <>
          <h1 className="gamelist-text">Some of best deals for today</h1>
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
