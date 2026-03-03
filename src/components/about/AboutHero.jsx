import React from "react";

const AboutHero = () => {
  return (
    <section className="bg-[url('https://static.priceoye.pk/images/about-img-banner.webp')] min-h-screen bg-cover bg-center relative">
      <div className="bg-black/40 w-full min-h-screen flex items-center">
        <div className="px-6 md:ml-[135px] max-w-[440px]">
          <h1 className="text-white text-4xl font-semibold leading-tight">
            Buying Made Simple.{" "}
            <span className="text-[#48afff]">Everyday.</span>
          </h1>
          <p className="text-white text-xl mt-4">
            Compare prices, order and buy electronics online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
