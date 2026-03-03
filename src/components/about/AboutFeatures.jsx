import React from "react";
import { aboutContent } from "../../data/aboutData";

const AboutFeatures = () => {
  return (
    <section className="py-20 max-w-[1060px] mx-auto">
      <h2 className="text-3xl font-medium text-center mb-10">
        Making online shopping Reliable and Simpler
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {aboutContent.features.map((item) => (
          <div key={item.id} className="h-[310px] flex justify-center">
            {item.type === "text" ? (
              <div className="bg-[#f6fbff] p-5 flex flex-col justify-center w-full">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            ) : (
              <img src={item.src} alt="" className="w-full object-contain" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutFeatures;
