"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Countdown from "./Countdown";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-24 overflow-hidden noise-overlay"
      aria-label="Hero section"
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(30,202,184,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(30,202,184,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Floating grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,202,184,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(30,202,184,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">
        {/* Launching soon badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glow-border bg-surface-raised text-sm font-medium text-brand-teal">
            <Sparkles size={14} className="animate-pulse-slow" aria-hidden="true" />
            <span>Launching Soon — June 2026</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-balance"
        >
          Talent is everywhere.
          <br />
          <span className="gradient-text">Opportunities are not.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="max-w-2xl text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed text-balance"
        >
          WorkInt helps people discover nearby skills, services, and
          collaborators based on real-world capability, not resumes, followers,
          or degrees. Create focused work connections only when work actually
          needs to happen.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
        >
          <a
            href="#early-access"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-display font-semibold text-base bg-brand-teal hover:bg-brand-teal-light text-surface-base transition-all duration-200 hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Join Early Access
          </a>
          <a
            href="#worklinks"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-display font-semibold text-base glow-border bg-surface-raised text-white/80 hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            See How WorkLinks Work
          </a>
        </motion.div>

        {/* Brand line */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.35}
          className="text-sm font-medium tracking-wide"
          style={{
            background: "linear-gradient(135deg, #1ECAB8 0%, #2563EB 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          A capability-based network for temporary work collaboration.
        </motion.p>

        {/* Countdown */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs text-white/30 uppercase tracking-widest font-medium">
            Launching in
          </span>
          <Countdown />
        </motion.div>

        {/* Social proof nudge */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="text-sm text-white/35"
        >
          Join{" "}
          <span className="text-brand-teal font-semibold">2,400+</span>{" "}
          people building the future of work
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
