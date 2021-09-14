import React from "react";
import "./storefeature.scss";
import { Link } from "react-router-dom";
import store from "../../assets/store.jpg";
import sale from "../../assets/sale.jpg";

export default function SaleFeature() {
  return (
    <div className="salefeature">
      <div className="salefeature_wrap">
        <img src={sale} alt="sale" className="salefeature_wrap-img" />

        <Link to="/deals" className="sales_btn">
          See best sales
        </Link>
      </div>
      <div className="salefeature_wrap">
        <img src={store} alt="store" className="salefeature_wrap-img" />

        <Link to="/stores" className="sales_btn">
          See best stores
        </Link>
      </div>
    </div>
  );
}
