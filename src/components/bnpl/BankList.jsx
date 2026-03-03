import React from "react";

const BankList = ({ banks }) => (
  <ul className="space-y-2 text-[#48b7ff] text-[12px]">
    {banks.map((bank, index) => (
      <li key={index} className="cursor-pointer hover:underline">
        {index + 1} - {bank}
      </li>
    ))}
  </ul>
);

export default BankList;
