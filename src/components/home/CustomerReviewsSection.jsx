import React from "react";
import { CustomerReviewsSectionData } from "../../data/home/CustomerReviewsSection";
import { FaStar } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";

const CustomerReviewsSection = () => {
  return (
    <div className="max-w-[1200px] m-auto px-4 sm:px-4 md:px-6 lg:px-8">
      <div className="text-center py-10">
        <p className="text-[#404040] text-[19px] font-semibold">
          Customer Review
        </p>
        <p className="text-[#404040]">
          What our Customers say about Priceoye.pk
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4">
        {CustomerReviewsSectionData.images.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.src} alt="" className="rounded-md" />
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-7 justify-between">
        {CustomerReviewsSectionData.comments.map((item1, index1) => {
          return (
            <div
              className="bg-white p-[18px] border border-[#d6d8da] rounded-md hover:shadow-md transition-shadow duration-300"
              key={index1}
            >
              <div className="flex gap-3">
                <h1 className="text-[#979797] bg-[#f3f4f4] w-[60px] h-[60px] rounded-full text-[25px] text-center pt-2">
                  {item1.h1}
                </h1>
                <div className="">
                  <div className="flex w-[250px] justify-between">
                    <h2 className="text-[#48afff] text-[15px]">{item1.h2}</h2>
                    <h3 className="text-[#1fb789] flex text-[15px]">
                      <SiTicktick className="mt-[4px] mr-1" />
                      {item1.h3}
                    </h3>
                  </div>
                  <h4 className="flex text-[#ffc107]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </h4>
                  <h5 className="text-[#979797] text-[15px]">{item1.h5}</h5>
                </div>
              </div>
              <p className="text-[#a9a9a9] text-[15px]">{item1.p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerReviewsSection;
