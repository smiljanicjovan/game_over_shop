import React from "react";
import "./gamesOnSale.css";
import "./modal.css";

import Modal from "@material-ui/core/Modal";

import { Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Games = ({ title, price, salePrice, savings, deal, image }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="image" onClick={handleOpen}>
        <img src={image} alt="Game img" className="img" />
        <p className="savings">{savings}%</p>
        <p className="deal">{deal}</p>
        <div className="div">
          <p className="salePrice">{salePrice}€</p>
          <p className="price">{price}€</p>
        </div>
      </div>
      <div className="btn">
        <h1 className="name">{title}</h1>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<AddShoppingCartIcon />}
        >
          Add to card
        </Button>
      </div>
      <div className="modal">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className="container-modal">
            <div className="image-modal" onClick={handleOpen}>
              <img src={image} alt="Game img" className="img-modal" />
              <p className="savings-modal">{savings}%</p>
            </div>
            <div className="btn-modal">
              <h1 className="name-modal">{title}</h1>
              <div className="prrice">
                <p className="salePrice-modal">Buy only for:{salePrice}€</p>
                <p className="price-modal">{price}€</p>
              </div>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<AddShoppingCartIcon />}
              >
                Add to card
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Games;
