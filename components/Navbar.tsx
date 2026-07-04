"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 bg-surface-base/80 backdrop-blur-md border-b border-surface-border/50"
        style={{ opacity: bgOpacity }}
      />
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center group"
          aria-label="WorkInt home"
        >
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:opacity-90 transition-opacity duration-200">
            Work
          </span>
          <span className="font-display font-bold text-xl tracking-tight text-brand-teal group-hover:opacity-90 transition-opacity duration-200">
            Int
          </span>
        </a>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {[
            ["01", "Features", "#features"],
            ["02", "How it works", "#how-it-works"],
            ["03", "FAQ", "#faq"],
          ].map(([num, label, href]) => (
            <a
              key={label}
              href={href}
              className="group font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-200"
            >
              <span className="text-brand-teal/60 group-hover:text-brand-teal mr-1.5">{num}.</span>
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/workint_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow WorkInt on Instagram"
            className="text-white/50 hover:text-brand-teal transition-colors duration-200"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#early-access"
            className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-display font-semibold uppercase tracking-wider bg-brand-teal hover:bg-brand-teal-light text-surface-base transition-all duration-200 hover:shadow-lg hover:shadow-brand-teal/25"
          >
            Get early access
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
