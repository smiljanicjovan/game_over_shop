import React, { useEffect, useState } from "react";
import "./storefeatures.scss";

import axios from "axios";
import Store from "../Store/Store";
import { Link } from "react-router-dom";

export default function StoreFeatures() {
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
    <div className="store_features">
      <div className="stores_home">
        {value.slice(0, -26).map(store => (
          <Store key={store.storeName} store={store} />
        ))}
      </div>
      <Link className="stores_link" to="/stores">
        See all stores &#10140;
      </Link>
    </div>
  );
}
