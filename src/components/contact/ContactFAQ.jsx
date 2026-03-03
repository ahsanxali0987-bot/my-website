import React, { useState } from "react";
import { contactFaqData } from "../../data/ContactFaqData";
import { CgLoadbar } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <article className="mb-5 max-w-[1050px] m-auto">
      <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-x-6">
        {contactFaqData.map((item, index) => (
          <div key={index}>
            <div className="border-b border-[#a3a3a3] pb-3">
              <div
                className="flex items-center cursor-pointer gap-2"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>
                  {openIndex === index ? (
                    <div className="flex items-center justify-center text-[#707070] w-[35px] h-[35px] rounded-full bg-[#efefef]">
                      <CgLoadbar size={20} />
                    </div>
                  ) : (
                    <div className="font-[500] text-[#707070] w-[35px] h-[35px] flex items-center justify-center">
                      <FaPlus />
                    </div>
                  )}
                </span>
                <span className="text-[14px] font-[500] text-[#202020]">
                  {item.question}
                </span>
              </div>
            </div>
            <p
              className={`text-[14px] my-5 ${
                openIndex === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ContactFAQ;
