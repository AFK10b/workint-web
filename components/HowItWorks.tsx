"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Eye, Handshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Build your profile",
    description:
      "Add your skills, trade, location, and availability. Takes 2 minutes. No degree or document required.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Get discovered",
    description:
      "Clients and employers in your area find you based on what you can actually do — not your background.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Connect & work",
    description:
      "Chat directly, agree on terms, and get to work. Real opportunities. Real income. No middlemen.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-24 sm:py-32 px-4"
      aria-label="How WorkInt works"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">
            How it works
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Don&apos;t tell them.
            <br />
            <span className="gradient-text">Show them.</span>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-md mx-auto">
            Three steps and your skills are visible to everyone near you.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-[52px] left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(30,202,184,0.6) 0%, rgba(37,99,235,0.6) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 relative z-10">
            {steps.map(({ number, icon: Icon, title, description }, i) => (
              <motion.div
                key={number}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.15,
                }}
              >
                <div className="relative mb-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(30,202,184,0.2) 0%, rgba(37,99,235,0.15) 100%)",
                      border: "1px solid rgba(30,202,184,0.4)",
                    }}
                  >
                    <Icon size={28} className="text-brand-teal" aria-hidden="true" />
                  </div>
                  <div
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold font-display text-white"
                    style={{ background: "linear-gradient(135deg, #1ECAB8 0%, #2563EB 100%)" }}
                    aria-label={`Step ${number}`}
                  >
                    {i + 1}
                  </div>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-teal/60 mb-2">
                  Step {number}
                </span>
                <h3 className="font-display font-bold text-xl text-white mb-3">{title}</h3>
                <p className="text-sm text-white/55 leading-relaxed max-w-[260px]">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
