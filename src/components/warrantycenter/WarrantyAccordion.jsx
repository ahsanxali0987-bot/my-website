import React from "react";

const WarrantyAccordion = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 py-5">
      {data.map((center, index) => {
        return (
          <div className="flex flex-col gap-2" key={index}>
            <div className="py-2" key={index}>
              <h2 className="text-[14px] text-[#48afff] font-[400]">
                {center.title}
              </h2>
              <p className="text-[12px] text-gray-600">{center.desc}</p>
            </div>
            <div className="bg-[white] border-[1px] border-[#f88b2a] hover:bg-[#f88b2a] w-fit rounded-md">
              <button className=" text-[#f88b2a]  text-[15px] px-2 hover:text-[white] ">
                View Online Center
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WarrantyAccordion;
