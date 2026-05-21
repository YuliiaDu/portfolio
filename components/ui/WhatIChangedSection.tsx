"use client";

import Image from "next/image";
import { useState } from "react";

interface WhatIChangedCard {
  number: string;
  title: string;
  body: string;
  image: string;
  alt: string;
}

interface WhatIChangedSectionProps {
  cards: WhatIChangedCard[];
}

export default function WhatIChangedSection({ cards }: WhatIChangedSectionProps) {
  const [openImage, setOpenImage] = useState<WhatIChangedCard | null>(null);

  return (
    <>
      <section className="bg-ink text-canvas pt-16 pb-16 md:pt-[120px] md:pb-[120px]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-20">
            <div>
              <p className="text-label uppercase tracking-widest text-dark-text mb-3">
                What I changed
              </p>
              <h2 className="font-display font-semibold text-display-lg text-canvas">
                Key redesign moments from gigmit onboarding
              </h2>
            </div>
            <p className="text-body-sm text-dark-text max-w-[38ch] md:text-right">
              Four focus areas grounded in research, flow, conversion, and validation — each illustrated with a key gigmit screen.
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
                  <h3 className="font-display font-semibold text-display-md text-canvas mb-4 group-hover:text-ember transition-colors duration-300">
                    {card.title}
                  </h3>
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
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={() => setOpenImage(null)}
        >
          <div
            className="relative max-w-[95vw] max-h-[95vh] w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenImage(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 px-3 py-2 text-white transition hover:bg-white/20"
            >
              Close
            </button>
            <div className="mx-auto max-w-full overflow-auto rounded-3xl border border-white/10 bg-black">
              <img
                src={openImage.image}
                alt={openImage.alt}
                className="block max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
