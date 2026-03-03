import { aboutContent } from "../../data/aboutData";
import React from "react";

const AboutCategories = () => {
  return (
    <section className="bg-[#eef7ff] py-20">
      <h2 className="text-center text-3xl font-medium mb-16">
        We meet all your buying needs Head On
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1040px] mx-auto">
        {aboutContent.categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white p-10 rounded-3xl shadow-lg text-center"
          >
            <img src={cat.src} alt={cat.title} className="w-20 mx-auto mb-4" />
            <p className="capitalize font-medium">{cat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCategories;
