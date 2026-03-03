import React, { useState } from "react";
import { AsliWarrantyData } from "../../data/AsliWarrantyData";
import { CgLoadbar } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";

const AsliWarrantyAccordion = () => {
  const [activeQuestion, setActiveQuestion] = useState(true);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-4">
      {AsliWarrantyData.accordion.map((item, index) => (
        <div key={index}>
          {" "}
          <div className="border-b border-[#a3a3a3] py-2 h-fit">
            <div
              className="flex items-start cursor-pointer gap-3"
              onClick={() => toggleQuestion(index)}
            >
              <div className="mt-1 flex-shrink-0">
                {activeQuestion === index ? (
                  <div className="flex items-center justify-center text-[#707070] w-[28px] h-[28px] rounded-full bg-[#efefef]">
                    <CgLoadbar size={18} />
                  </div>
                ) : (
                  <div className="flex items-center justify-center text-[#707070] w-[28px] h-[28px] rounded-full bg-[#efefef]">
                    <FaPlus size={14} />
                  </div>
                )}
              </div>
              <span className="text-[15px] text-[#202020] font-serif leading-tight pt-1">
                {item.question}
              </span>
            </div>{" "}
          </div>
          {activeQuestion === index && (
            <div className="text-[#202020] text-[12.5px] mt-4 animate-fadeIn">
              {item.answer.map((ansitem, ansindex) => (
                <div className="" key={ansindex}></div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AsliWarrantyAccordion;
