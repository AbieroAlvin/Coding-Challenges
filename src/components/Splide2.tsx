import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../App.css";

import car1 from "../assets/cars/car-1.jpg";
import car2 from "../assets/cars/car-2.jpg";
import car3 from "../assets/cars/car-3.jpg";
import car4 from "../assets/cars/car-4.jpg";
import car5 from "../assets/cars/car-5.jpg";
import car6 from "../assets/cars/car-6.jpg";

const Splide2 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (thumbsSwiper) {
      thumbsSwiper.prevEl = ".swiper-button-prev";
      thumbsSwiper.nextEl = ".swiper-button-next";
      thumbsSwiper.update();
    }
  }, [thumbsSwiper]);

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

  return (
    <div className="flex flex-col w-full h-[90vh] items-center  bg-purple-400 py-[20px]">
      <div className="thumbnail-slider">
        <Swiper
          modules={[Navigation, Thumbs]}
          ref={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          className="main-slider"
        >
          {generateSlides().map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={`slide-${index}`}
                className="main-slide"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesVisibility
          watchSlidesProgress
          className="thumbnail-slider"
        >
          {generateSlides().map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={`thumbnail-${index}`}
                className="thumbnail"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>
    </div>
  );
};

export default Splide2;
