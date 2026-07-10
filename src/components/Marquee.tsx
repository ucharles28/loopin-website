"use client";

import React from "react";

export default function Marquee() {
  const items = [
    { name: "Ajo", flag: "/images/flag-ng.png" },
    { name: "Susu", flag: "/images/flag-gh.png" },
    { name: "Stokvel", flag: "/images/flag-st.png" },
    { name: "Hagbad", flag: "/images/flag-so.png" },
    { name: "Committee", flag: "/images/flag-ps.png" },
    { name: "Chit", flag: "/images/flag-in.png" },
    { name: "Gameya", flag: "/images/flag-eg.png" },
    { name: "Pardna", flag: "/images/flag-jm.png" },
  ];

  // Repeat the items several times to enable seamless infinite scrolling
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#06371E] overflow-hidden py-4 relative flex select-none">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {marqueeItems.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 text-white"
          >
            {/* Round flag style */}
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-[#06371E]">
              <img src={item.flag} alt={`${item.name} flag`} className="w-full h-full object-cover" />
            </div>
            {/* Name */}
            <span className="font-body font-medium text-lg sm:text-xl text-white">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
