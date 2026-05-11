"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  once = true,
}: ScrollRevealProps) {
  const ref  = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container — animates children in sequence
 */
interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function StaggerReveal({ children, className, delay = 0 }: StaggerProps) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.12, delayChildren: delay },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
