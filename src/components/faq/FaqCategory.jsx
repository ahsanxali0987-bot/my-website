import React from "react";
import { useState } from "react";
import { CgLoadbar } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import FaqItem from "./FaqItem";

const FaqCategory = ({ category }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="border-b border-[#a3a3a3] pb-3">
        <div
          className="flex items-center cursor-pointer gap-2"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <div className="flex items-center justify-center text-[#707070] w-[35px] h-[35px] rounded-full bg-[#efefef]">
              <CgLoadbar size={20} />
            </div>
          ) : (
            <FaPlus size={20} className="text-[#707070]" />
          )}
          <span className="text-[14px] font-[500] text-[#202020]">
            {category.question}
          </span>
        </div>
      </div>
      {open && (
        <div className="text-[12.6px] text-[#202020] mt-4 animate-fadeIn">
          {category.answer.map((item, index) => (
            <FaqItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FaqCategory;
