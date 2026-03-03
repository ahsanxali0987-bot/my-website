import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { categories } from "../../data/categories";

const CategoryAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const display = (index) => {
    setOpenIndex(open === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-[5px] my-7">
      <h1 className="text-[#798e9c] font-[500] pl-[31px] mb-2 text-[13px]">
        CATEGORIES
      </h1>
      {categories.map((item, indexs) => (
        <div
          className={`w-[285px] mx-auto cursor-pointer ${
            openIndex === indexs ? "bg-[#f8f9fa] rounded-xl" : ""
          }`}
          key={indexs}
        >
          <div
            className="flex justify-between items-center rounded-lg py-1 px-4"
            onClick={() => display(indexs)}
          >
            <button className="text-[#777777] flex gap-2 mb-1 text-[13px]">
              <span className="text-black outline-none">
                <item.icon size={20} />
              </span>
              {item.label}
            </button>
            <IoIosArrowDown
              size={17}
              className={`transition-transform duration-300 text-[#202020] ${
                openIndex === indexs ? "rotate-180" : ""
              }`}
            />
          </div>
          {openIndex === indexs && (
            <div>
              <hr className="text-[#cccccc] py-1" />
              <div className="flex flex-col py-1 px-[21px]">
                {item.items &&
                  item.items.map((item1, indexs1) => (
                    <p
                      key={indexs1}
                      className="text-[13px] text-[#404040] py-1"
                    >
                      {item1}
                    </p>
                  ))}
                {item.subButtons &&
                  item.subButtons.map((sub, subIdx) => (
                    <div key={subIdx} className="flex items-center gap-2 py-1">
                      <sub.icon className="text-black" size={18} />
                      <p className="text-[13px] text-[#404040]">{sub.label}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryAccordion;
