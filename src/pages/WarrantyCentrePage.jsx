import React from "react";
import WarrantyAccordion from "../components/warrantycenter/WarrantyAccordion";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import { WarrantyCentreData } from "../data/WarrantyCentreData";

const WarrantyCentrePage = () => {
  return (
    <div className="bg-white relative min-h-screen px-8">
      <ScrollToTopButton />
      <h1 className="text-[22px] font-[500] text-center py-10">
        Warranty Center
      </h1>
      <article>
        <h1 className="text-[18px] font-[500]">Warranty center locations</h1>
        <WarrantyAccordion data={WarrantyCentreData}/>
      </article>
    </div>
  );
};

export default WarrantyCentrePage;
