"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserCheck, MapPin, Link2, Clock } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Capability-first profiles",
    description:
      "Show what you can actually do, not just resumes, certificates, or job titles.",
    gradient: "from-brand-teal/20 to-brand-teal/5",
    iconBg: "bg-brand-teal/15",
    iconColor: "text-brand-teal",
  },
  {
    icon: MapPin,
    title: "Nearby capability discovery",
    description:
      "Find people around you based on skills, services, and availability — from electricians to designers to developers.",
    gradient: "from-brand-blue/20 to-brand-blue/5",
    iconBg: "bg-brand-blue/15",
    iconColor: "text-brand-blue-light",
  },
  {
    icon: Link2,
    title: "Purpose-driven WorkLinks",
    description:
      "Create temporary work connections only when collaboration is actually needed. No endless networking. No inbox clutter.",
    gradient: "from-brand-teal/15 to-brand-blue/10",
    iconBg: "bg-brand-teal/10",
    iconColor: "text-brand-teal-light",
  },
  {
    icon: Clock,
    title: "Temporary by design",
    description:
      "Work relationships shouldn't become permanent inbox clutter. Complete the work, close the connection, and move forward.",
    gradient: "from-emerald-500/15 to-teal-500/5",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-24 sm:py-32 px-4 bg-surface-raised/30"
      aria-label="Key features"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[03]</span>
            <span className="mono-label text-white/40">Why WorkInt</span>
            <span className="flex-1 h-px bg-gradient-to-r from-brand-teal/40 to-transparent" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
            Small capabilities.
            <br />
            <span className="text-outline">Big impact.</span>
          </h2>
          <p className="mt-6 text-white/45 text-base max-w-xl">
            WorkInt helps people discover, connect, and collaborate through
            real-world capability.
          </p>
        </motion.div>

        {/* Cards — flat editorial grid with 1px dividers */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {features.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group relative p-7 bg-surface-base cursor-default overflow-hidden transition-colors duration-300"
            >
              {/* Hover fill sweep */}
              <div
                className="absolute inset-0 bg-brand-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative z-10 flex flex-col h-full min-h-[240px]">
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono text-xs text-brand-teal group-hover:text-surface-base/70 transition-colors duration-300">
                    0{i + 1}
                  </span>
                  <Icon
                    size={20}
                    className="text-white/40 group-hover:text-surface-base transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display font-bold uppercase text-lg leading-tight text-white group-hover:text-surface-base transition-colors duration-300 mb-3 mt-auto">
                  {title}
                </h3>
                <p className="text-sm text-white/50 group-hover:text-surface-base/80 leading-relaxed transition-colors duration-300">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
