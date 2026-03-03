import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scroll}
      className="fixed bottom-10 right-8 z-50 p-3 bg-[#6b6b6b] text-white shadow-2xl hover:scale-110 transition"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
