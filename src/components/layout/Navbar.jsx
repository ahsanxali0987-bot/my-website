import React from "react";
import { useState } from "react";
import NavbarLogo from "../navbar/NavbarLogo";
import NavbarButtons from "../navbar/NavbarButtons";
import NavbarSearch from "../navbar/NavbarSearch";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      <div className="bg-[#48afff] h-[55px] md:h-[72px] flex items-center px-4 justify-between">
        <NavbarLogo onMenuClick={() => setOpen(true)} />
        <NavbarSearch />
        <NavbarButtons />
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Navbar;
