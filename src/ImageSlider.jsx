import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ slides }) => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const handleAfterChange = (index) => {
    setIndex(index);
  };

  let settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: handleAfterChange,
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-3/5">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <div className="border-[#051f0d] border-14 rounded-4xl bg-[#051f0d] shadow-xl/30">
                  <img src={slide.img} className="rounded-3xl" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col justify-center items-center w-1/3 border-[#3ba35a] border-2 rounded-2xl py-6 bg-green-500/20 text-white">
          <h1 className="text-2xl font-bold">{slides[index]?.title}</h1>
          <p className="text-md">{slides[index]?.description}</p>
          <p className="text-md bg-green-500 py-1 px-5 mt-3 rounded-full">
            {slides[index]?.type}
          </p>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
