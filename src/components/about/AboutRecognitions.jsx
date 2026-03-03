import React from "react";
import { aboutContent } from "../../data/aboutData";

const AboutRecognitions = () => {
  return (
    <section className="py-20 bg-[#f7fbff] text-center">
      <h2 className="text-3xl font-medium mb-12">Recognitions</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-[920px] mx-auto">
        {aboutContent.recognitions.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <img src={item.img} alt={item.text} className="w-36" />
            <p className="text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutRecognitions;
