import React from "react";
import { aboutContent } from "../../data/aboutData";

const AboutValues = () => {
  return (
    <article className="py-20 px-10 text-center bg-[#f7fbff]">
      <h1 className="text-3xl font-[500] mb-12">Our Values</h1>
      <div className="flex flex-wrap justify-between max-w-[780px] mx-auto">
        {aboutContent.values.map((val, i) => (
          <div key={i} className="flex flex-col items-center w-[300px]">
            <img src={val.img} alt={val.label} className="w-20 md:w-24" />
            <div className="flex flex-col gap-2">
              <p className="text-[15px] text-[#202020] font-[500]">
                {val.label}
              </p>
              <p className="text-[#202020] text-[13px] hidden md:block">
                {val.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default AboutValues;
