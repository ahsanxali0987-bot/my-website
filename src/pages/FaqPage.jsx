import React from "react";
import { faqData } from "../data/faqData";
import FaqCategory from "../components/faq/FaqCategory";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import Procedures from "../components/procedures/Procedures";
import Footer from "../components/common/Footer";

const FaqPage = () => {
  return (
    <div className="bg-white relative min-h-screen">
      <ScrollToTopButton />
      <article className="max-w-[1050px] m-auto">
        <h1 className="text-center font-[500] text-[22px] py-[20px]">
          Frequently Asked Questions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 space-y-3 mb-10">
          {faqData.map((category, index) => (
            <FaqCategory key={index} category={category} />
          ))}
        </div>
      </article>
      <Procedures />
      <Footer />
    </div>
  );
};

export default FaqPage;
