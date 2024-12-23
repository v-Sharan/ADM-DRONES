"use client";
import { Home } from "@/types/SanityResults";
import React from "react";
import { Carousel as Slider } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = ({ imgs }: { imgs: Home[] }) => {
  return (
    <Slider
      autoPlay
      infiniteLoop
      swipeable
      emulateTouch={false}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      dynamicHeight={true}
      className="app__header"
    >
      {imgs.map(({ _id, alt, imgUrl }) => (
        <div key={_id}>
          <img src={`${imgUrl}?h=400`} alt={alt} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
