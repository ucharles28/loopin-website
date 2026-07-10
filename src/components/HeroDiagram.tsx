"use client";

import React from "react";

export default function HeroDiagram() {
  return (
    <div className="relative w-full max-w-[960px] mx-auto py-12 px-4 md:px-12 flex items-center justify-center select-none">
      {/* --- Floating User Tags (Positioned outside the main card, matching Figma coordinates) --- */}
      
      {/* 1. Pardna (Top-Left, floating outside) */}
      <div 
        className="absolute z-20 left-2 md:-left-12 top-[10%] md:top-[18%] flex flex-col items-end animate-bounce"
        style={{ animationDuration: "3.5s" }}
      >
        <div className="bg-[#0FA658] text-white px-4 py-1.5 rounded-lg shadow-lg font-body font-semibold text-sm sm:text-base flex items-center gap-2 border border-white/10">
          <span>Pardna</span>
        </div>
        {/* Pointer arrow */}
        <svg className="w-4 h-4 text-[#0FA658] mt-0.5 mr-5 transform rotate-45 fill-current" viewBox="0 0 20 20">
          <polygon points="0,0 20,0 10,20" />
        </svg>
      </div>

      {/* 2. Ajo (Top-Right, floating outside) */}
      <div 
        className="absolute z-20 right-2 md:-right-12 top-[15%] md:top-[22%] flex flex-col items-start animate-bounce"
        style={{ animationDuration: "4s" }}
      >
        <div className="bg-[#FFCE56] text-primary-green px-4 py-1.5 rounded-lg shadow-lg font-body font-semibold text-sm sm:text-base flex items-center gap-2 border border-white/10">
          <span>Ajo</span>
        </div>
        <svg className="w-4 h-4 text-[#FFCE56] mt-0.5 ml-5 transform -rotate-45 fill-current" viewBox="0 0 20 20">
          <polygon points="0,0 20,0 10,20" />
        </svg>
      </div>

      {/* 3. Esusu (Bottom-Left, floating outside) */}
      <div 
        className="absolute z-20 left-0 md:-left-16 bottom-[22%] md:bottom-[30%] flex flex-col items-end animate-bounce"
        style={{ animationDuration: "4.5s" }}
      >
        <div className="bg-[#8FD3DB] text-primary-green px-4 py-1.5 rounded-lg shadow-lg font-body font-semibold text-sm sm:text-base flex items-center gap-2 border border-white/10">
          <span>Esusu</span>
        </div>
        <svg className="w-4 h-4 text-[#8FD3DB] mt-0.5 mr-6 transform rotate-[30deg] fill-current" viewBox="0 0 20 20">
          <polygon points="0,0 20,0 10,20" />
        </svg>
      </div>

      {/* --- Main Container Card (Figma Frame 302, containing the exported PNG) --- */}
      <div className="w-full max-w-[826px] aspect-[826/500] rounded-3xl overflow-hidden shadow-xl border border-primary-green/5 bg-primary-green">
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
