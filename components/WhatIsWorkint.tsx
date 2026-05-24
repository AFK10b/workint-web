"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HardHat, Eye, MapPin } from "lucide-react";

const stats = [
  { icon: HardHat, label: "Skilled trades covered", value: "50+" },
  { icon: MapPin, label: "Cities at launch", value: "6" },
  { icon: Eye, label: "Workers on waitlist", value: "2.4K" },
];

export default function WhatIsWorkint() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="what-is-workint"
      ref={ref}
      className="relative py-24 sm:py-32 px-4"
      aria-label="What is WorkInt"
    >
      {/* Divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(30,202,184,0.4), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">
                What is WorkInt?
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white">
                Work Intelligence —
                <br />
                for every skill
                <br />
                <span className="gradient-text">that matters.</span>
              </h2>
              <div className="space-y-4 text-white/60 text-base sm:text-lg leading-relaxed">
                <p>
                  Behind every city, every business, every dream — there&apos;s
                  someone skilled making it happen. Painters. Plumbers.
                  Electricians. Barbers. Delivery workers. Carpenters.
                </p>
                <p>
                  WorkInt gives every skilled worker a profile, a platform, and
                  a direct line to{" "}
                  <span className="text-white font-medium">
                    real opportunities near them
                  </span>{" "}
                  — no degree, no middlemen, no black holes.
                </p>
                <p className="text-brand-teal font-medium">
                  Your skills don&apos;t need validation. They need visibility.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats grid */}
          <motion.div
            className="grid grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glow-border rounded-2xl p-6 bg-surface-raised flex items-center gap-5 hover:bg-surface-overlay transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-teal/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-brand-teal" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-display font-bold text-2xl text-white">
                    {value}
                  </div>
                  <div className="text-sm text-white/50 mt-0.5">{label}</div>
                </div>
              </div>
            ))}

            {/* Mission card */}
            <div className="glow-border rounded-2xl p-6 bg-surface-raised overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30,202,184,0.4) 0%, rgba(37,99,235,0.2) 100%)",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-2">
                  Our mission
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  &ldquo;Every skill has value. Every person deserves a chance.
                  A better way to connect. A better way to work.&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" aria-hidden="true" />
                  <span className="text-xs text-brand-teal font-medium">
                    WorkInt — coming soon
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
