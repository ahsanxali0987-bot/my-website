import React from "react";
import { useState } from "react";
import { IoMdMic } from "react-icons/io";
import { SearchSectionData } from "../../data/home/SearchSectionData";

const NavbarSearch = () => {
  const [filter, setFilter] = useState("");

  const [showResults, setShowResults] = useState(false);

  const filteredItems = SearchSectionData.filter((item) =>
    item.title.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="flex-1 max-w-[500px] px-2 md:px-4 relative">
      <div className="flex items-center bg-white rounded-md md:rounded-lg overflow-hidden h-[38px] md:h-[48px]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 outline-none text-[#86759b]"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setShowResults(e.target.value.length > 0);
          }}
        />
        <button className="px-3 text-[#48afff] border-l border-gray-100">
          <IoMdMic size={22} />
        </button>
      </div>
      {showResults && (
        <div className="absolute left-2 right-2 md:left-4 md:right-4 top-[45px] md:top-[55px] bg-white shadow-2xl rounded-b-lg max-h-[400px] overflow-y-auto border-t border-gray-100">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-3 flex gap-4 hover:bg-gray-50 cursor-pointer border-b last:border-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-sm text-gray-700 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="font-medium text-[#4b4b4b]">
                    Rs {item.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-gray-400 text-sm">
              No products found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavbarSearch;
