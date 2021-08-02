import React from "react";
import "./homepage.scss";

import GamesList from "../../components/GameList/GamesList";
import NavBar from "../../components/NavBar/NavBar";
import Slider from "../../components/Slider/Slider";

// import Store from "../../components/Store/Store";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="homepagetext">
        Welcome to <span>Game Over!</span>
      </div>
      <Slider />
      <GamesList />

      {/* <Store /> */}
    </>
  );
}
