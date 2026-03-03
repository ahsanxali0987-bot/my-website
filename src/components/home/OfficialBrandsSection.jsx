import React from "react";
import { OfficialBrandsSectionData } from "../../data/home/OfficialBrandsSectionData";

const Hex = ({ logo, name }) => {
  return (
    <div
      className="relative h-[80px] w-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center
      cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-[#0b5ed7]
        [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]"
      />
      <div
        className="absolute inset-[3px] bg-[#deeaf3]
        [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]"
      />
      <div
        className="absolute inset-[6px] bg-[#0b5ed7]
        flex items-center justify-center
        [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]"
      >
        <img
          src={logo}
          alt={name}
          className="max-h-12 object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const OfficialBrandsSection = () => {
  return (
    <div className="py-6">
      <div className="max-w-[1240px] mx-auto px-4 py-6">
        <p className="text-xl text-[#482020] font-semibold">
          Online Official Retailer
        </p>
      </div>
      <div className="bg-[#deeaf3] py-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
          <div className="flex flex-wrap justify-center gap-6">
            {OfficialBrandsSectionData.slice(0, 6).map((b, i) => (
              <Hex key={i} {...b} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {OfficialBrandsSectionData.slice(6, 12).map((b, i) => (
              <Hex key={i} {...b} />
            ))}
          </div>
          <div className="flex justify-center gap-6">
            {OfficialBrandsSectionData.slice(12).map((b, i) => (
              <Hex key={i} {...b} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialBrandsSection;
