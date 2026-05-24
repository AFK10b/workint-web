"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, IndianRupee, Users } from "lucide-react";

const workerPerks = [
  "Verified skill profile, visible near you",
  "Listed by reviews & experience score",
  "Direct client chat — no middleman cut",
  "Pause or cancel anytime",
  "Early access users locked in at launch price",
];

const clientPerks = [
  "Browse all skill profiles for free",
  "Filter by location, skill & rating",
  "Direct messaging with workers",
  "No commission on any hire",
  "Post requirements & get matched",
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 px-4"
      aria-label="Pricing"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(30,202,184,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">
            Pricing
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Enter the market
            <br />
            <span className="gradient-text">for less than a cup of tea.</span>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-lg mx-auto">
            Pay once. Get discovered. Get hired. The fee pays for itself
            the moment your first client calls.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Daily plan */}
          <motion.div
            className="relative rounded-3xl p-8 glow-border bg-surface-raised overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(30,202,184,0.1), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/15 flex items-center justify-center mb-5">
                <IndianRupee size={18} className="text-brand-teal" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-2">
                Daily Pass
              </p>
              <div className="flex items-end gap-1 mb-1">
                <span className="font-display font-bold text-5xl text-white">₹20</span>
                <span className="text-white/40 text-sm mb-2">/day</span>
              </div>
              <p className="text-sm text-white/40 mb-7">
                Try it out. Pay only when you want to be listed.
              </p>
              <ul className="space-y-3 mb-8">
                {workerPerks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-brand-teal/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={10} className="text-brand-teal" aria-hidden="true" />
                    </span>
                    <span className="text-xs text-white/60">{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#early-access"
                className="block w-full text-center py-3 rounded-xl font-display font-semibold text-sm glow-border bg-surface-overlay text-white hover:bg-surface-overlay/80 transition-all duration-200"
              >
                Join waitlist
              </a>
            </div>
          </motion.div>

          {/* Monthly plan — featured */}
          <motion.div
            className="relative rounded-3xl p-8 overflow-hidden lg:-mt-4 lg:-mb-4"
            style={{
              background:
                "linear-gradient(145deg, #1a3050 0%, #122233 100%)",
              border: "1.5px solid rgba(30,202,184,0.5)",
              boxShadow: "0 0 60px rgba(30,202,184,0.12), 0 20px 60px rgba(0,0,0,0.4)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          >
            {/* Most popular badge */}
            <div className="absolute top-4 right-4">
              <span
                className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-surface-base"
                style={{
                  background: "linear-gradient(135deg, #1ECAB8 0%, #2563EB 100%)",
                }}
              >
                Best value
              </span>
            </div>
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top left, rgba(30,202,184,0.6), transparent 60%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "linear-gradient(135deg, #1ECAB8 0%, #2563EB 100%)" }}
              >
                <IndianRupee size={18} className="text-white" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-2">
                Monthly Access
              </p>
              <div className="flex items-end gap-1 mb-1">
                <span className="font-display font-bold text-5xl text-white">₹300</span>
                <span className="text-white/40 text-sm mb-2">/month</span>
              </div>
              <p className="text-brand-teal text-sm font-medium mb-1">
                Equivalent to just ₹10/day
              </p>
              <p className="text-sm text-white/40 mb-7">
                Stay listed all month. More visibility, more hires, more income.
              </p>
              <ul className="space-y-3 mb-8">
                {workerPerks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={10} className="text-brand-teal" aria-hidden="true" />
                    </span>
                    <span className="text-xs text-white/70">{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#early-access"
                className="block w-full text-center py-3 rounded-xl font-display font-semibold text-sm text-surface-base transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #1ECAB8 0%, #2563EB 100%)",
                }}
              >
                Join waitlist — lock in price
              </a>
            </div>
          </motion.div>

          {/* Free for clients */}
          <motion.div
            className="relative rounded-3xl p-8 glow-border bg-surface-raised overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(37,99,235,0.1), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/15 flex items-center justify-center mb-5">
                <Users size={18} className="text-brand-blue-light" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue-light mb-2">
                For Clients
              </p>
              <div className="flex items-end gap-1 mb-1">
                <span className="font-display font-bold text-5xl text-white">Free</span>
              </div>
              <p className="text-sm text-white/40 mb-7">
                Browse, message, and hire — always free for clients.
              </p>
              <ul className="space-y-3 mb-8">
                {clientPerks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-brand-blue/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={10} className="text-brand-blue-light" aria-hidden="true" />
                    </span>
                    <span className="text-xs text-white/60">{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#early-access"
                className="block w-full text-center py-3 rounded-xl font-display font-semibold text-sm glow-border bg-surface-overlay text-white hover:bg-surface-overlay/80 transition-all duration-200"
              >
                Join waitlist
              </a>
            </div>
          </motion.div>
        </div>

        {/* Confidence line */}
        <motion.p
          className="text-center mt-10 text-sm text-white/30"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          Early waitlist users get{" "}
          <span className="text-brand-teal font-semibold">1 month free</span> at launch.
          No credit card required to join the list.
        </motion.p>
      </div>
    </section>
  );
}
