"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HardHat, Building2, Check, IndianRupee } from "lucide-react";

const workerBenefits = [
  "Verified skill profile visible to clients near you",
  "Listed based on reviews & background experience",
  "Direct chat — no agency commission on your earnings",
  "Set your own rates and availability",
  "Daily or monthly access — your choice",
  "One hire often covers your entire month's plan",
];

const employerBenefits = [
  "Browse verified skilled workers in your area",
  "Profiles ranked by reviews and experience",
  "Post a requirement in under 5 minutes",
  "Direct messaging — no middlemen, no commission",
  "Hire painters, plumbers, coders, barbers & more",
  "First hire is always free for clients",
];

export default function ForBothSides() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 px-4 bg-surface-raised/20"
      aria-label="For workers and employers"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">
            Built for both sides
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Whether you work
            <br />
            <span className="gradient-text">or need the work done.</span>
          </h2>
        </motion.div>

        {/* Two-column split */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Workers */}
          <motion.div
            className="relative rounded-3xl p-8 sm:p-10 overflow-hidden glow-border bg-surface-raised"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div
              className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(30,202,184,0.12), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/15 flex items-center justify-center">
                  <HardHat size={20} className="text-brand-teal" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-sm">
                    For Skilled Workers
                  </div>
                  <div className="text-xs text-white/40">
                    Trades · Services · Labour · Tech — all skills
                  </div>
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Your background
                <br />
                shouldn&apos;t limit
                <br />
                <span className="text-brand-teal">your future.</span>
              </h3>
              <p className="text-sm text-white/50 mb-6 leading-relaxed">
                Pay a small daily or monthly fee to enter the marketplace —
                get listed in front of clients actively looking for your skill,
                right in your area. One hire and your fee pays for itself many
                times over.
              </p>

              {/* Pricing callout */}
              <div
                className="rounded-2xl p-4 mb-7 flex items-center gap-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30,202,184,0.12) 0%, rgba(37,99,235,0.07) 100%)",
                  border: "1px solid rgba(30,202,184,0.25)",
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                  <IndianRupee size={18} className="text-brand-teal" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white font-display font-bold text-sm">
                    ₹20/day &nbsp;·&nbsp; ₹300/month
                  </p>
                  <p className="text-white/45 text-xs mt-0.5">
                    Get hired 3–4 times a day. Do the maths.
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {workerBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-teal/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-brand-teal" aria-hidden="true" />
                    </span>
                    <span className="text-sm text-white/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Employers / Clients */}
          <motion.div
            className="relative rounded-3xl p-8 sm:p-10 overflow-hidden glow-border bg-surface-raised"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div
              className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(37,99,235,0.12), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/15 flex items-center justify-center">
                  <Building2 size={20} className="text-brand-blue-light" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-sm">
                    For Employers &amp; Clients
                  </div>
                  <div className="text-xs text-white/40">
                    Businesses · Homeowners · Startups
                  </div>
                </div>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Find skilled people
                <br />
                near you —
                <br />
                <span className="text-brand-blue-light">fast.</span>
              </h3>
              <p className="text-sm text-white/50 mb-6 leading-relaxed">
                Need a painter tomorrow? An electrician this weekend? A developer
                next week? Browse verified, reviewed skill profiles in your area
                and connect directly — no agency fees, no waiting.
              </p>

              {/* Free for clients callout */}
              <div
                className="rounded-2xl p-4 mb-7 flex items-center gap-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(30,202,184,0.06) 100%)",
                  border: "1px solid rgba(37,99,235,0.25)",
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                  <Building2 size={18} className="text-brand-blue-light" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white font-display font-bold text-sm">
                    Free to browse &amp; hire
                  </p>
                  <p className="text-white/45 text-xs mt-0.5">
                    Clients pay nothing. Workers are pre-vetted for you.
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {employerBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-blue/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-brand-blue-light" aria-hidden="true" />
                    </span>
                    <span className="text-sm text-white/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Professional track note */}
        <motion.div
          className="mt-8 rounded-2xl p-5 glow-border bg-surface-raised/60 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-white/45">
            <span className="text-white/70 font-medium">Also building</span> — a separate
            professional hiring track for office roles, tech jobs &amp; white-collar recruitment.{" "}
            <a href="#faq" className="text-brand-teal hover:underline">
              Learn more →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
