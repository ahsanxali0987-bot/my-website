import React from "react";
import { MobileCategorySectionData } from "../../data/home/MobileCategorySectionData";

const MobileCategorySection = () => {
  return (
    <div className="bg-[url(https://static.priceoye.pk/images/categories/section-mobiles-bg-md.png)] mt-10 px-4 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-[1195px] mx-auto flex justify-between items-center pt-12 px-2">
        <p className="text-white font-semibold font-sans text-xl">
          Latest Mobiles
        </p>
        <button className="bg-[#fafafa] text-[#20494a] text-sm py-[7px] px-6 border border-[#c1bdbd] rounded-sm hover:bg-[#c1bdbd] transition duration-300">
          View All
        </button>
      </div>
      <div className="gap-5 max-w-[1195px] mx-auto py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {MobileCategorySectionData.list.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-lg p-4 flex flex-col justify-between pb-10"
            >
              <div className="flex justify-center mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-sm text-gray-700 mb-2 line-clamp-1">
                {item.title}
              </h3>
              <h2 className="font-semibold text-lg">
                <span className="text-base">Rs</span> {item.price}
              </h2>
              <div className="flex justify-between items-center mt-2">
                <del className="text-gray-500 text-xs">Rs {item.oldPrice}</del>
                <span className="text-green-600 text-xs bg-green-50 px-2 py-1 rounded-md font-medium">
                  {item.discount}% OFF
                </span>
              </div>
              <img
                src="https://static.priceoye.pk/images/badges/fast-delivery.svg"
                alt=""
                width={100}
              />
            </div>
          );
        })}
      </div>
      <p className="text-[#202020] text-[17px] md:text-[20px] font-semibold max-w-[1195px] mx-auto">
        Shop by Price
      </p>
      <div className="max-w-[1195px] mx-auto gap-[13px] my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {MobileCategorySectionData.button.map((item, but) => {
          return (
            <button
              key={but}
              className="bg-[#f90390] text-white text-[11px] md:text-[14px] font-[500] py-3 md:py-4 hover:bg-white hover:text-[#f90390] transition duration-300  rounded-xl"
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <p className="text-[#202020] text-[17px] md:text-[20px] font-semibold max-w-[1195px] mx-auto py-8">
        Shop by Brand
      </p>
      <div className="max-w-[1195px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2">
        {MobileCategorySectionData.brands.map((item, buts) => {
          return (
            <div
              className="my-2 bg-white justify-center max-w-40 max-h-48 rounded-lg"
              key={buts}
            >
              <img
                key={buts}
                src={item.logo}
                alt={item.name}
                className=" object-contain mx-auto p-4 h-24 w-24"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileCategorySection;
