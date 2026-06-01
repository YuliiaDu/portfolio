"use client";

import { useState } from "react";

export default function BeforeAfterGrid({ before, after, altBefore, altAfter }: { before: string[]; after: string[]; altBefore?: string; altAfter?: string }) {
  const [openSrc, setOpenSrc] = useState<string | null>(null);

  const imagesLeft = before ?? [];
  const imagesRight = after ?? [];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-6">
          {imagesLeft.map((src, i) => (
            <button key={`b-${i}`} onClick={() => setOpenSrc(src)} className="block w-full text-left rounded-xl overflow-hidden bg-[#0b0907]">
              <img src={src} alt={altBefore ?? `Before ${i + 1}`} className="w-full h-auto block" />
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {imagesRight.map((src, i) => (
            <button key={`a-${i}`} onClick={() => setOpenSrc(src)} className="block w-full text-left rounded-xl overflow-hidden bg-[#0b0907]">
              <img src={src} alt={altAfter ?? `After ${i + 1}`} className="w-full h-auto block" />
            </button>
          ))}
        </div>
      </div>

      {openSrc ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="absolute inset-0" onClick={() => setOpenSrc(null)} />
          <div className="relative z-10 max-w-[96vw] max-h-[96vh]">
            <button
              aria-label="Close image"
              onClick={() => setOpenSrc(null)}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-canvas/95 text-ink shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-amber-200"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
              onKeyDown={(e) => { if (e.key === 'Escape') setOpenSrc(null); }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <img src={openSrc} alt="Expanded" className="w-auto max-w-full max-h-[92vh] block mx-auto rounded-lg shadow-2xl" />
          </div>
        </div>
      ) : null}
    </>
  );
}
