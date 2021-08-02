import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleItem from "./SingleGame";

export default function SingleGamePage() {
  const [value, setValue] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/games?steamAppID=${id}`)
      .then(res => setValue(res.data))
      .catch(err => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      {value.map(game => (
        <SingleItem key={game.gameID} game={game} />
      ))}
    </div>
  );
}
