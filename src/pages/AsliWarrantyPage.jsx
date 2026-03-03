import React from "react";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import { AsliWarrantyData } from "../data/AsliWarrantyData";
import AsliWarrantyRules from "../components/asliwarrantychallenge/AsliWarrantyRules";
import AsliWarrantyAccordion from "../components/asliwarrantychallenge/AsliWarrantyAccordion";

const AsliWarrantyPage = () => {
  return (
    <div className="bg-white relative min-h-screen mt-4 pb-10">
      <ScrollToTopButton />
      <div className="max-w-[1100px] m-auto px-4">
        <article className="mb-8">
          <h1 className="text-center text-[20px] text-[#202020] font-semibold pt-7">
            Asli Warranty Challenge
          </h1>
          <p className="text-center text-[14px] p-4">
            If any official brand service center refuses your warranty because
            you bought it from Priceoye, we will pay you double your money back.
          </p>
        </article>

        <article className="mb-10">
          <h2 className="text-[18px] text-[#202020] font-semibold py-1">
            The Smart Buyer’s Truth Check
          </h2>
          <p className="text-[14px] leading-[18px]">
            Standing in a shop right now? Retailers often use “Fear Tactics” to
            justify their higher prices. Here is the truth behind the common
            rumors they use to scare you away from Pakistan’s best mobile deals.
          </p>
          <AsliWarrantyAccordion />
        </article>

        <article className="my-10">
          <h2 className="text-center text-[20px] text-[#202020] font-semibold mb-4">
            How 2x Warranty Challenge works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[580px] m-auto">
            {AsliWarrantyData.challenge.map((item, index) => (
              <div
                className="flex flex-col gap-2 p-3 items-center text-center border border-[#f4f4f4] rounded-lg"
                key={index}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[15px] text-[#202020] font-semibold">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </article>
        <AsliWarrantyRules />
      </div>
    </div>
  );
};

export default AsliWarrantyPage;
