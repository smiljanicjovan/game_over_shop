import React, { useEffect, useState } from "react";
import "./search.scss";

import axios from "axios";
import SearchValue from "./SearchValue";

export default function Search() {
  const [value, setValue] = useState([]);
  const [search, setSearch] = useState("batman");

  useEffect(() => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/deals?title=${search}`)
      .then(res => setValue(res.data))
      .catch(err => {
        console.log(err);
      });
  }, [search]);

  const filtered = value.filter(val => {
    return search.length === 0 ? "" : val.title.includes(search);
  });
  console.log(search.length);
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
      <div className="search_val">
        {filtered.slice(-7).map((filter, idx) => (
          <SearchValue key={idx} item={filter} />
        ))}
      </div>
    </div>
  );
}
