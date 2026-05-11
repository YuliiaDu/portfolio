"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Testimonial() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section ref={ref} className="py-section bg-canvas">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Open quote mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            className="font-display text-[7rem] leading-none text-mist select-none mb-0 -mb-8"
            aria-hidden
          >
            "
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.1 }}
            className="font-display font-light text-display-md text-ink text-balance leading-snug mb-8"
          >
            Jane has a rare ability to hold the user's perspective and the
            business's needs at the same time — and find the design that
            satisfies both. She shipped more in six months than most designers
            ship in two years.
          </motion.blockquote>

          <motion.footer
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.4 }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-8 h-px bg-mist mb-3" />
            <cite className="not-italic text-body-sm font-medium text-ink">
              Alex Chen
            </cite>
            <span className="text-label uppercase tracking-widest text-stone">
              CPO, ArcFlow
            </span>
          </motion.footer>
        </div>
      </div>
    </section>
  );
}
