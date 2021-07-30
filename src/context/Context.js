import React, { useEffect, useState } from "react";
import axios from "axios";

export const SearchValue = React.createContext();

export default function Context({ children }) {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.cheapshark.com/api/1.0/games?title=batman")
      .then(res => setValue(res.data))
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <SearchValue.Provider value={[value]}>{children}</SearchValue.Provider>
    </div>
  );
}
