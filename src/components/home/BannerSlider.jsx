import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { bannerImages } from "../../data/home/BannerImageData";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-sm z-10 hidden md:block hover:bg-black"
  >
    <FaArrowLeft size={15} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-sm z-10 hidden md:block hover:bg-black"
  >
    <FaArrowRight size={15} />
  </button>
);

const BannerSlider = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="slider-container w-full group md:relative mt-4">
      <Slider {...settings}>
        {bannerImages.map((img, index) => (
          <div key={index} className="outline-none">
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
