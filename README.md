# WORKINT — Launching Soon

A modern, fully responsive pre-launch website for WORKINT built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customisation checklist

### 1. Countdown date
Edit [`components/Countdown.tsx`](./components/Countdown.tsx), line 6:
```ts
export const LAUNCH_DATE = new Date("2026-06-24T00:00:00");
```

### 2. Email form endpoint
Edit [`components/EarlyAccess.tsx`](./components/EarlyAccess.tsx), line 12:
```ts
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
```
Create a free form at [formspree.io](https://formspree.io). The component falls back to a console.log + success state if the endpoint fails (safe for local dev).

### 3. Colors
Edit [`tailwind.config.ts`](./tailwind.config.ts) → `theme.extend.colors.brand`:
- `violet` / `violet-light` / `violet-dark` — primary purple
- `cyan` / `cyan-light` — accent teal

### 4. Social links
- Instagram: already wired to `https://www.instagram.com/workint_/`
- LinkedIn / X / WhatsApp: replace `href: "#"` in [`components/SocialProof.tsx`](./components/SocialProof.tsx) and [`components/Footer.tsx`](./components/Footer.tsx)

### 5. City / team details
Search for `Indore` in [`components/Footer.tsx`](./components/Footer.tsx) and update.

### 6. OG image
Replace `/public/og-image.png` (1200×630 px) for proper social sharing previews.

### 7. Waitlist count
Update the number in [`components/Hero.tsx`](./components/Hero.tsx) (`"2,400+"`) once real sign-ups roll in.

## File structure

```
app/
  layout.tsx        — metadata, fonts, global CSS import
  page.tsx          — section order
  globals.css       — base styles, custom utilities

components/
  Navbar.tsx        — sticky nav with scroll-triggered bg
  Hero.tsx          — headline, CTA buttons, countdown
  Countdown.tsx     — live timer (configurable date)
  WhatIsWorkint.tsx — brand explainer + stat cards
  Features.tsx      — 4-card feature grid with hover lift
  HowItWorks.tsx    — 3-step horizontal flow
  ForBothSides.tsx  — split section: seekers vs. employers
  SneakPeek.tsx     — animated phone mockup + floating cards
  EarlyAccess.tsx   — email form, confetti, success state
  SocialProof.tsx   — social links with featured IG CTA
  FAQ.tsx           — 5 collapsible Q&As
  Footer.tsx        — logo, links, socials, copyright

lib/
  utils.ts          — cn() helper (clsx + tailwind-merge)

public/
  favicon.svg
  og-image.png      — placeholder (replace with real 1200×630)
```

## Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and import at [vercel.com/new](https://vercel.com/new) — zero config needed.

## Tech stack

| Tool | Version |
|------|---------|
| Next.js | 14.2 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |
| lucide-react | 0.383 |
| canvas-confetti | 1.9 |
