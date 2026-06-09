"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { Heading } from "@/components/ui/Heading";

const TESTIMONIALS = [
  {
    quote:
      "Yuliia combines exceptional design skills with impressive speed and a deep understanding of product thinking. She consistently delivered high-quality work, often going beyond the brief by proactively suggesting improvements and anticipating user needs. Her designs were not only visually strong but always grounded in usability and business impact.",
    name: "Marcus Fitzgerald",
    role: "CEO, gigmit",
  },
  {
    quote:
      "Yuliia is very experienced in all things marketing. Self starter, doesn't need hand holding, continues pushing the projects to completion, good communicator. Pleasure to work with!",
    name: "Natalie Luneva",
    role: "Exit Planning, M&A Advisor & Business Broker.",
  },
  {
    quote:
      "Yuliia is one of the most proactive and efficient product designers I've collaborated with. As a Lead Developer, 1 appreciated her ability to blend aesthetics with usability and business goals. She moves fast, thinks independently, and is a joy to have in the room. Any product team would be lucky to have her.",
    name: "Andreas Kürbis",
    role: "Senior Full-Stack Engineer, gigmit",
  },
];

function TestimonialCard({
  quote,
  name,
  role,
  delay,
}: {
  quote: string;
  name: string;
  role: string;
  delay: number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay }}
      className="group relative overflow-hidden rounded-2xl border border-mist bg-[#E8E6E1] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_48px_rgba(15,12,10,0.1)]"
    >
      <div className="px-5 pt-5 sm:px-6 sm:pt-6 pb-6 flex flex-col h-full">
        {/* Quote icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ember mb-4" aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-canvas">
            <path d="M3 21c3-5 9-5 12 0M3 10c3-5 9-5 12 0M14 21c3-5 9-5 12 0M14 10c3-5 9-5 12 0" />
          </svg>
        </div>

        {/* Quote text */}
        <blockquote className="font-display font-light text-[0.95rem] leading-[1.7] text-ink flex-1 mb-6">
          {quote}
        </blockquote>

        <footer className="pt-4 border-t border-ember">
          <cite className="not-italic text-body-sm font-medium text-ink block">{name}</cite>
          <span className="text-label text-stone">{role}</span>
        </footer>
      </div>
    </motion.div>
  );
}

export function Testimonial() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="py-section bg-canvas">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          className="mb-12 md:mb-16"
        >
          <p className="text-label uppercase tracking-widest text-stone mb-3">Kind words</p>
          <Heading level={2} className="max-w-xl text-ink">Recommendations</Heading>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={i * 0.12} />
          ))}
        </div>

      </div>
    </section>
  );
}
