import "@splidejs/react-splide/css/core";
import { ReactNode, useEffect, useRef, useState } from "react";
import {
  Splide,
  SplideTrack,
  SplideSlide,
  Options,
} from "@splidejs/react-splide";
// import { Options } from "@splidejs/splide";

import car1 from "../assets/cars/car-1.jpg";
import car2 from "../assets/cars/car-2.jpg";
import car3 from "../assets/cars/car-3.jpg";
import car4 from "../assets/cars/car-4.jpg";
import car5 from "../assets/cars/car-5.jpg";
import car6 from "../assets/cars/car-6.jpg";

// const IMAGES = [car1, car2, car3, car4, car5, car6];

const Splide1: React.FC = () => {
  const mainRef = useRef<Splide | null>(null);
  const thumbsRef = useRef<Splide | null>(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const generateSlides = () => {
    return [
      { src: car1, alt: "/" },
      { src: car2, alt: "/" },
      { src: car3, alt: "/" },
      { src: car4, alt: "/" },
      { src: car5, alt: "/" },
      { src: car6, alt: "/" },
    ];
  };

  const renderSlides = (): ReactNode[] => {
    return generateSlides().map((slide) => (
      <SplideSlide key={slide.src}>
        <img src={slide.src} alt={slide.alt} />
      </SplideSlide>
    ));
  };

  const mainOptions: Options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    height: "275px",
    width: "400px",
  };

  const thumbsOptions: Options = {
    type: "slide",
    rewind: true,
    gap: "1rem",
    pagination: false,
    fixedWidth: 80,
    fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
  };

  return (
    <div className="flex flex-col w-full h-[90vh] items-center  bg-purple-600 py-[20px]">
      <Splide
        options={mainOptions}
        ref={(el) => (mainRef.current = el)}
        aria-labelledby="thumbnail-slider-example"
      >
        {renderSlides()}
      </Splide>

      <Splide
        options={thumbsOptions}
        ref={(el) => (thumbsRef.current = el)}
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
      >
        {renderSlides()}
      </Splide>
    </div>
  );
};

export default Splide1;
