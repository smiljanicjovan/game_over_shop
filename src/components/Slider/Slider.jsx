import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        swipeable={true}
        emulateTouch={true}
        interval={5000}
        infiniteLoop={true}
      >
        <div>
          <img src="./assets/slider2.jpg" alt="slider" />
        </div>
        <div>
          <img src="./assets/slider3.jpg" alt="slider" />
        </div>
        <div>
          <img src="./assets/slider1.jpg" alt="slider" />
        </div>
      </Carousel>
    </>
  );
}
