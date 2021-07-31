import React, { useEffect, useState } from "react";
import "./search.scss";

import axios from "axios";
import SearchValue from "./SearchValue";

export default function Search() {
  const [value, setValue] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/games?title=${search}`)
      .then(res => setValue(res.data))
      .catch(err => {
        console.log(err);
      });
  }, [search]);

  const filtered = value.filter(val => {
    return val.external.includes(search);
  });

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for Games"
        onChange={e => {
          setSearch(e.target.value);
        }}
        className="search-bar"
      />
      {filtered.slice(-7).map(filter => (
        <SearchValue key={filter.gameID} filter={filter} />
      ))}
    </div>
  );
}
