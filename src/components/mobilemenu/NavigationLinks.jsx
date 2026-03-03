import React from "react";
import { Link } from "react-router-dom";
import { navigationLinks } from "../../data/navigationLinks";

const NavigationLinks = ({ onClose }) => {
  return (
    <div className="flex flex-col gap-2 pl-[30px] py-10">
      <h2 className="text-[#8599a5] text-[11.5px] font-[500]">
        MAIN NAVIGATION
      </h2>
      {navigationLinks.map((item) => (
        <Link key={item.path} to={item.path} onClick={onClose}>
          <p className="text-[#6d6d6d] text-[13px] cursor-pointer">
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default NavigationLinks;
