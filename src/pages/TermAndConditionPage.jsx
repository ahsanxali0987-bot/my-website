import React from "react";
import TermsAccordion from "../components/termsAndCondition/TermsAccordion";
import { TermsAndConditionData } from "../data/TermsAndConditionData";
import Procedures from "../components/procedures/Procedures";
import Footer from "../components/common/Footer";
import ScrollToTopButton from "../components/common/ScrollToTopButton";

const TermAndConditionPage = () => {
  return (
    <div className="bg-white relative min-h-screen">
      <ScrollToTopButton />
      <article className="max-w-[1050px] m-auto">
        <h1 className="text-center font-[500] text-[22px] py-[20px]">
          Terms and Conditions
        </h1>
        <p className="text-[12.6px] text-center text-gray-600">
          By using Priceoye.pk ('Site) or Priceoye App ('App') collectively
          referred to as the 'Platform', you agree to these terms and
          conditions, privacy policy, returns and refund policy of the Platform.
          Please read the Terms and Conditions carefully before using
          Priceoye.pk.
        </p>
      </article>
      <TermsAccordion data={TermsAndConditionData} />
      <Procedures />
      <Footer />
    </div>
  );
};

export default TermAndConditionPage;
