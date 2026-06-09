"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { Heading } from "@/components/ui/Heading";

export interface DesignConcept {
  title: string;
  subtitle: string;
  description: string;
  images: { src: string; alt: string }[];
}

interface ImageSliderProps {
  concepts: DesignConcept[];
}

export default function ImageSlider({ concepts }: ImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const concept = concepts[activeIndex];
  const totalImages = concept?.images.length ?? 0;

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex(idx);
      setImageIndex(0);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating]
  );

  const goNext = useCallback(() => {
    if (activeIndex < concepts.length - 1) goTo(activeIndex + 1);
  }, [activeIndex, concepts.length, goTo]);

  const goPrev = useCallback(() => {
    if (activeIndex > 0) goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const nextImage = useCallback(() => {
    if (imageIndex < totalImages - 1) setImageIndex((i) => i + 1);
  }, [imageIndex, totalImages]);

  const prevImage = useCallback(() => {
    if (imageIndex > 0) setImageIndex((i) => i - 1);
  }, [imageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      diff > 0 ? goNext() : goPrev();
    }
  };

  if (!concept) return null;

  return (
    <section className="bg-ink text-canvas py-16 md:py-[120px] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <p className="text-label uppercase tracking-widest text-dark-text mb-3">
          More designs
        </p>
        <Heading level={2} className="text-canvas mb-20">Design concepts</Heading>

        {/* Project selector tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {concepts.map((c, idx) => (
            <button
              key={c.title}
              type="button"
              onClick={() => goTo(idx)}
              className={`px-4 py-2 rounded-full text-body-sm border transition-all duration-300 ${
                idx === activeIndex
                  ? "bg-ember border-ember text-canvas font-semibold"
                  : "border-dark-border text-dark-text hover:border-dark-text hover:text-canvas"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Main slider area */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation arrows */}
          <button
            type="button"
            onClick={goPrev}
            disabled={activeIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-2 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              activeIndex === 0
                ? "opacity-20 cursor-not-allowed"
                : "opacity-70 hover:opacity-100 bg-white/10 hover:bg-white/20 cursor-pointer"
            }`}
            aria-label="Previous concept"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={activeIndex === concepts.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-2 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              activeIndex === concepts.length - 1
                ? "opacity-20 cursor-not-allowed"
                : "opacity-70 hover:opacity-100 bg-white/10 hover:bg-white/20 cursor-pointer"
            }`}
            aria-label="Next concept"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Image display */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0b0907] border border-dark-border">
            <div className="relative aspect-[16/10] md:aspect-[16/9] w-full">
              <Image
                key={`${activeIndex}-${imageIndex}`}
                src={concept.images[imageIndex]?.src ?? ""}
                alt={concept.images[imageIndex]?.alt ?? concept.title}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-contain transition-opacity duration-300"
                priority
              />
            </div>

            {/* Image counter & navigation */}
            {totalImages > 1 && (
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevImage}
                  disabled={imageIndex === 0}
                  className={`w-8 h-8 rounded-full flex items-center justify-center bg-black/40 text-white backdrop-blur-sm transition ${
                    imageIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-black/60 cursor-pointer"
                  }`}
                  aria-label="Previous image"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <span className="text-body-xs text-white/80 font-mono tabular-nums min-w-[4ch] text-center">
                  {String(imageIndex + 1).padStart(2, "0")}/{String(totalImages).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={nextImage}
                  disabled={imageIndex === totalImages - 1}
                  className={`w-8 h-8 rounded-full flex items-center justify-center bg-black/40 text-white backdrop-blur-sm transition ${
                    imageIndex === totalImages - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-black/60 cursor-pointer"
                  }`}
                  aria-label="Next image"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>
            )}

            {/* Dot indicators */}
            {totalImages > 1 && (
              <div className="absolute bottom-4 left-4 flex gap-1.5">
                {Array.from({ length: totalImages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === imageIndex ? "bg-ember w-5" : "bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Concept info */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start">
            <div>
              <Heading level={3} className="text-canvas">
                {concept.title}
              </Heading>
              {concept.subtitle && (
                <p className="text-label text-ember uppercase tracking-widest mt-2">
                  {concept.subtitle}
                </p>
              )}
              <p className="text-body-sm text-dark-text mt-3 max-w-2xl leading-relaxed">
                {concept.description}
              </p>
            </div>

            {/* Project dots navigation */}
            <div className="flex items-center gap-2 self-center md:self-auto">
              {concepts.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "bg-ember scale-125" : "bg-dark-border hover:bg-dark-text"
                  }`}
                  aria-label={`Go to concept ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
