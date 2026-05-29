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
  const [emailError, setEmailError] = useState<string | null>(null);
  const [touched, setTouched] = useState<{ email?: boolean }>({});

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

    // Validate email before sending
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();

    const emailValid = validateEmail(email);
    setTouched((t) => ({ ...t, email: true }));
    if (!emailValid) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError(null);
    setStatus("sending");

    // Post to server — reuse existing formData
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: String(formData.get('name') || ''),
        email: String(formData.get('email') || ''),
        message: String(formData.get('message') || ''),
      }),
    })
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) {
          if (res.status === 400 && json.error === 'Invalid input') {
            setEmailError('Please enter a valid email address');
            setStatus('idle');
            return;
          }
          throw new Error(json.error || 'Unknown error');
        }
        setStatus('sent');
        form.reset();
        setTouched({});
      })
      .catch((err) => {
        console.error('Send failed', err);
        setStatus('idle');
        // Optionally surface a general error message
      });
  };

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();
    setTouched((t) => ({ ...t, email: true }));
    if (!validateEmail(val)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError(null);
    }
  };

  function validateEmail(email: string) {
    // Simple RFC-5322-ish validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

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
        className="relative mx-auto min-h-screen max-w-6xl px-6 py-section md:px-10"
      >
        <div className="mx-auto lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-[1fr_520px] lg:items-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[36rem] lg:col-start-1"
          >
          <p className="text-label uppercase tracking-widest text-dark-text mb-5">
            Let’s connect
          </p>
          <h1 className="font-display text-3xl md:text-[86px] leading-none tracking-[-0.03em]">
            <span className="block text-canvas">Let's build</span>
            <span className="block text-canvas italic font-light">something</span>
            <span className="block" style={{ color: "#FF4D00" }}>together.</span>
          </h1>
          <p className="mt-6 text-[16px] md:text-body-lg text-dark-text max-w-[42ch]">
            I design calm, intelligent product experiences with a premium, minimal feel.
            If you’re looking for a thoughtful collaboration, send a note below.
          </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            className="mt-12 lg:mt-0 grid gap-8 rounded-[2rem] bg-ink/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:p-10 lg:col-start-2"
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
                className="min-h-[4.5rem] form-input placeholder:text-dark-text/70 outline-none"
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
                aria-invalid={!!emailError}
                aria-describedby={emailError ? 'email-error' : undefined}
                onBlur={handleEmailBlur}
                className={`min-h-[4.5rem] form-input placeholder:text-dark-text/70 outline-none ${emailError ? 'error' : ''}`}
              />
              {emailError && (
                <p id="email-error" role="alert" className="form-error-text">
                  {emailError}
                </p>
              )}
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
              className="min-h-[14rem] form-input px-5 py-5 text-canvas placeholder:text-dark-text/70 outline-none"
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
              disabled={status === 'sending'}
              aria-busy={status === 'sending'}
              className={`relative inline-flex items-center justify-center overflow-hidden rounded-[1.75rem] border border-ember/20 bg-ember px-7 py-4 text-body-sm font-medium text-ink transition-shadow duration-300 hover:shadow-[0_18px_60px_rgba(255,77,0,0.24)] ${status === 'sending' ? 'opacity-70 pointer-events-none' : ''}`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-canvas/10 to-transparent opacity-0 transition-opacity duration-400" />
              <span className="relative whitespace-nowrap">
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent" : "Send message"}
              </span>
            </motion.button>
          </div>

        </motion.form>
        </div>
      </section>
    </main>
  );
}
