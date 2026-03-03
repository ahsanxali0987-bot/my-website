import React from "react";
import { contactLocationData } from "../../data/contactLocationData";

const ContactLocations = () => {
  return (
    <div className="w-[500px]">
      <h1 className="text-[18px] font-semibold my-4">Our Locations</h1>
      <div className="flex gap-4">
        {contactLocationData.map((item, index) => (
          <div
            key={index}
            className="w-[170px] h-[140px] rounded-lg shadow-lg shadow-[#48afff] p-3"
          >
            <img src={item.img} alt="" className="w-[60px] h-[60px]" />
            <p className="text-[14px] mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactLocations;
