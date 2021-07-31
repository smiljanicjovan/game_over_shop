import React from "react";
import "./homepage.scss";

import GamesList from "../../components/GameList/GamesList";
import NavBar from "../../components/NavBar/NavBar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="homepagetext">Welcome to our little shop!</div>
      <GamesList />
    </>
  );
}
