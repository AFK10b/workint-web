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
          className="text-center mb-14 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">
            Why WorkInt
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Small capabilities.
            <br />
            <span className="gradient-text">Big impact.</span>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-lg mx-auto">
            WorkInt helps people discover, connect, and collaborate through
            real-world capability.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {features.map(({ icon: Icon, title, description, gradient, iconBg, iconColor }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group relative rounded-2xl p-6 glow-border bg-surface-raised cursor-default hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-teal/10 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none`}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div
                  className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-5`}
                  aria-hidden="true"
                >
                  <Icon size={20} className={iconColor} />
                </div>
                <h3 className="font-display font-semibold text-base text-white mb-2">
                  {title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
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
