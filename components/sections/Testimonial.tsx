"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const TESTIMONIALS = [
  {
    quote:
      "Yuliia combines exceptional design skills with impressive speed and a deep understanding of product thinking. She consistently delivered high-quality work, often going beyond the brief by proactively suggesting improvements and anticipating user needs. Her designs were not only visually strong but always grounded in usability and business impact.Beyond her talent, Yulia is incredibly friendly, collaborative, and easy to work with. She brings a positive energy to the team, communicates clearly, and takes full ownership of her work. You can trust her to move fast, think independently, and elevate the product at every stage.",
    name: "Marcus Fitzgerald",
    role: "CEO, gigmit",
  },
  {
    quote:
      "Yuliia is one of the most proactive and efficient product designers I've collaborated with. As a Lead Developer, 1 appreciated her ability to blend aesthetics with usability and business goals. She moves fast, thinks independently, and is a joy to have in the room. Any product team would be lucky to have her.",
    name: "Andreas Kürbis",
    role: "Senior Full-Stack Engineer, gigmit",
  },
  {
    quote:
      "Yulia is very experienced in all things marketing. Self starter, doesn't need hand holding, continues pushing the projects to completion, good communicator. Pleasure to work with!",
    name: "Natalie Luneva",
    role: "Exit Planning, M&A Advisor & Business Broker.",
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
      className="flex flex-col rounded-3xl border border-mist bg-white/60 p-8 md:p-10"
    >
      {/* Quote mark */}
      <div className="flex items-end gap-[5px] mb-6" aria-hidden>
        <span className="block w-[3px] h-7 rounded-full bg-mist" />
        <span className="block w-[3px] h-7 rounded-full bg-mist" />
      </div>

      {/* Quote text */}
      <blockquote className="font-display font-light text-[0.975rem] leading-[1.8] text-ink flex-1 mb-8">
        {quote}
      </blockquote>

      <footer className="pt-6 border-t border-mist">
        <cite className="not-italic text-body-sm font-medium text-ink block">{name}</cite>
        <span className="text-label text-stone">{role}</span>
      </footer>
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
          <h2 className="font-display font-semibold text-display-md text-ink max-w-xl">
            What collaborators say
          </h2>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={i * 0.12} />
          ))}
        </div>

      </div>
    </section>
  );
}
