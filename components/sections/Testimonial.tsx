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
            I had the pleasure of working with Yuliia at gigmit, and she is truly the kind of product designer every team hopes to have.
Yuliia combines exceptional design skills with impressive speed and a deep understanding of product thinking. She consistently delivered high-quality work, often going beyond the brief by proactively suggesting improvements and anticipating user needs. Her designs were not only visually strong but always grounded in usability and business impact.
Beyond her talent, Yuliia is incredibly friendly, collaborative, and easy to work with. She brings a positive energy to the team, communicates clearly, and takes full ownership of her work. You can trust her to move fast, think independently, and elevate the product at every stage.
All in all, Yuliia is an outstanding product designer and a true asset to any product team. I’d work with her again in a heartbeat and highly recommend her.
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
