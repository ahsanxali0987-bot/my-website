import React from "react";

const FaqItem = ({ item }) => {
  return (
    <div className="mb-4">
      <h3 className="font-[600] text-black mb-1">{item.q}</h3>
      {item.ans && <p className="text-[#707070] leading-relaxed">{item.ans}</p>}
      {item.list && (
        <ul className="list-decimal list-inside mt-2 space-y-1">
          {item.list.map((listItem, i) => (
            <li key={i} className="text-[#606060] text-[12.5px]">
              {listItem}
            </li>
          ))}
        </ul>
      )}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="text-[#4b99e2] hover:underline mt-2 inline-block font-[500]"
        >
          {item.link}
        </a>
      )}
    </div>
  );
};

export default FaqItem;
