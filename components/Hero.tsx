"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Countdown from "./Countdown";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const trades = [
  "Electricians",
  "Painters",
  "Barbers",
  "Developers",
  "Carpenters",
  "Plumbers",
  "Designers",
  "Mechanics",
  "Welders",
  "Photographers",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-4 pt-24 pb-0 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 75% 20%, rgba(30,202,184,0.1) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 15% 80%, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,202,184,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(30,202,184,0.8) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Technical meta row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10"
        >
          <span className="mono-label">[ Est. 2026 ]</span>
          <span className="mono-label text-white/35">Skill network — India</span>
          <span className="hidden sm:block flex-1 h-px bg-white/10" aria-hidden="true" />
          <span className="mono-label text-white/35 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" aria-hidden="true" />
            Launching 01 . 08 . 2026
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display font-bold uppercase tracking-tight leading-[0.92] mb-10">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="block text-[13vw] sm:text-7xl lg:text-8xl xl:text-[7rem] text-white"
          >
            Talent is
          </motion.span>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.18}
            className="block text-[13vw] sm:text-7xl lg:text-8xl xl:text-[7rem] text-white"
          >
            everywhere.
          </motion.span>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.26}
            className="block text-[13vw] sm:text-7xl lg:text-8xl xl:text-[7rem] text-outline"
          >
            Opportunities
          </motion.span>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.34}
            className="block text-[13vw] sm:text-7xl lg:text-8xl xl:text-[7rem] text-outline"
          >
            are not.
          </motion.span>
        </h1>

        {/* Sub + CTAs row */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.42}
            className="text-base sm:text-lg text-white/55 leading-relaxed max-w-lg"
          >
            WorkInt helps people discover nearby skills, services, and
            collaborators based on real-world capability — not resumes,
            followers, or degrees. Focused work connections, only when work
            actually needs to happen.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
            className="flex flex-col sm:flex-row lg:justify-end items-stretch sm:items-center gap-3"
          >
            <a
              href="#early-access"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-display font-semibold text-sm uppercase tracking-wider bg-brand-teal text-surface-base hover:bg-brand-teal-light transition-all duration-200"
            >
              Join Early Access
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
            </a>
            <a
              href="#worklinks"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-display font-semibold text-sm uppercase tracking-wider border border-white/20 text-white/80 hover:border-brand-teal hover:text-brand-teal transition-all duration-200"
            >
              How WorkLinks Work
            </a>
          </motion.div>
        </div>

        {/* Countdown row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.58}
          className="flex flex-col sm:flex-row sm:items-center gap-5 border-t border-white/10 pt-8 pb-16"
        >
          <span className="mono-label text-white/35">T-minus</span>
          <Countdown />
          <span className="hidden lg:block flex-1" aria-hidden="true" />
          <p className="text-sm text-white/35">
            <span className="text-brand-teal font-semibold">2,400+</span>{" "}
            people building the future of work
          </p>
        </motion.div>
      </div>

      {/* Skills marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative z-10 -mx-4 border-y border-white/10 bg-surface-raised/40 py-4 overflow-hidden"
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[...trades, ...trades].map((trade, i) => (
            <span
              key={`${trade}-${i}`}
              className="flex items-center gap-6 pr-6 font-display font-bold uppercase text-lg sm:text-xl whitespace-nowrap"
            >
              <span className={i % 2 === 0 ? "text-white/70" : "text-outline-white"}>
                {trade}
              </span>
              <span className="text-brand-teal text-sm">✦</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-24 right-8 hidden xl:flex flex-col items-center gap-3 text-white/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="mono-label text-white/25" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
