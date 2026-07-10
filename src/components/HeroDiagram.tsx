"use client";

import React from "react";

export default function HeroDiagram() {
  const tags = [
    {
      id: "pardna",
      desktopLabel: "Pardna",
      mobileLabel: "Pardna",
      bgColor: "#0FA658",
      arrowSrc: "/images/arrow-green.svg",
      xlLeft: "-103px",
      xlTop: "-192px",
      mdLeft: "-40px",
      mdTop: "-120px",
      mobileLeftClass: "left-[0%]",
      mobileTopClass: "top-[-13%]",
      animationDuration: "3.5s"
    },
    {
      id: "ajo",
      desktopLabel: "Ajo",
      mobileLabel: "Ajo",
      bgColor: "#FFCE56",
      arrowSrc: "/images/arrow-yellow.svg",
      xlLeft: "845px",
      xlTop: "-15px",
      mdLeft: "730px",
      mdTop: "-15px",
      mobileLeftClass: "left-[83%]",
      mobileTopClass: "top-[-35%]",
      animationDuration: "4.0s"
    },
    {
      id: "esusu-susu",
      desktopLabel: "Esusu",
      mobileLabel: "Susu",
      bgColor: "#8FD3DB",
      arrowSrc: "/images/arrow-teal.svg",
      xlLeft: "-219px",
      xlTop: "225px",
      mdLeft: "-90px",
      mdTop: "225px",
      mobileLeftClass: "left-[76%]",
      mobileTopClass: "top-[13%]",
      animationDuration: "4.5s"
    }
  ];

  return (
    <div className="relative w-full max-w-[826px] mx-auto select-none">
      {/* --- Floating User Tags (Positioned relative to the main card, matching Figma coordinates) --- */}
      {tags.map((tag) => (
        <div 
          key={tag.id}
          className={`absolute z-20 animate-bounce ${tag.mobileLeftClass} ${tag.mobileTopClass} md:left-[var(--md-left)] md:top-[var(--md-top)] xl:left-[var(--xl-left)] xl:top-[var(--xl-top)] w-[66px] h-[48px] md:w-[159px] md:h-[64px]`}
          style={{ 
            animationDuration: tag.animationDuration,
            "--md-left": tag.mdLeft,
            "--md-top": tag.mdTop,
            "--xl-left": tag.xlLeft,
            "--xl-top": tag.xlTop
          } as React.CSSProperties}
        >
          {/* Exact Figma-exported pointer Arrow */}
          <img 
            src={tag.arrowSrc} 
            alt="" 
            className="absolute left-[-3px] top-[-3px] w-[18px] h-[20px] md:left-[-8px] md:top-[-7px] md:w-[40px] md:h-[45px] select-none pointer-events-none" 
            draggable="false"
          />
          {/* Label Card */}
          <div 
            className="absolute left-[10px] top-[26px] w-[56px] h-[22px] md:left-[24px] md:top-[33px] md:w-[135px] md:h-[31px] rounded-full text-white flex items-center justify-center font-body text-[9px] md:text-[20px] font-normal tracking-[0.05px] md:tracking-[0.1px] shadow-[0_3.7px_7.3px_rgba(0,0,0,0.12)]"
            style={{ backgroundColor: tag.bgColor }}
          >
            <span className="block md:hidden">{tag.mobileLabel}</span>
            <span className="hidden md:block">{tag.desktopLabel}</span>
          </div>
        </div>
      ))}

      {/* --- Main Container Card (Figma Frame 302, containing the exported PNG) --- */}
      <div className="w-full aspect-[826/500] rounded-3xl overflow-hidden shadow-xl border border-primary-green/5 bg-primary-green">
        <img 
          src="/images/hero-diagram.png" 
          alt="Community savings circle showing hands putting coins into a jar" 
          className="w-full h-full object-cover"
          draggable="false"
        />
      </div>
    </div>
  );
}
