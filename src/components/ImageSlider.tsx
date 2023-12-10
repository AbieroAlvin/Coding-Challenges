import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

type ImageSliderProps = {
  imageUrls: string[];
};

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((index) => (index === 0 ? imageUrls.length - 1 : index - 1));
  };
  const showNextImage = () => {
    setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
  };

  return (
    <section className="w-full h-full relative">
      <div className="w-full h-full flex overflow-hidden ">
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            alt="/"
            className="object-cover w-full h-full block flex-shrink-0 flex-grow-0 transition-[translate] duration-500 ease-in-out"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="block absolute top-0 bottom-0 p-4 cursor-pointer left-0  hover:bg-black/10 transition-[background] duration-300 ease-in-out"
      >
        <ArrowBigLeft className="stroke-white fill-black w-8 h-8 hover:animate-bounce" />
      </button>
      <button
        onClick={showNextImage}
        className="block absolute top-0 bottom-0 p-4 cursor-pointer right-0  hover:bg-black/10 transition-colors duration-300 ease-in-out "
      >
        <ArrowBigRight className="stroke-white fill-black w-8 h-8 hover:animate-ping" />
      </button>
      <div className="absolute bottom-[0.5rem] left-[50%] translate-x-[-50%] translate-y-[-50%] flex gap-[0.25rem]">
        {imageUrls.map((_, index) => (
          <button
            onClick={() => setImageIndex(index)}
            key={index}
            className="block cursor-pointer w-4 h-4 transition-[scale_200ms_ease-in-out]  hover:scale-[1.2]"
          >
            {index === imageIndex ? (
              <CircleDot className="stroke-white fill-black w-full h-full" />
            ) : (
              <Circle className="stroke-white fill-black w-full h-full" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
