import React from "react";
import { Link } from "react-router-dom";

const NavbarButtons = () => {
  return (
    <div className="hidden md:flex items-center gap-2">
      <Link to="/login">
        <button className="px-6 py-2 text-sm font-medium rounded-md border border-white bg-white text-[#48afff] hover:bg-[#48afff] hover:text-white transition">
          Log in
        </button>
      </Link>
      <Link to="/register">
        <button className="px-6 py-2 text-sm font-medium rounded-md border border-white text-white hover:bg-white hover:text-[#48afff] transition">
          Register
        </button>
      </Link>
    </div>
  );
};

export default NavbarButtons;
