"use client";

import { motion } from "framer-motion";

const WORDS = [
  "Research",
  "Strategy",
  "Wireframes",
  "Prototypes",
  "Usability Tests",
  "Design Systems",
  "Handoff",
  "Ship",
  "Iterate",
  "Research",
  "Strategy",
  "Wireframes",
  "Prototypes",
  "Usability Tests",
  "Design Systems",
  "Handoff",
  "Ship",
  "Iterate",
];

export function ProcessMarquee() {
  return (
    <div className="bg-ember py-5 overflow-hidden">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {WORDS.map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-label uppercase tracking-widest text-canvas font-medium flex-shrink-0"
          >
            {word}
            <span className="text-canvas/50">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
