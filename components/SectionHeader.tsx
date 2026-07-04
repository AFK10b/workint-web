"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  inView: boolean;
}

export default function SectionHeader({
  index,
  label,
  title,
  description,
  inView,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-14 sm:mb-20"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Index + label + rule */}
      <div className="flex items-center gap-4 mb-8">
        <span className="mono-label">
          [{index}]
        </span>
        <span className="mono-label text-white/40">{label}</span>
        <span className="flex-1 h-px bg-gradient-to-r from-brand-teal/40 to-transparent" aria-hidden="true" />
      </div>

      <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight max-w-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-white/45 text-base leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
