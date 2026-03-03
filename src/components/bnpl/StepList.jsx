import React from "react";

const StepList = ({ steps }) => (
  <div className="flex flex-col gap-3 mt-6">
    <h1 className="text-[#202020] font-[500] text-[16px]">
      How to buy on installments from Priceoye.pk?
    </h1>
    <ul className="space-y-3 text-[#202020] leading-[12px]">
      {steps.map((step, index) => (
        <li className="text-[#202020] text-[12.6px]" key={index}>
          {index + 1} - {step}
        </li>
      ))}
    </ul>
    <p className="text-[12px] text-[#47b6ff]">*Terms and conditions apply.</p>
  </div>
);

export default StepList;
