import React from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { TbFileSpreadsheet } from "react-icons/tb";

const MenuHeader = ({ onClose }) => {
  return (
    <div className="bg-[#48afff] px-8 pt-[45px] pb-[48px] relative">
      <div className="flex justify-end absolute right-4 top-4">
        <button
          className="rounded-full bg-[#ebebeb] text-[#5b5b5b] p-1 transition-colors"
          onClick={onClose}
        >
          <CgClose size={13} />
        </button>
      </div>
      <div className="bg-[#48afff] py-2">
        <Link to="/">
          <img
            className="md:w-[100px] w-[125px]"
            src="https://static.priceoye.pk/images/logo.svg"
            alt="logo"
          />
        </Link>
      </div>
      <Link to="/Login">
        <button className="bg-white text-[#48afff] w-[110px] h-[40px] text-[13px] font-semibold rounded border border-white mt-4">
          Log in
        </button>
      </Link>
      <div className="mt-[20px] text-white flex flex-col gap-3">
        <button className="flex text-[14px] items-center gap-2 hover:translate-x-2 transition-transform duration-300">
          <CiLocationOn className="text-[24px]" /> Track My Order
        </button>
        <button className="flex text-[14px] items-center gap-2 hover:translate-x-2 transition-transform duration-300">
          <TbFileSpreadsheet className="text-[24px]" /> Launch a Complaint
        </button>
      </div>
    </div>
  );
};

export default MenuHeader;
