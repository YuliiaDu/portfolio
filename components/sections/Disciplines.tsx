"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { fadeUp, EASE_OUT_EXPO } from "@/lib/motion";

const DISCIPLINES = [
  {
    number: "01",
    title: "Product Strategy",
    body:
      "Understanding what to build before touching Figma. I partner with founders and PMs to map user needs against business goals and shape a clear product direction.",
  },
  {
    number: "02",
    title: "Interaction Design",
    body:
      "Every tap, scroll, and state matters. I design systems of interaction — not just screens — that feel natural, responsive, and deeply intentional.",
  },
  {
    number: "03",
    title: "Design Systems",
    body:
      "Scalable component libraries, token architectures, and the processes that keep teams aligned. Design systems are a product too.",
  },
  {
    number: "04",
    title: "User Research",
    body:
      "Interviews, diary studies, usability tests. I go where the users are and translate what I find into design decisions with clear rationale.",
  },
];

export function Disciplines() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section ref={ref} className="bg-ink text-canvas py-section">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <p className="text-label uppercase tracking-widest text-dark-text mb-3">
              What I do
            </p>
            <h2 className="font-display font-semibold text-display-lg text-canvas">
              My disciplines
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.7, ease: EASE_OUT_EXPO }}
            className="text-body-sm text-dark-text max-w-[38ch] md:text-right"
          >
            I work across the full design lifecycle — from early discovery
            to shipped product — and everything in between.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-dark-border rounded-2xl overflow-hidden">
          {DISCIPLINES.map((d, i) => (
            <DisciplineCard key={d.number} discipline={d} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DisciplineCard({
  discipline,
  index,
  inView,
}: {
  discipline: (typeof DISCIPLINES)[0];
  index:      number;
  inView:     boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: EASE_OUT_EXPO }}
      className="group bg-dark-surface hover:bg-dark-border p-8 md:p-10 transition-colors duration-300 cursor-default"
    >
      <span className="text-label text-dark-text mb-6 block">{discipline.number}</span>
      <h3 className="font-display font-semibold text-display-md text-canvas mb-4 group-hover:text-ember transition-colors duration-300">
        {discipline.title}
      </h3>
      <p className="text-body-sm text-dark-text leading-relaxed max-w-[36ch]">
        {discipline.body}
      </p>
    </motion.div>
  );
}
