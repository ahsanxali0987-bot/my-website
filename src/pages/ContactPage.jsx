import React from "react";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactInfo from "../components/contact/ContactInfo";
import ContactLocations from "../components/contact/ContactLocations";
import Footer from "../components/common/Footer";
import ScrollToTopButton from "../components/common/ScrollToTopButton";

const ContactPage = () => {
  return (
    <article className="bg-white min-h-screen">
      <ScrollToTopButton />
      <div className="max-w-[1050px] m-auto">
        <article>
          <h1 className="text-center text-2xl font-semibold pt-5">
            Got any Questions? We'd love to hear.
          </h1>
          <p className="text-center text-[17px] my-4">
            Whether you're curious about our service, your order status, or
            returns – we're ready to answer any and all questions
          </p>
        </article>
        <ContactFAQ />
        <div className="flex justify-between gap-10 mt-10 flex-col md:flex-row">
          <ContactInfo />
          <ContactLocations />
        </div>
        <span className="leading-[40px]">
          <h1 className="text-[18px] font-semibold">Updates</h1>
          <p className="text-[12px]">
            To stay up to date on what's new, please subscribe to our social
            media channels <span className="text-[#48afff]">Instagram</span>,{" "}
            <span className="text-[#48afff]">Youtube</span> and{" "}
            <span className="text-[#48afff]">Facebook</span>.
          </p>
        </span>
      </div>
      <Footer />
    </article>
  );
};

export default ContactPage;
