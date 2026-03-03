import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";

const PrivacyPolicyCategory = ({ category }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div>
      <div className="border-b border-[#a3a3a3] pb-3">
        <div
          className="flex items-center cursor-pointer gap-2"
          onClick={() => toggleQuestion(category)}
        >
          <span>
            {activeQuestion === category ? (
              <div className="flex items-center justify-center text-[#707070] w-[35px] h-[35px] rounded-full bg-[#efefef]">
                <CgLoadbar size={20} />
              </div>
            ) : (
              <div className="font-[500] text-[#707070]">
                <FaPlus />
              </div>
            )}
          </span>
          <span className="text-[14px] font-[500] text-[#202020]">
            {category.q}
          </span>
        </div>
      </div>
      {activeQuestion === category && (
        <div className="text-[12.6px] text-[#202020] my-4 space-y-3">
          {category.ans && <p>{category.ans}</p>}
          {category.head && (
            <h3 className="font-semibold text-black">{category.head}</h3>
          )}
          {category.answer &&
            category.answer.map((answerItem, i) => (
              <div key={i} className="space-y-2">
                {answerItem.p && <p>{answerItem.p}</p>}
                {answerItem.head && (
                  <p className="font-medium">{answerItem.head}</p>
                )}
                {answerItem.P && <p>{answerItem.P}</p>}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicyCategory;
