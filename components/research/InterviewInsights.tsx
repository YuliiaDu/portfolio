"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { fadeUp, EASE_OUT_EXPO } from "@/lib/motion";
import { Heading } from "@/components/ui/Heading";

interface InterviewInsight {
  id: string;
  body: string;
}

interface InterviewInsightsProps {
  insights: InterviewInsight[];
}

export function InterviewInsights({ insights }: InterviewInsightsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section ref={ref} className="bg-ink text-canvas py-section" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <p className="text-label uppercase tracking-widest text-dark-text mb-3">
              Interview Findings
            </p>
            <Heading level={2} className="text-canvas">Some insights from user interviews</Heading>
          </motion.div>
        </div>
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-dark-border rounded-2xl overflow-hidden">
          {insights.map((insight, i) => (
            <InsightCard key={insight.id} insight={insight} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightCard({
  insight,
  index,
  inView,
}: {
  insight: InterviewInsight;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: EASE_OUT_EXPO }}
      className="group bg-dark-surface hover:bg-dark-border p-8 md:p-10 transition-colors duration-300 cursor-default"
    >
      <span className="text-label text-ember mb-6 block">{insight.id}</span>
      <p className="text-body-sm text-dark-text leading-relaxed max-w-[36ch]">
        {insight.body}
      </p>
    </motion.div>
  );
}