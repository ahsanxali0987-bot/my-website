import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { categories } from "../../data/home/SimpleSliderData";

const Arrow = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className={`absolute ${
      direction === "left" ? "left-3" : "right-3"
    } top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-sm z-10 hidden md:block`}
  >
    {direction === "left" ? (
      <FaArrowLeft size={14} />
    ) : (
      <FaArrowRight size={14} />
    )}
  </button>
);

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 8,
    slidesToScroll: 1,
    draggable: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 6 } },
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 3, arrows: false } },
    ],
  };

  return (
    <div className="bg-white h-[85px] px-4">
      <div className="max-w-[1210px] mx-auto relative">
        <Slider {...settings}>
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="cursor-pointer group hover:bg-[#f1f3f6] hover:border-b-2 hover:border-[#48afff]"
            >
              <div className="flex flex-col items-center py-2 text-center">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-[45px] h-[45px] object-contain"
                />
                <p className="text-[12px] text-[#404040] mt-1">{cat.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
