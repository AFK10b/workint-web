"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Send,
  CheckCircle,
  MessageSquare,
  Flag,
  Shield,
  Clock,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Discover people",
    description: "Find nearby people by capability, service, or work type.",
  },
  {
    number: "02",
    icon: Send,
    title: "Send a WorkLink",
    description: "Send a work request with clear purpose and requirements.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Get accepted",
    description: "They review and accept if it's a good fit.",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Collaborate",
    description: "Discuss, share updates and get the work done together.",
  },
  {
    number: "05",
    icon: Flag,
    title: "Work complete",
    description:
      "Mark complete and close the WorkLink. Keep your network clean.",
  },
];

const badges = [
  {
    icon: Shield,
    label: "Purpose-driven",
    sub: "Every connection has a reason. No spam. No noise.",
  },
  {
    icon: Clock,
    label: "Temporary by design",
    sub: "WorkLinks exist only for as long as the work does.",
  },
  {
    icon: MessageCircle,
    label: "Focused communication",
    sub: "Chat only for active WorkLinks. No inbox clutter.",
  },
  {
    icon: Sparkles,
    label: "Clean network",
    sub: "Complete the work and move forward. That's it.",
  },
];

export default function WorkLinks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="worklinks"
      ref={ref}
      className="relative py-24 sm:py-32 px-4 bg-surface-raised/20"
      aria-label="How WorkLinks work"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">
            How WorkLink works
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Not every connection
            <br />
            <span className="gradient-text">should last forever.</span>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-xl mx-auto">
            WorkLink creates temporary, purpose-driven work relationships.
            Connect, collaborate, complete — and move on.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mb-14">
          {/* Connecting line — desktop */}
          <div
            className="hidden lg:block absolute top-[26px] left-[10%] right-[10%] h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(30,202,184,0.5) 0%, rgba(37,99,235,0.5) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
            {steps.map(({ number, icon: Icon, title, description }, i) => (
              <motion.div
                key={number}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.1,
                }}
              >
                {/* Icon circle */}
                <div className="relative mb-5 bg-surface-base rounded-full">
                  <div
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(30,202,184,0.2) 0%, rgba(37,99,235,0.15) 100%)",
                      border: "1px solid rgba(30,202,184,0.4)",
                    }}
                  >
                    <Icon size={20} className="text-brand-teal" aria-hidden="true" />
                  </div>
                  <div
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold font-display text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #1ECAB8 0%, #2563EB 100%)",
                    }}
                    aria-label={`Step ${i + 1}`}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="glow-border rounded-2xl p-5 bg-surface-raised w-full hover:bg-surface-overlay transition-colors duration-300 flex-1">
                  <h3 className="font-display font-semibold text-sm text-white mb-2 leading-tight">
                    {title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom badges */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {badges.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="rounded-2xl p-4 glow-border bg-surface-raised/60 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={14} className="text-brand-teal" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white leading-tight">
                  {label}
                </p>
                <p className="text-[11px] text-white/40 mt-0.5 leading-relaxed">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
