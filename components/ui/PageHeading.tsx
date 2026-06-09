"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, fadeUp, staggerContainer } from "@/lib/motion";

interface PageHeadingProps {
  line1: string;
  line2: string;
  accentWord: string;
  accentColor?: string;
}

export function PageHeading({ 
  line1, 
  line2, 
  accentWord, 
  accentColor = "#FF4D00" 
}: PageHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="mb-6"
    >
      {/* Line 1 */}
      <motion.h1
        variants={fadeUp}
        className="font-display text-display-xl text-ink text-balance leading-none tracking-[-0.03em]"
      >
        {line1}
      </motion.h1>

      {/* Line 2 — italic + accent */}
      <motion.div
        variants={fadeUp}
        className="flex flex-wrap items-baseline gap-x-5 gap-y-0"
      >
        <span className="font-display text-display-xl text-ink italic font-light leading-none tracking-[-0.03em]">
          {line2}&nbsp;
        </span>
        <span
          className="font-display text-display-xl leading-none tracking-[-0.03em]"
          style={{ color: accentColor }}
        >
          {accentWord}
        </span>
      </motion.div>
    </motion.div>
  );
}