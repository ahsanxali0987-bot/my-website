import React from "react";
import { ShopCategoriesSectionData } from "../../data/home/ShopCategoriesSectionData";

const ShopCategoriesSection = () => {
  return (
    <div>
      <div className="max-w-[1160px] m-auto">
        <p className="text-lg font-semibold py-[30px]">Shop More Categories</p>
      </div>
      <div className="bg-[#f9dcff]  px-4">
        <div className="flex flex-wrap justify-center gap-4 items-center max-w-[600px] m-auto">
          {ShopCategoriesSectionData.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-[#8804a6] items-center text-center p-[2px] rounded-lg w-[115px] h-[138px] my-[30px] "
              >
                <img
                  src={item.src}
                  alt=""
                  className="bg-white h-[90px] w-[115px] rounded-t-lg"
                />
                <p className="text-white text-[13.5px] font-[500] w-[80px] m-auto">
                  {item.p}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopCategoriesSection;
