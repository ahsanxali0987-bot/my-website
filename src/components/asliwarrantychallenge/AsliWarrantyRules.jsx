import React from "react";
import { AsliWarrantyData } from "../../data/AsliWarrantyData";

const AsliWarrantyRules = () => {
  return (
    <>
      <h1 className="text-[20px] text-[#202020] font-semibold mb-3">
        The Rules of the Challenge (Terms & Conditions)
      </h1>
      <ul
        className="space-y-2"
        style={{ listStyleType: "circle", paddingLeft: "20px" }}
      >
        {AsliWarrantyData.rules.map((item, index) => (
          <li key={index} className="text-[#202020] text-[13.5px]">
            <span className="font-semibold block mb-1">{item.rules}</span>
            <p className="text-[12.5px] leading-tight">{item.desc}</p>
            {item.reasons && (
              <ul
                className="mt-3 ml-6 space-y-2"
                style={{ listStyleType: "circle" }}
              >
                {item.reasons.map((reason, i) => (
                  <li key={i} className="text-[12.5px]">
                    {reason}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AsliWarrantyRules;
