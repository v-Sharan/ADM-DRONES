"use client";
import React from "react";
import { Home } from "@/types/SanityResults";
import { Carousel as Slider } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { urlFor } from "@/client";

type HomeBg = {
  _id: Home["_id"];
  imgUrl: Home["imgUrl"];
  alt: Home["alt"];
};

const Carousel = ({ imgs }: { imgs: HomeBg[] }) => {
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
