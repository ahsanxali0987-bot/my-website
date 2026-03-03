import React from "react";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import Footer from "../components/common/Footer";
import { privayPolicyData } from "../data/privacyPolicyData";
import Procedures from "../components/procedures/Procedures";
import PrivacyPolicyCategory from "../components/policy/PrivacyPolicyCategory";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white relative min-h-screen">
      <ScrollToTopButton />
      <article>
        <h1 className="font-semibold text-xl text-center py-4">
          Privacy Policy
        </h1>
        <p className="text-[12.5px] text-[#202020] max-w-[1030px] m-auto my-5">
          In our user privacy we have compiled all essential information about
          our handling of your personal data and your corresponding rights for
          you. Priceoye is committed to protecting the privacy of our users.
          This statement applies with respect to the information that we collect
          from our website as well as our Mobile Application. Amendments to this
          statement will be posted at this URL and will be effective when
          posted. We care about your privacy and are committed to protecting
          your personal data. This privacy statement will inform you how we
          handle your personal data, your privacy rights and how the law
          protects you. Your continued use of this site and mobile application
          following the posting of any amendment, modification or change shall
          constitute your acceptance thereof. Please read this privacy statement
          carefully before using our Services. This User Privacy Policy is
          effective from 1st January, 2021
        </p>
      </article>
      <article className="mb-5 max-w-[1050px] m-auto">
        <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {privayPolicyData.map((item, index) => (
            <PrivacyPolicyCategory key={index} category={item} />
          ))}
        </div>
      </article>
      <Procedures />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
