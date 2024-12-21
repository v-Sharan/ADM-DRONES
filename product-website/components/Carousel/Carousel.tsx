// src/components/Carousel.js
import React, { useState } from "react";
import "./Carousel.scss";

const Carousel = ({ items }: { items: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        &#8249;
      </button>
      <div className="carousel-slides">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={item} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
