"use client";

import React, { useEffect, useRef } from "react";

export default function GoRoundBanner() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const bg = bgRef.current;
      if (!bg) return;

      const parent = bg.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // The banner section is visible when its top is below the viewport bottom
      // and its bottom is above the viewport top.
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const totalDistance = viewportHeight + rect.height;
        const progress = (viewportHeight - rect.top) / totalDistance;

        // Scale factor: starts at 1.0 when entering viewport, reaches up to 1.25 when leaving
        const scale = 1 + progress * 0.25;

        // Apply scale transform directly to the DOM node for maximum performance
        bg.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on load to establish correct initial scale
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-[429px] overflow-hidden flex items-center justify-center">
      {/* Background image overlayed with dark green */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url('/images/ground-loopin.png')`,
          transform: "scale(1)",
          transition: "transform 0.1s ease-out" // Add slight smoothing
        }}
      />
      <div className="absolute inset-0 bg-primary-green/65 z-10" />

      <div className="relative z-20 max-w-[1240px] mx-auto px-6 sm:px-12 w-full text-center flex flex-col items-center justify-center">
        <h2 className="font-display text-5xl sm:text-7xl md:text-[92px] leading-tight text-white tracking-tight max-w-[800px] mx-auto">
          Go round with Loopin.
        </h2>
      </div>
    </section>
  );
}
