import React from "react";
import { Link } from "react-router-dom";
import { FooterData } from "../../data/home/FooterData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#48afff] mt-1">
      <div className="max-w-[1195px] mx-auto px-3">
        <img
          className="w-32 md:w-40 lg:w-42 h-auto block md:hidden pt-9"
          src="https://static.priceoye.pk/images/logo.svg"
          alt="logo"
        />
      </div>
      <div className="py-8 flex flex-wrap justify-between max-w-[1195px] mx-auto px-4">
        <div>
          <img
            className="sm:w-32 md:w-40 lg:w-42 h-auto hidden md:block pb-6"
            src="https://static.priceoye.pk/images/logo.svg"
            alt="logo"
          />
          <ul className="flex flex-col gap-2">
            {FooterData.companyLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-white text-sm hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-white text-lg pb-6">Customer Service</h1>
          <ul className="flex flex-col gap-2">
            {FooterData.serviceLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-white text-sm hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-[18px]">Secure Payment Methods</h1>
          <img
            src="https://static.priceoye.pk/images/payment_method.svg"
            alt="Payment Methods"
            className="max-h-[35px] object-contain"
          />
        </div>
      </div>
      <div className="bg-[#3eabff] py-4 text-white px-4">
        <div className="max-w-[1195px] mx-auto flex justify-between items-center flex-wrap gap-4">
          <p className="text-[14px]">Copyright © {currentYear} Priceoye.pk</p>
          <ul className="flex gap-3 items-center text-[#3eabff]">
            {FooterData.socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full h-8 w-8 flex items-center justify-center"
                >
                  <social.icon size={18} />
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
