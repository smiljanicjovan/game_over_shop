import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Test() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.cheapshark.com/api/1.0/games?id=612")
      .then(res => setValue(res.data))
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <div> {console.log(value)}</div>;
}
