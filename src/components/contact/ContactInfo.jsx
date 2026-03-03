import React from "react";
import { contactinfoData } from "../../data/contactInfoData";

const ContactInfo = () => {
  return (
    <div className="mb-20">
      <h1 className="text-[18px] font-semibold my-4">Still need help?</h1>
      <div className="gap-3 flex flex-col">
        {contactinfoData.map((item, index) => (
          <span key={index} className="gap-1 flex flex-col">
            <h1 className="text-[13px] font-semibold">{item.title}</h1>
            <div className="flex gap-3">
              {item.icon}
              <div className="leading-[18px]">
                <p className="text-[13px] font-semibold">{item.main}</p>
                <p className="text-[#757575] text-[13px]">{item.sub}</p>
              </div>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
