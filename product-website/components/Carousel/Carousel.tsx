"use client";
import { Home } from "@/types/SanityResults";
import React from "react";
import { Carousel as Slider } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { urlFor } from "@/client";

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
      dynamicHeight={false}
      className="app__header"
    >
      {imgs.map(({ _id, alt, imgUrl }) => (
        <div key={_id}>
          <img src={urlFor(imgUrl).url()} alt={alt} />
          <h1>{alt}</h1>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
