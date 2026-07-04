"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck, Link2, MapPin } from "lucide-react";

const featureCards = [
  {
    icon: BadgeCheck,
    title: "Capability-first profiles",
    subtitle: "Built around what people can actually do",
  },
  {
    icon: Link2,
    title: "Temporary WorkLinks",
    subtitle: "Focused work connections without inbox clutter",
  },
  {
    icon: MapPin,
    title: "Nearby discovery",
    subtitle: "Find people based on location and capability",
  },
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

      <div className="max-w-6xl mx-auto">
        {/* Index rule */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mono-label">[01]</span>
          <span className="mono-label text-white/40">What is WorkInt?</span>
          <span className="flex-1 h-px bg-gradient-to-r from-brand-teal/40 to-transparent" aria-hidden="true" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl leading-[0.95] tracking-tight mb-6 text-white">
                Work Intelligence
                <br />
                for every skill
                <br />
                <span className="text-outline">that matters.</span>
              </h2>
              <div className="space-y-4 text-white/60 text-base sm:text-lg leading-relaxed">
                <p>
                  Behind every city, every business, and every project... there
                  are people with real capabilities making things happen.
                </p>
                <p>
                  WorkInt helps people discover nearby skills, services, and
                  collaborators based on what they can actually do.{" "}
                  <span className="text-white font-medium">
                    No resumes. No endless networking.
                  </span>{" "}
                  Just focused work connections when they are genuinely needed.
                </p>
                <p className="text-brand-teal font-medium">
                  Real capability should lead to real work, not disappear behind
                  resumes and algorithms.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Feature cards + Mission */}
          <motion.div
            className="grid grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {featureCards.map(({ icon: Icon, title, subtitle }) => (
              <div
                key={title}
                className="glow-border rounded-2xl p-6 bg-surface-raised flex items-center gap-5 hover:bg-surface-overlay transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-teal/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-brand-teal" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-display font-semibold text-base text-white">
                    {title}
                  </div>
                  <div className="text-sm text-white/50 mt-0.5">{subtitle}</div>
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
                  Why WorkInt exists
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Most platforms optimize for networking. WorkInt optimizes for
                  getting real work done. We believe people should connect
                  through capability, collaborate intentionally, and move on
                  when the work is complete.
                </p>
                <div className="mt-3 flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse"
                    aria-hidden="true"
                  />
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
