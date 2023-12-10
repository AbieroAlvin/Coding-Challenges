import car1 from "../assets/cars/car-1.jpg";
import car2 from "../assets/cars/car-2.jpg";
import car3 from "../assets/cars/car-3.jpg";
import car4 from "../assets/cars/car-4.jpg";
import car5 from "../assets/cars/car-5.jpg";
import car6 from "../assets/cars/car-6.jpg";
import ImageSlider from "./ImageSlider";

const IMAGES = [car1, car2, car3, car4, car5, car6];

const Slider = () => {
  return (
    <div className="flex w-full h-[90vh] items-center bg-gray-200 py-[20px] justify-center">
      <div className="max-w-[800px] w-full aspect-[10/6] my-0 mx-auto">
        <ImageSlider imageUrls={IMAGES} />
      </div>
    </div>
  );
};

export default Slider;
