import React, { useEffect, useState } from "react";
import "./storepage.scss";

import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import Store from "../../components/Store/Store";

export default function StorePage() {
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
    <>
      <NavBar />
      <p className="store_headline">See best deals for your favourite store</p>
      <div className="storePage">
        {value.map(store => (
          <Store key={store.storeName} store={store} />
        ))}
      </div>
    </>
  );
}
