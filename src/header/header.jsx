import React from "react";
import "./header.css";
import logo from "../assets/logo.png";

import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Input } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <Input
        placeholder="Search for games"
        color="secondary"
        className="input"
        size="large"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
      <div className="menu">menu</div>
    </div>
  );
};

export default Header;
