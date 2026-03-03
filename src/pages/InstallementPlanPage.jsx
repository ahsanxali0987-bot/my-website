import React from "react";
import BankList from "../components/bnpl/BankList";
import StepList from "../components/bnpl/StepList";
import Accordion from "../components/bnpl/Accordion";
import { banks, steps, bnplQuestions } from "../data/bnplData";
import Footer from "../components/common/Footer";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import Procedures from "../components/procedures/Procedures";

const InstallementPlanPage = () => {
  return (
    <div className="bg-white min-h-screen relative">
      <ScrollToTopButton />
      <article className="p-7 max-w-[1110px] m-auto">
        <img
          src="https://static.priceoye.pk/images/bnpl_banner/static-banner-wb-bnpl-v10.jpg"
          alt="BNPL Banner"
        />
        <article className="flex flex-col gap-3">
          <h1 className="text-[20px] font-[500] py-3 text-center">
            Buy Now & Pay Later | Easy Monthly Installments at Priceoye
          </h1>
          <div className="">
            <p className="text-[#202020] text-[12.6px] leading-[18px]">
              Priceoye offers Easy Monthly Installments with an easy
              interest-free payment plan to enable its customers to access and
              purchase the items they want and need while managing their
              finances during the turbulent economy. With multiple payment
              tenures and easy interest-free installments it intends to help
              people spend responsibly without incurring interest or extended
              debt.
            </p>
            <p className="text-[#202020] text-[12.6px] leading-[18px]">
              Easy Monthly Installment plan (EMI) is available for credit card
              holders. EMI plan applies for all products with a value of PKR
              10,000 or above. Please click the links below to reach terms and
              conditions of the specific plan.
            </p>
          </div>
          <BankList banks={banks} />
        </article>
        <article className="w-full max-w-[800px] aspect-video m-auto mt-10">
          <iframe
            className="w-full h-full rounded-xl shadow-md"
            src="https://www.youtube.com/embed/YQCeiwkLvEk"
            title="How to buy on EMI"
            frameBorder="0"
            allowFullScreen
          />
        </article>
        <hr className="bg-[#48afff] h-[2px] my-5" />
        <img
          src="https://static.priceoye.pk/images/bnpl_banner/installment-banner-wb.jpg"
          alt=""
          className=""
        />
        <StepList steps={steps} />
        <Accordion data={bnplQuestions} />
      </article>
      <Procedures />
      <Footer />
    </div>
  );
};

export default InstallementPlanPage;
