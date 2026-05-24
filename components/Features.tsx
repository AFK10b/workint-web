"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, MapPin, Handshake, Layers } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Your Skills Get Seen",
    description:
      "Build a skill profile in minutes. Employers and clients near you discover you — you don't have to chase them.",
    gradient: "from-brand-teal/20 to-brand-teal/5",
    iconBg: "bg-brand-teal/15",
    iconColor: "text-brand-teal",
  },
  {
    icon: MapPin,
    title: "Local Opportunities",
    description:
      "Opportunities near you. Find work in your city — whether you're a painter in Indore or an electrician in Mumbai.",
    gradient: "from-brand-blue/20 to-brand-blue/5",
    iconBg: "bg-brand-blue/15",
    iconColor: "text-brand-blue-light",
  },
  {
    icon: Handshake,
    title: "Direct Connect",
    description:
      "No agencies. No commission cuts. Chat directly with employers or clients and agree on your own terms.",
    gradient: "from-brand-teal/15 to-brand-blue/10",
    iconBg: "bg-brand-teal/10",
    iconColor: "text-brand-teal-light",
  },
  {
    icon: Layers,
    title: "₹20 to Enter the Market",
    description:
      "₹20/day or ₹300/month. Get hired 3–4 times a day. The math works — every single time.",
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
            Small skills.
            <br />
            <span className="gradient-text">Big impact.</span>
          </h2>
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
