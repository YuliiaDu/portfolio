"use client";

import { useState } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

export function ImageSlider({ slides }: ImageSliderProps) {
  const [index, setIndex] = useState(0);
  const active = slides[index];

  return (
    <div className="rounded-2xl bg-dark-surface shadow-[0_32px_80px_rgba(15,12,10,0.12)] overflow-hidden">
      <div className="px-8 py-8 border-b border-dark-border">
        <p className="text-label uppercase tracking-widest text-dark-text mb-3">Visual direction</p>
        <h2 className="font-display font-semibold text-display-md text-canvas">
          Scroll through key screens from the gigmit redesign.
        </h2>
        <p className="mt-3 text-body-sm text-dark-text max-w-3xl">
          One screen appears by default. Drag the row to explore other steps in the registration and PRO trial flow.
        </p>
      </div>

      <div className="relative bg-[#0b0907]">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={active.src}
            alt={active.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0b0907] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0b0907] to-transparent" />
      </div>

      <div className="relative overflow-hidden px-6 py-6">
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-dark-surface to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-dark-surface to-transparent pointer-events-none" />

        <div className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(slideIndex)}
              className={`snap-start min-w-[18rem] flex-shrink-0 overflow-hidden rounded-3xl transition ${
                slideIndex === index ? "ring-2 ring-[#ff4d00]/60" : "ring-1 ring-transparent hover:ring-[#ff4d00]/30"
              }`}
            >
              <div className="relative aspect-[4/3] w-full bg-[#120f0d]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 18rem"
                  className="object-cover transition duration-300"
                />
              </div>
              <div className="border-t border-dark-border bg-dark-surface px-4 py-4 text-left">
                <p className="font-medium text-body-sm text-canvas">{slide.caption ?? slide.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
