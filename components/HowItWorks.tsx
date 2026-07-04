"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Compass, Send, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create your capability profile",
    description:
      "Show what you can actually do — your services, availability, and work intent. No resume required.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Discover nearby capability",
    description:
      "Find people around you based on skills, services, location, and availability — not followers or job titles.",
  },
  {
    number: "03",
    icon: Send,
    title: "Send a WorkLink",
    description:
      "Create temporary work connections only when collaboration is genuinely needed.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Complete the work & move on",
    description:
      "No endless networking. No permanent inbox clutter. Finish the collaboration and keep your network intentional.",
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[04]</span>
            <span className="mono-label text-white/40">How it works</span>
            <span className="flex-1 h-px bg-gradient-to-r from-brand-teal/40 to-transparent" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
            Don&apos;t tell them.
            <br />
            <span className="text-outline">Show them.</span>
          </h2>
          <p className="mt-6 text-white/45 text-base max-w-xl">
            Discover nearby people through real-world capability and create
            focused WorkLinks only when collaboration is actually needed.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-[40px] left-[calc(12.5%+36px)] right-[calc(12.5%+36px)] h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(30,202,184,0.6) 0%, rgba(37,99,235,0.6) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map(({ number, icon: Icon, title, description }, i) => (
              <motion.div
                key={number}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.12,
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
                    <Icon size={26} className="text-brand-teal" aria-hidden="true" />
                  </div>
                  <div
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold font-display text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #1ECAB8 0%, #2563EB 100%)",
                    }}
                    aria-label={`Step ${i + 1}`}
                  >
                    {i + 1}
                  </div>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-teal/60 mb-2">
                  Step {number}
                </span>
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  {title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed max-w-[240px]">
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
