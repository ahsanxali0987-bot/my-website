import React from "react";
import { policyData } from "../../data/policyData";

const Procedures = () => {
  return (
    <article className="bg-[#eef7ff] py-[45px]">
      <h1 className="max-w-[1050px] m-auto font-[500] text-[20px]">
        Related Policies and Procedures
      </h1>
      <div className="max-w-[1110px] w-full m-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-6">
        {policyData.map((policy, index) => (
          <div
            className="flex flex-col items-center gap-4 py-6 rounded-[15px] mt-3 bg-white"
            key={index}
          >
            <div className="">
              <img
                src={policy.image}
                alt={policy.title}
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="">
              <h2 className="text-[15px] text-[#333354] font-[500] capitalize">
                {policy.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Procedures;
