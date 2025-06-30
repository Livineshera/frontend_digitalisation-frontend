"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const agences = [
  "/agence1.jpg",
  "/agence2.jpg",
  "/agence3.jpg",
  "/agence4.jpg",
  "/agence5.jpg",
  "/agence6.jpg",
];

const AgenceCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: containerRef.current.offsetWidth / 3,
          behavior: "smooth",
        });

        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-8 bg-white">
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div
        ref={containerRef}
        className="flex overflow-x-auto space-x-4 px-4 hide-scrollbar"
      >
        {agences.map((img, index) => (
          <div key={index} className="min-w-[33.33%] relative h-48 flex-shrink-0">
            <Image
              src={img}
              alt={`Agence ${index + 1}`}
              fill
              className="rounded-xl object-cover"
              priority={index < 3}
              loading={index >= 3 ? "lazy" : "eager"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgenceCarousel;
