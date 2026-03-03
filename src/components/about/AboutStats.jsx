import React from "react";
import { aboutContent } from "../../data/aboutData";

const AboutStats = () => {
  return (
    <article className="bg-[#f7fbff] min-h-screen bg-no-repeat bg-cover bg-center">
      <div className="text-center py-16">
        <h1 className="text-[31px] font-[500]">
          Delivering all across Pakistan
        </h1>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-5 lg:gap-10 max-w-[700px] m-auto px-4">
        {aboutContent.stats.map((item, index) => {
          return (
            <div className="flex flex-col items-center gap-4" key={index}>
              <div className="bg-[#48afff] rounded-full w-[100px] xl:w-[130px] h-[100px] xl:h-[130px] flex items-center justify-center">
                <p className="text-white text-[31px] font-[600]">
                  {item.value}
                </p>
              </div>
              <p className="text-[#404040] text-[18px] font-[500] uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
      <div className="">
        <img
          src="https://static.priceoye.pk/images/bg-deliver-capitals.png"
          alt=""
          className="h-[500px] w-full"
        />
      </div>
    </article>
  );
};

export default AboutStats;
