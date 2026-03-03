import React from "react";
import { Link } from "react-router-dom";
import { MobileFooterData } from "../../data/home/MobileFooterData";

const MobileFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 block md:hidden">
      <article className="bg-[#59b6fe] flex items-center justify-between py-[10px] text-white px-6 backdrop-blur-sm bg-opacity-90">
        <p className="text-[14px] font-medium">
          Sign in for the best experience
        </p>
        <Link
          to="/login"
          className="px-4 py-2 text-sm font-[500] rounded-md border-2 border-white bg-white text-[#48afff] hover:bg-transparent hover:text-white transition-all"
        >
          Sign in
        </Link>
      </article>
      <article className="px-7 py-3 bg-white shadow-md">
        <div className="flex justify-between">
          {MobileFooterData.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={index}
                className={`flex flex-col items-center gap-1 transition text-[#979797] hover:text-[#59b6fe]`}
              >
                <item.icon />
                <p className="text-[12px] font-[500]">{item.title}</p>
              </Link>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default MobileFooter;
