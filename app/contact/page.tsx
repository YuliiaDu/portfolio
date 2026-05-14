"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Metadata } from "next";

const SOCIAL = [
  { href: "https://dribbble.com/Yuliia_Dudareva", label: "Dribbble" },
  { href: "https://www.linkedin.com/in/yuliia-dudareva/", label: "LinkedIn" },
  { href: "https://www.behance.net/yuliia_dudareva", label: "Behance" },
];

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowX = useSpring(pointerX, { stiffness: 120, damping: 24 });
  const glowY = useSpring(pointerY, { stiffness: 120, damping: 24 });

  const buttonX = useMotionValue(0);
  const buttonY = useMotionValue(0);

  useEffect(() => {
    if (status !== "sent") return;

    const timeout = window.setTimeout(() => setStatus("idle"), 2400);
    return () => window.clearTimeout(timeout);
  }, [status]);

  const handleCursorMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - rect.left);
    pointerY.set(event.clientY - rect.top);
  };

  const handleButtonMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    buttonX.set(x / 6);
    buttonY.set(y / 8);
  };

  const handleButtonLeave = () => {
    buttonX.set(0);
    buttonY.set(0);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status !== "idle") return;

    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 850);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-canvas">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-ember/15 blur-3xl"
        />
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-canvas/10 blur-3xl"
        />
        <div className="absolute inset-x-0 top-1/2 h-[18rem] -translate-y-1/2 bg-gradient-to-b from-ember/5 via-transparent to-transparent opacity-60" />
      </div>

      <section
        ref={sectionRef}
        onPointerMove={handleCursorMove}
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-section md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[42rem]"
        >
          <p className="text-label uppercase tracking-widest text-stone mb-5">
            Let’s connect
          </p>
          <h1 className="font-display text-display-xl text-canvas leading-none tracking-[-0.03em]">
            Let’s build something together.
          </h1>
          <p className="mt-6 text-body-lg text-stone max-w-[42ch]">
            I design calm, intelligent product experiences with a premium, minimal feel.
            If you’re looking for a thoughtful collaboration, send a note below.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="mt-16 grid gap-8 rounded-[2rem] border border-mist/30 bg-ink/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-3 text-body-sm text-dark-text">
              <span className="font-medium text-canvas">Name</span>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="min-h-[4.5rem] rounded-[1.5rem] border border-mist/30 bg-ink/10 px-5 text-canvas outline-none transition focus:border-ember focus:ring-2 focus:ring-ember/15"
              />
            </label>

            <label className="flex flex-col gap-3 text-body-sm text-dark-text">
              <span className="font-medium text-canvas">Email</span>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="min-h-[4.5rem] rounded-[1.5rem] border border-mist/30 bg-ink/10 px-5 text-canvas outline-none transition focus:border-ember focus:ring-2 focus:ring-ember/15"
              />
            </label>
          </div>

          <label className="flex flex-col gap-3 text-body-sm text-dark-text">
            <span className="font-medium text-canvas">Message</span>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Tell me about your project, timeline, and what matters most."
              className="min-h-[14rem] rounded-[1.5rem] border border-mist/30 bg-ink/10 px-5 py-5 text-canvas outline-none transition focus:border-ember focus:ring-2 focus:ring-ember/15"
            />
          </label>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-body-sm text-dark-text">
                Prefer direct email?{' '}
                <a href="mailto:dudareva.yu@gmail.com" className="font-medium text-canvas underline-ember">
                  dudareva.yu@gmail.com
                </a>
              </p>
            </div>

            <motion.button
              type="submit"
              onPointerMove={handleButtonMove}
              onPointerLeave={handleButtonLeave}
              style={{ x: buttonX, y: buttonY }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center overflow-hidden rounded-[1.75rem] border border-ember/20 bg-ember px-7 py-4 text-body-sm font-medium text-ink transition-shadow duration-300 hover:shadow-[0_18px_60px_rgba(255,77,0,0.24)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-canvas/10 to-transparent opacity-0 transition-opacity duration-400" />
              <span className="relative">
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent" : "Send message"}
              </span>
            </motion.button>
          </div>

        </motion.form>
      </section>
    </main>
  );
}
