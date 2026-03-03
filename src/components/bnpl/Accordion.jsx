import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { CgLoadbar } from "react-icons/cg";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <article className="max-w-[1000px] m-auto mb-20 px-5 md:px-0">
      <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-x-6">
        {data.map((item, index) => (
          <div key={index}>
            <div className="border-b border-[#a3a3a3] pb-3">
              <div
                className="flex items-center cursor-pointer gap-2"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div>
                  {activeIndex === index ? (
                    <div className="flex items-center justify-center text-[#707070] w-[35px] h-[35px] rounded-full bg-[#efefef]">
                      {" "}
                      <CgLoadbar size={20} />{" "}
                    </div>
                  ) : (
                    <div className="text-[#707070] font-[500]">
                      {" "}
                      <FaPlus size={20} />{" "}
                    </div>
                  )}
                </div>
                <span className={`text-[14px] font-[500]`}>{item.q}</span>
              </div>
            </div>
            {activeIndex === index && (
              <div className="text-[12.6px] text-[#202020] mt-4 animate-fadeIn">
                {item.ans}
              </div>
            )}
            {activeIndex === index && item.subans && (
              <div className="mt-2 ml-4 space-y-1 animate-fadeIn">
                {item.subans.map((subitem, subindex) => (
                  <div key={subindex} className="text-[12px] text-[#202020]">
                    {index + 1} - {subitem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};

export default Accordion;
