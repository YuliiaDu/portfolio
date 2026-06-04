"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { Button } from "@/components/buttons/Button";

export function HomeCTA() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="bg-ink py-section">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            className="max-w-xl"
          >
            <h2 className="font-display font-semibold text-display-lg text-canvas mb-4">
              Have a project{" "}
              <span className="italic font-light text-dark-text">in mind?</span>
            </h2>
            <p className="text-body-sm text-dark-text">
              I take on a small number of projects each quarter. If you're
              building something thoughtful, let's talk.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button
              href="/contact"
              variant="primary-accent"
              size="lg"
              arrow
            >
              Start a conversation
            </Button>

            <a
              href="mailto:yudu.design@gmail.com"
              className="text-body-sm font-medium text-dark-text hover:text-canvas transition-colors duration-300 underline-ember [&::after]:bg-canvas"
            >
              yudu.design@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
