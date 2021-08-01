import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Store() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.cheapshark.com/api/1.0/stores")
      .then(res => setValue(res.data))
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {value.map(a => (
        <img
          key={a.images.banner}
          src={"https://www.cheapshark.com" + a.images.banner}
          alt=""
        />
      ))}
    </div>
  );
}
