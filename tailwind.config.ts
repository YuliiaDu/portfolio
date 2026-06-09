import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base palette
        canvas:  "#F9F8F6",   // warm off-white — default background
        ink:     "#0E0E0E",   // near-black — dark sections, text
        stone:   "#6B6B6B",   // secondary text
        mist:    "#E8E6E1",   // subtle borders, dividers
        ember:   "#FF4D00",   // single accent — used sparingly
        // Dark section palette
        dark: {
          bg:      "#0E0E0E",
          surface: "#1A1A1A",
          border:  "#2A2A2A",
          text:    "#A8A8A8",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid type scale
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)",   { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)",  { lineHeight: "1.0",  letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)",{ lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.35rem, 2.5vw, 1.75rem)",{ lineHeight: "1.2",  letterSpacing: "-0.015em" }],
        "body-lg":    ["clamp(1.05rem, 1.5vw, 1.2rem)",{ lineHeight: "1.7", letterSpacing: "0" }],
        "body-sm":    ["0.875rem",                    { lineHeight: "1.6",  letterSpacing: "0.01em" }],
        "label":      ["0.75rem",                     { lineHeight: "1",    letterSpacing: "0.1em" }],
      },
      spacing: {
        section: "clamp(5rem, 10vw, 9rem)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        "out-expo":   "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-soft":"cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      gridTemplateColumns: {
        "project": "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;
