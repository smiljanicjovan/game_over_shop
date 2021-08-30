import React from "react";
import "./features.scss";

import { ReactComponent as Shipping } from "../../assets/shipping.svg";
import { ReactComponent as Return } from "../../assets/return.svg";
import { ReactComponent as Payment } from "../../assets/payment.svg";
import { ReactComponent as Support } from "../../assets/support.svg";

export default function Features() {
  return (
    <div className="features">
      <div className="features_item">
        <Support className="features_item-svg" />
        <div className="features_item-text">
          <p className="features_item-text-head">CUSTOMER SUPPORT</p>
          <p className="features_item-text-sub">Need Assistence?</p>
          <p className="features_item-text-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            vestibulum magna, et dapib.
          </p>
        </div>
      </div>

      <div className="features_item">
        <Payment className="features_item-svg" />
        <div className="features_item-text">
          <p className="features_item-text-head">SECURED PAYMENT</p>
          <p className="features_item-text-sub">Safe & Fast</p>
          <p className="features_item-text-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <div className="features_item">
        <Return className="features_item-svg" />
        <div className="features_item-text">
          <p className="features_item-text-head">FREE RETURNS</p>
          <p className="features_item-text-sub">Easy & Free</p>
          <p className="features_item-text-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            vestibulum magna, et dapib.
          </p>
        </div>
      </div>

      <div className="features_item">
        <Shipping className="features_item-svg" />

        <div className="features_item-text">
          <p className="features_item-text-head">FREE SHIPPING</p>
          <p className="features_item-text-sub">Orders Over $99</p>
          <p className="features_item-text-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            vestibulum magna, et dapib.
          </p>
        </div>
      </div>
    </div>
  );
}
