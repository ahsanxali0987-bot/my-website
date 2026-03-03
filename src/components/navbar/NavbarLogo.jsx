import React from "react";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";

const NavbarLogo = ({ onMenuClick }) => {
  return (
    <div className="flex items-center gap-2 md:gap-4 text-white">
      <RiMenu2Fill size={27} onClick={onMenuClick} className="cursor-pointer" />
      <Link to="/">
        <img
          src="https://static.priceoye.pk/images/logo.svg"
          alt="logo"
          className="w-24 md:w-32"
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;
