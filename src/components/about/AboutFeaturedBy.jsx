import React from "react";
import { aboutContent } from "../../data/aboutData";

const AboutFeaturedBy = () => {
  return (
    <article className="py-12 px-10 text-center">
      <h1 className="text-[31px] font-[500]">Featured By</h1>
      <div className="flex flex-wrap justify-center items-center gap-12 max-w-[990px] mx-auto my-16">
        {aboutContent.featuredBy.map((brand) => (
          <img
            key={brand}
            src={`https://static.priceoye.pk/images/about_us/${brand}.svg`}
            alt={brand}
            className="h-[55px]"
          />
        ))}
      </div>
    </article>
  );
};

export default AboutFeaturedBy;
