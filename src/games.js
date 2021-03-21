import React from "react";
import "./games.css";
import { Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Games = ({ title, price, salePrice, savings, deal, image }) => {
  return (
    <div className="container">
      <div className="image">
        <img src={image} alt="Game img" className="img" />
        <p className="savings">{savings}%</p>
      </div>
      <div className="info">
        <div className="header">
          <h1 className="name">{title}</h1>
          <p className="deal">{deal}</p>
        </div>
        <div className="priceDiv">
          <p className="salePrice">{salePrice}€</p>
          <p className="price">{price}€</p>
        </div>
        <div className="btn">
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<AddShoppingCartIcon />}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Games;
