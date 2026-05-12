"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

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
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-ember text-canvas text-body-sm font-medium px-7 py-4 rounded-full hover:bg-canvas hover:text-ink transition-all duration-400"
            >
              Start a conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <a
              href="mailto:dudareva.yu@gmail.com"
              className="text-body-sm font-medium text-dark-text hover:text-canvas transition-colors duration-300 underline-ember [&::after]:bg-canvas"
            >
              dudareva.yu@gmail.com
            </a>
          </motion.div>
        </div>

        {/* ── Divider + social strip ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-dark-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-label uppercase tracking-widest text-dark-text">
            Follow along
          </p>
          <div className="flex items-center gap-6">
            {[
              { href: "https://dribbble.com/Yuliia_Dudareva",  label: "Dribbble"  },
              { href: "https://www.linkedin.com/in/yuliia-dudareva/",  label: "LinkedIn"  },
              { href: "https://www.behance.net/yuliia_dudareva",   label: "Behance"   },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm text-dark-text hover:text-canvas transition-colors duration-300 underline-ember [&::after]:bg-canvas"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
