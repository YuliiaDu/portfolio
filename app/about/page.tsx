"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EASE_OUT_EXPO, fadeUp, staggerContainer } from "@/lib/motion";
import { HomeCTA } from "@/components/sections/HomeCTA";
import portraitImage from "@/data/yu_dudareva_photo.jpeg";

const EXPERTISE = [
  {
    title: "Product Strategy & Thinking",
    description: "I design with intent, connecting user needs, business objectives, and product vision into cohesive solutions. My process focuses on defining the right problem first, then shaping clear, scalable directions that guide both design and development decisions.",
  },
  {
    title: "UX Design & Experience Architecture",
    description: "I structure complex problems into simple, intuitive user journeys. By mapping flows, identifying friction points, and prioritizing clarity, I create experiences that feel natural, efficient, and effortless across every interaction.",
  },
  {
    title: "UI Design & Scalable Systems",
    description: "I design interfaces that balance precision, consistency, and adaptability. With a strong focus on hierarchy, spacing, and visual rhythm, I build UI systems that scale across products while maintaining clarity and aesthetic coherence.",
  },
  {
    title: "Research & Insight-Driven Design",
    description: "I ground design decisions in user insight and behavioral understanding. Through research, testing, and iteration, I uncover meaningful opportunities and translate them into solutions that improve usability and drive product value.",
  },
];

const SKILLS = [
  {
    category: "Interaction",
    skills: [
      "Design Thinking", "Usability Testing", "User Research", "Wireframing", "Prototyping",
      "User Flows", "Journey Mapping", "Accessibility Compliance Check", "Inclusive Design",
      "Information Architecture", "A/B Testing", "Go-to-Market Strategy"
    ]
  },
  {
    category: "Visual",
    skills: [
      "Design Systems", "Web Design", "Mobile Design (iOS & Android)", "Desktop Design",
      "Responsive Design", "High-Fidelity Design", "Microinteractions"
    ]
  },
  {
    category: "Tools",
    skills: [
      "Figma", "Visual Studio Code", "GitHub", "Vercel", "Maze", "Adobe Creative Suite", "Hotjar", "Amplitude", "Google Analytics",
      "Claude AI", "ChatGPT", "Claude Code", "GitHub Copilot", "Cursor", "Midjourney", "Perplexity AI", "Miro", "Asana", "Jira", "Notion"
    ]
  }
];

