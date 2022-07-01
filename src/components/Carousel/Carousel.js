import React, { useState } from "react";
import CarouselArrows from "./CarouselArrows";
import CarouselContent from "./CarouselContent";
import CarouselDots from "./CarouselDots";

import "./Carousel.css";

const Carousel = ({ selectedProp }) => {
  const [current, setCurrent] = useState(0);
  const [numOfImgs, setNumOfImgs] = useState(selectedProp.photos.length);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <CarouselDots
        selectedProp={selectedProp}
        current={current}
        handleClick={(current) => setCurrent(current)}
      />
      <CarouselContent current={current} selectedProp={selectedProp} />
      <CarouselArrows
        prevSlide={() =>
          setCurrent(current === 0 ? numOfImgs - 1 : current - 1)
        }
        nextSlide={() =>
          setCurrent(current === numOfImgs - 1 ? 0 : current + 1)
        }
      />
    </div>
  );
};

export default Carousel;
