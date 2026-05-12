# Yuliia Dudareva — Portfolio

A premium, Apple-inspired portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Deploy to Vercel (step by step)

### 1 — Push to GitHub

```bash
# Inside the portfolio/ folder:
git init
git add .
git commit -m "Initial commit"

# Create a new repo at github.com (no README, no .gitignore)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### 2 — Deploy on Vercel

1. Go to **vercel.com** → **Add New Project**
2. Click **Import** next to your GitHub repo
3. Framework is auto-detected as **Next.js** — no changes needed
4. Click **Deploy**

Live at `https://your-repo-name.vercel.app` in ~60 seconds.

### 3 — Custom domain (optional)

Vercel project → **Settings → Domains** → add `yourdomain.com`

---

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout — fonts, Navbar, Footer
│   ├── globals.css             # Design tokens, Tailwind base
│   ├── page.tsx                # Home page
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── projects/
│       ├── page.tsx
│       └── [slug]/page.tsx     # Case study
├── components/
│   ├── layout/                 # Navbar, Footer, PageTransition
│   ├── sections/               # Hero, FeaturedProjects, Disciplines…
│   └── ui/                     # ScrollReveal, ProjectCard, SectionLabel
├── data/
│   ├── projects.ts             # ← Edit your projects here
│   └── about.ts                # ← Edit your bio here
├── lib/
│   ├── motion.ts               # Framer Motion variants
│   └── utils.ts
├── tailwind.config.ts          # Full design token system
└── next.config.mjs
```

---

## Edit your content

All copy lives in `/data/` — no touching components needed.

**Add a project** in `data/projects.ts`:
```ts
{
  slug: "my-project", title: "My Project",
  category: "Product Design", year: "2024",
  description: "One punchy sentence.",
  coverImage: "https://images.unsplash.com/...",
  tags: ["Mobile", "iOS"], featured: true,
  problem: "...", process: "...", solution: "...", outcome: "...",
  sections: [],
}
```

---

## Design tokens

| Token    | Value      | Usage              |
|----------|------------|--------------------|
| canvas   | #F9F8F6    | Default background |
| ink      | #0E0E0E    | Text, dark sections|
| stone    | #6B6B6B    | Secondary text     |
| mist     | #E8E6E1    | Borders, card bg   |
| ember    | #FF4D00    | Accent — sparingly |

Fonts: **Fraunces** (display) + **DM Sans** (body) via `next/font` — zero layout shift.
