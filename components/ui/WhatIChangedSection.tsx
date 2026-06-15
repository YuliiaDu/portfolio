"use client";

import Image from "next/image";
import { useState } from "react";
import { Heading } from "@/components/ui/Heading";

interface WhatIChangedCard {
  number: string;
  title: string;
  body: string;
  image: string;
  alt: string;
}

interface WhatIChangedSectionProps {
  cards: WhatIChangedCard[];
  heading?: string;
  description?: string;
}

export default function WhatIChangedSection({ cards, heading, description }: WhatIChangedSectionProps) {
  const [openImage, setOpenImage] = useState<WhatIChangedCard | null>(null);

  return (
    <>
      <section className="bg-ink text-canvas py-section">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-20">
            <div>
              <p className="text-label uppercase tracking-widest text-dark-text mb-3">
                What I changed
              </p>
              <Heading level={2} className="text-canvas">
                {heading || "Key redesign moments from gigmit onboarding"}
              </Heading>
            </div>
            <p className="text-body-sm text-dark-text max-w-[38ch] md:text-right">
              {description || "Four focus areas grounded in research, flow, conversion, and validation — each illustrated with a key gigmit screen."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-dark-border rounded-2xl overflow-hidden">
            {cards.map((card) => (
              <button
                key={card.number}
                type="button"
                onClick={() => setOpenImage(card)}
                className="group text-left bg-dark-surface hover:bg-dark-border transition-colors duration-300 cursor-pointer flex h-full flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0b0907]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 48vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col flex-1">
                  <span className="text-label text-dark-text mb-6 block">{card.number}</span>
                  <Heading level={3} className="text-canvas mb-4 group-hover:text-ember transition-colors duration-300">
                    {card.title}
                  </Heading>
                  <p className="text-body-sm text-dark-text leading-relaxed flex-1">
                    {card.body}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {openImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="absolute inset-0" onClick={() => setOpenImage(null)} />
          <div className="relative z-10 max-w-[96vw] max-h-[96vh]">
            <button
              aria-label="Close image"
              onClick={() => setOpenImage(null)}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-canvas/95 text-ink shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-amber-200"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
              onKeyDown={(e) => { if (e.key === 'Escape') setOpenImage(null); }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <img src={openImage.image} alt={openImage.alt} className="w-auto max-w-full max-h-[92vh] block mx-auto rounded-lg shadow-2xl" />
          </div>
        </div>
      ) : null}
    </>
  );
}
