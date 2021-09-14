import React from "react";
import "./homepage.scss";

import GamesList from "../../components/GameList/GamesList";
import NavBar from "../../components/NavBar/NavBar";
import Slider from "../../components/Slider/Slider";
import Features from "../../components/Features/Features";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import StoreFeatures from "../../components/StoreFeatures/StoreFeatures";
import SaleFeature from "../../components/salestorefeature/SaleFeature";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />

      <Slider />

      <SaleFeature />
      <PopularProducts />
      <Features />
      <GamesList />
      <StoreFeatures />
      <Footer />
    </>
  );
}