const TIMELINE = [
  {
    year: "2024",
    title: "Senior Product Designer",
    description: "Advanced into a senior role, leading product design initiatives with a focus on strategy, systems, and end-to-end user experience.",
  },
  {
    year: "2022",
    title: "Multidisciplinary Growth",
    description: "Expanded my skill set across product thinking, UI systems, and cross-functional collaboration, strengthening both craft and strategic impact.",
  },
  {
    year: "2020",
    title: "Transition into UX/UI Design",
    description: "Shifted focus from marketing into UX/UI design, building a strong foundation in user-centered design, interaction, and digital product development.",
  },
  {
    year: "2013",
    title: "Beginning of My Marketing Journey",
    description: "Started my career in marketing, developing early expertise in communication, branding, and understanding user behavior and business needs.",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const expertiseRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const workflowRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const personalRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-10% 0px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-10% 0px" });
  const expertiseInView = useInView(expertiseRef, { once: true, margin: "-10% 0px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-10% 0px" });
  const workflowInView = useInView(workflowRef, { once: true, margin: "-10% 0px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-10% 0px" });
  const personalInView = useInView(personalRef, { once: true, margin: "-10% 0px" });

  return (
    <main className="relative bg-canvas text-ink">
      {/* ── Hero Section ─────────────────────── */}
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
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid gap-12 items-center lg:grid-cols-[1.5fr_1fr]"
          >
            <div className="text-center lg:text-left">
              <motion.h1
                variants={fadeUp}
                className="font-display font-semibold text-display-lg tracking-tight leading-[1.05] mb-6"
              >
                Designing thoughtful digital experiences where strategy, design, and technology meet.
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mx-auto max-w-3xl text-body-lg text-stone leading-relaxed lg:mx-0"
              >
                Senior Product & UX/UI Designer with a marketing background, combining business insight with user-centered, scalable design and modern AI-driven workflows.
              </motion.p>
            </div>

            <motion.div
              variants={fadeUp}
              className="relative mx-auto w-full max-w-[28rem] overflow-hidden rounded-[2rem] border border-dark-border bg-ink/75 shadow-[0_40px_120px_rgba(0,0,0,0.12)]"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={portraitImage}
                  alt="Yuliia Dudareva"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>

              <div className="absolute left-4 bottom-4 rounded-3xl border border-canvas/10 bg-ink/70 px-4 py-3 backdrop-blur-sm">
                <p className="text-label uppercase tracking-[0.32em] text-canvas/80">Yuliia Dudareva</p>
                <p className="mt-1 text-body-sm text-canvas/80">Senior Product Designer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Story Section ────────────────────── */}
      <section ref={storyRef} className="py-section bg-mist/30">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            className="max-w-4xl"
          >
            <h2 className="font-display font-semibold text-display-md mb-8">My Journey</h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              className="space-y-6 text-body-lg text-stone leading-relaxed"
            >
              <motion.p variants={fadeUp}>
                My path into design began in marketing, where I developed a deep understanding of business processes,
                customer psychology, and how design impacts conversion. This foundation gave me unique insights into
                balancing user needs with business objectives.
              </motion.p>
              <motion.p variants={fadeUp}>
                Transitioning into UX/UI design, I discovered my passion for creating meaningful digital experiences.
                I quickly embraced modern workflows, learning to work across design systems, rapid prototyping, and
                frontend implementation. Today, I bridge strategy and execution, combining creative vision with
                technical capability.
              </motion.p>
              <motion.p variants={fadeUp}>
                I stay current with emerging technologies, actively incorporating AI tools into my process while
                maintaining a human-centered approach. My work reflects a multidisciplinary mindset that values
                both aesthetics and functionality in equal measure.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Expertise Grid ───────────────────── */}
      <section ref={expertiseRef} className="bg-ink text-canvas py-section">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
            <motion.div
              initial="hidden"
              animate={expertiseInView ? "visible" : "hidden"}
              variants={fadeUp}
            >
              <p className="text-label uppercase tracking-widest text-dark-text mb-3">
                What I do
              </p>
              <h2 className="font-display font-semibold text-display-lg text-canvas">
                My expertise
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={expertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.7, ease: EASE_OUT_EXPO }}
              className="text-body-sm text-dark-text max-w-[38ch] md:text-right"
            >
              A multidisciplinary skill set focused on modern digital product design and development.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-px bg-dark-border rounded-2xl overflow-hidden">
            {EXPERTISE.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={expertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: EASE_OUT_EXPO }}
                className="group bg-dark-surface hover:bg-dark-border p-8 md:p-10 transition-colors duration-300 cursor-default"
              >
                <h3 className="font-display font-semibold text-display-md text-canvas mb-4 group-hover:text-ember transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-body-sm text-dark-text leading-relaxed max-w-[36ch]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workflow Section ─────────────────── */}
      <section ref={workflowRef} className="py-section bg-mist/30">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={workflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h2 className="font-display font-semibold text-display-md mb-8">My Approach</h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={workflowInView ? "visible" : "hidden"}
              className="space-y-6 text-body-lg text-stone leading-relaxed"
            >
              <motion.p variants={fadeUp}>
                I approach design with systems thinking, creating scalable user experiences that adapt across platforms.
                My process integrates AI-enhanced productivity with collaborative workflows, enabling rapid iteration
                while maintaining quality.
              </motion.p>
              <motion.p variants={fadeUp}>
                Balancing aesthetics and usability is core to my work. I design conversion-aware interfaces that
                prioritize user needs while supporting business goals. Modern responsive ecosystems and interaction
                design principles guide every decision.
              </motion.p>
              <motion.p variants={fadeUp}>
                I believe in user-centered product decisions that consider the entire digital experience. From
                initial strategy to final implementation, I ensure designs are thoughtful, accessible, and future-ready.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills & Tools ───────────────────── */}
      <section ref={skillsRef} className="bg-ink text-canvas py-section">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
            <motion.div
              initial="hidden"
              animate={skillsInView ? "visible" : "hidden"}
              variants={fadeUp}
            >
              <p className="text-label uppercase tracking-widest text-dark-text mb-3">
                Skills & tools
              </p>
              <h2 className="font-display font-semibold text-display-lg text-canvas">
                My capabilities
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.7, ease: EASE_OUT_EXPO }}
              className="text-body-sm text-dark-text max-w-[38ch] md:text-right"
            >
              A comprehensive toolkit spanning design, development, and modern workflows for building exceptional digital products.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-border rounded-2xl overflow-hidden">
            {SKILLS.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 24 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: EASE_OUT_EXPO }}
                className="group bg-dark-surface hover:bg-dark-border p-8 md:p-10 transition-colors duration-300 cursor-default"
              >
                <h3 className="font-display font-semibold text-display-md text-canvas mb-6 group-hover:text-ember transition-colors duration-300">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-dark-border hover:bg-ember/10 border border-dark-border hover:border-ember/30 rounded-full text-label text-dark-text hover:text-ember transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline Section ─────────────────── */}
      <section ref={timelineRef} className="py-section">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-semibold text-display-md mb-4">Timeline</h2>
            <p className="text-body-lg text-stone">Key milestones in my design journey.</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-mist" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={timelineInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-12"
            >
              {TIMELINE.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 * index }}
                  className="relative flex items-start gap-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-ember rounded-full flex items-center justify-center text-canvas font-display font-semibold text-body-sm">
                    {item.year}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-display font-semibold text-body-lg mb-2">{item.title}</h3>
                    <p className="text-body-sm text-stone leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <HomeCTA />

    </main>
  );
}

