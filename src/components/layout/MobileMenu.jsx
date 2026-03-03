import React from "react";
import MenuHeader from "../mobilemenu/MenuHeader";
import CategoryAccordion from "../mobilemenu/CategoryAccordion";
import PopularList from "../mobilemenu/PopularList";
import NavigationLinks from "../mobilemenu/NavigationLinks";

const MobileMenu = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-1000 ${
        open ? "visible" : "invisible"
      }`}
    >
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed h-screen w-full md:w-[358px] bg-white shadow-2xl overflow-y-scroll scroll-smooth inset-y-0 left-0 transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MenuHeader onClose={onClose} />
        <CategoryAccordion />
        <PopularList />
        <NavigationLinks onClose={onClose} />
      </div>
    </div>
  );
};

export default MobileMenu;
