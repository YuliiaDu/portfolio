"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EASE_OUT_EXPO, fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">

      {/* ── Background grid ───────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E8E6E1 1px, transparent 1px),
            linear-gradient(to bottom, #E8E6E1 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          opacity: 0.45,
        }}
      />

      {/* ── Ember orb — soft glow top-right ───────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,77,0,0.08) 0%, transparent 65%)",
        }}
      />

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full">

        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 mb-10 md:mb-14"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-label uppercase tracking-widest text-stone">
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-10"
        >
          {/* Line 1 */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-display-xl text-ink text-balance leading-none tracking-[-0.03em]"
          >
            Design that
          </motion.h1>

          {/* Line 2 — italic + ember accent */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-baseline gap-x-5 gap-y-0"
          >
            <span className="font-display text-display-xl text-ink italic font-light leading-none tracking-[-0.03em]">
              makes&nbsp;things
            </span>
            <span
              className="font-display text-display-xl leading-none tracking-[-0.03em]"
              style={{ color: "#FF4D00" }}
            >
              clear.
            </span>
          </motion.div>
        </motion.div>

        {/* Sub-copy + CTA row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <motion.p
            variants={fadeUp}
            className="text-body-lg text-stone max-w-[42ch]"
          >
            I'm Jane — UI/UX &amp; Product Designer. I turn complex problems into
            products people actually want to use. Currently at{" "}
            <span className="text-ink font-medium">Linear</span>.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 flex-shrink-0"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 bg-ink text-canvas text-body-sm font-medium px-6 py-3.5 rounded-full hover:bg-stone transition-colors duration-300"
            >
              View my work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/about"
              className="text-body-sm font-medium text-stone underline-ember hover:text-ink transition-colors duration-300"
            >
              About me
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Stats row ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: EASE_OUT_EXPO }}
          className="mt-20 md:mt-28 pt-8 border-t border-mist grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "6+",  label: "Years experience"    },
            { value: "40+", label: "Products shipped"    },
            { value: "3",   label: "Startup exits"       },
            { value: "B2B & B2C", label: "Domain range"  },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-display font-semibold text-display-md text-ink mb-1">{value}</p>
              <p className="text-label uppercase tracking-widest text-stone">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-label text-stone uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-stone to-transparent"
        />
      </motion.div>
    </section>
  );
}
