import React from "react";
import { FlashSaleSectionData } from "../../data/home/FlashSaleSectionData";

const FlashSaleSection = () => {
  return (
    <div>
      <div className="relative flex justify-center mt-8">
        <img
          className="w-full max-w-[1195px]"
          src="https://static.priceoye.pk/images/sale/sale-home-mb.png"
          alt=""
        />
        <p className="absolute font-semibold text-white sm:text-[35px] lg:text-[40px] top-4">
          New Year Sale
        </p>
      </div>
      <div className="bg-[#09907e] px-4 md:px-8">
        <div className="py-[50px] max-w-[1195px] m-auto">
          <div className="flex justify-end">
            <button className="bg-white text-sm font-semibold py-2 px-5 mb-10 rounded hover:bg-gray-100 transition">
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {FlashSaleSectionData.map((item, index) => (
              <div
                className="bg-white rounded-lg p-4 flex flex-col justify-between pb-6 shadow-sm hover:shadow-lg transition duration-300 group"
                key={index}
              >
                <div className="flex justify-center mb-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-24 h-24 object-contain group-hover:scale-105 transition"
                  />
                </div>
                <h3 className="text-sm text-gray-700 mb-2 line-clamp-1 flex gap-1 capitalize">
                  <img
                    src="https://images.priceoye.pk/badges/priceoye-sale-20260107-94x7e.png"
                    alt=""
                    className="w-[40px] h-[10px] mt-[5px]"
                  />
                  {item.title}
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-semibold text-lg">
                    <span className="text-base">Rs</span>{" "}
                    {Number(item.newprice.replace(/,/g, "")).toLocaleString()}
                  </h2>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleSection;
