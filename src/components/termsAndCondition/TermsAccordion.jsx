import React, { useState } from 'react'
import { CgLoadbar } from 'react-icons/cg';
import { FaPlus } from 'react-icons/fa';

const TermsAccordion = ({data}) => {
      const [activeQuestion, setActiveQuestion] = useState(0);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <article className="max-w-[1000px] m-auto my-10 px-5 md:px-0">
        <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {data.map((item, index) => (
            <div key={index}>
              <div className="border-b border-[#a3a3a3] pb-3">
                <div
                  className="flex items-center cursor-pointer gap-2"
                  onClick={() => toggleQuestion(index)}
                >
                  <div>
                    {activeQuestion === index ? (
                      <div className="flex items-center justify-center text-[#707070] w-[35px] h-[35px] rounded-full bg-[#efefef]">
                        {" "}
                        <CgLoadbar size={20} />{" "}
                      </div>
                    ) : (
                      <div className="text-[#707070] font-[500]">
                        {" "}
                        <FaPlus size={20} />{" "}
                      </div>
                    )}
                  </div>
                  <span className={`text-[14px] font-[500]`}>{item.q}</span>
                </div>
              </div>
              {activeQuestion === index && (
                <div className="text-[12.6px] text-[#202020] mt-4 animate-fadeIn">
                  {item.ans}
                </div>
              )}
              {activeQuestion === index && item.subans && (
                <div className="mt-2 ml-4 space-y-1 animate-fadeIn">
                  {item.subans.map((subitem, subindex) => (
                    <div key={subindex} className="text-[12px] text-[#202020]">
                      {index + 1} - {subitem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </article>
  )
}

export default TermsAccordion
