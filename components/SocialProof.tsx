"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@workint_",
    href: "https://www.instagram.com/workint_/",
    gradient: "from-pink-500 to-purple-600",
    text: "Follow our journey",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "WorkInt",
    href: "#",
    gradient: "from-blue-500 to-blue-700",
    text: "Connect with us",
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    handle: "@workint_",
    href: "#",
    gradient: "from-slate-600 to-slate-800",
    text: "Follow for updates",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "hello@workint.in",
    href: "mailto:hello@workint.in",
    gradient: "from-brand-teal to-brand-blue",
    text: "Say hello",
  },
];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 px-4 bg-surface-raised/20"
      aria-label="Follow WorkInt"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">
            Stay connected
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Follow the build.
            <br />
            <span className="gradient-text">Join the community.</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-md mx-auto">
            We&apos;re building WorkInt in the open. Follow along for sneak
            peeks, behind-the-scenes, and launch updates.
          </p>
        </motion.div>

        {/* Featured Instagram CTA */}
        <motion.a
          href="https://www.instagram.com/workint_/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          aria-label="Follow WorkInt on Instagram @workint_"
          className="group inline-flex flex-col sm:flex-row items-center justify-between gap-6 w-full max-w-xl mx-auto mb-10 p-6 rounded-2xl glow-border bg-surface-raised hover:bg-surface-overlay transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-teal/10"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <Instagram size={24} className="text-white" aria-hidden="true" />
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-white text-lg leading-tight">
                @workint_
              </div>
              <div className="text-sm text-white/40 mt-0.5">
                Building in public · Daily updates
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold group-hover:brightness-110 transition-all duration-200">
            Follow us
            <Instagram size={14} aria-hidden="true" />
          </div>
        </motion.a>

        {/* Other socials grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socials.map(({ icon: Icon, label, handle, href, gradient, text }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={`${text} on ${label}`}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl glow-border bg-surface-raised hover:bg-surface-overlay transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity duration-200`}
              >
                <Icon size={18} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <div className="font-display font-semibold text-white text-xs text-center">
                  {handle}
                </div>
                <div className="text-[10px] text-white/35 text-center mt-0.5">{text}</div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
