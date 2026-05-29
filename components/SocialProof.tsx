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
    border: "rgba(236,72,153,0.35)",
    glow: "rgba(236,72,153,0.08)",
    text: "Follow our journey",
    cta: "Follow us",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "WorkInt",
    href: "#",
    gradient: "from-blue-500 to-blue-700",
    border: "rgba(59,130,246,0.35)",
    glow: "rgba(59,130,246,0.08)",
    text: "Connect with us",
    cta: "Connect",
  },
  {
    icon: Twitter,
    label: "X / Twitter",
    handle: "@workint_",
    href: "#",
    gradient: "from-slate-500 to-slate-700",
    border: "rgba(100,116,139,0.35)",
    glow: "rgba(100,116,139,0.08)",
    text: "Follow for updates",
    cta: "Follow",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "connect@workint.in",
    href: "mailto:connect@workint.in",
    gradient: "from-brand-teal to-brand-blue",
    border: "rgba(30,202,184,0.35)",
    glow: "rgba(30,202,184,0.08)",
    text: "Say hello",
    cta: "Say hello",
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

        {/* Social cards — all uniform */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {socials.map(({ icon: Icon, label, handle, href, gradient, border, glow, text, cta }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={`${cta} on ${label}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.08 }}
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden relative"
              style={{
                background: `linear-gradient(145deg, #122233, #0d1b2a)`,
                border: `1.5px solid ${border}`,
                boxShadow: `0 0 30px ${glow}`,
              }}
            >
              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at top, ${glow} 0%, transparent 70%)`,
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col items-center gap-3 w-full">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center`}
                >
                  <Icon size={22} className="text-white" aria-hidden="true" />
                </div>

                {/* Text */}
                <div>
                  <div className="font-display font-bold text-white text-sm leading-tight">
                    {handle}
                  </div>
                  <div className="text-[11px] text-white/40 mt-0.5">{text}</div>
                </div>

                {/* CTA */}
                <div
                  className={`w-full text-center text-[11px] font-semibold py-1.5 rounded-lg bg-gradient-to-r ${gradient} text-white opacity-80 group-hover:opacity-100 transition-opacity duration-200`}
                >
                  {cta} →
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Straight answers line */}
        <motion.p
          className="mt-10 text-sm text-white/25 italic"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          Straight answers. No fluff.
        </motion.p>
      </div>
    </section>
  );
}
