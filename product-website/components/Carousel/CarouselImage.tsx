"use client";
import React from "react";
import { Carousel as Slider } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = ({ imgs }: { imgs: string[] }) => {
  return (
    <Slider
      autoPlay
      infiniteLoop
      swipeable
      emulateTouch={false}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      dynamicHeight={false}
    >
      {imgs.map((img, idex) => (
        <div key={idex}>
          <img src={img} alt={`img-${idex}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
