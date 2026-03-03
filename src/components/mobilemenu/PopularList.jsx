import React from "react";
import { popularLists } from "../../data/popularLists";

const PopularList = () => {
  return (
    <div className="flex flex-col gap-3 py-[45px] pl-[30px]">
      <p className="text-[#6d6d6d] text-[11.5px] font-[500] pb-2">
        POPULAR LISTS
      </p>
      {popularLists.map((list, i) => (
        <p
          key={i}
          className="text-[#6d6d6d] text-[12px] font-[500] cursor-pointer w-fit border border-[#6d6d6d] py-[3px] px-[13px] rounded-[5px] hover:text-white hover:bg-[#48afff]"
        >
          {list}
        </p>
      ))}
    </div>
  );
};

export default PopularList;
