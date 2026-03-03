import React from "react";
import { aboutContent } from "../../data/aboutData";

const AboutPayments = () => {
  return (
    <article className="py-20">
      <div className="flex flex-wrap justify-between">
        <div className="max-w-[390px] mx-auto flex flex-col mt-16 px-5">
          <h1 className="text-[25px] lg:text-[31px] font-[500] mb-10 text-center md:text-left">
            Offering shoppers <br /> multiple payment <br /> options
          </h1>
          <div className="flex flex-wrap justify-between gap-8 mb-10">
            {aboutContent.payments.map((pay, i) => (
              <div
                key={i}
                className="text-center flex flex-col gap-2 items-center"
              >
                <div className="w-[90px] h-[90px] flex items-center rounded-full border-2 border-black">
                  <img
                    src={pay.img}
                    alt={pay.label}
                    className="h-[36px] mx-auto mb-2"
                  />
                </div>
                <p className="text-[20px] font-[400]">{pay.label}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src="https://static.priceoye.pk/images/about-cards-payments-latest.webp"
          alt="Payment Cards"
          className="max-w-[800px] w-full"
        />
      </div>
    </article>
  );
};

export default AboutPayments;
