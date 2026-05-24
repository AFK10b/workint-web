"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Star, MessageCircle, TrendingUp } from "lucide-react";

const floatingCards = [
  {
    icon: Briefcase,
    title: "New match!",
    sub: "Electrician needed · Indore",
    color: "text-brand-teal",
    bg: "bg-brand-teal/15",
    border: "border-brand-teal/30",
    delay: 0,
    position: "-top-4 -right-8 sm:-right-16",
  },
  {
    icon: Star,
    title: "Skill score: 94%",
    sub: "React · TypeScript · Git",
    color: "text-brand-blue-light",
    bg: "bg-brand-blue/15",
    border: "border-brand-blue/25",
    delay: 0.15,
    position: "top-1/3 -right-6 sm:-right-14",
  },
  {
    icon: MessageCircle,
    title: "Message from Riya",
    sub: '"We loved your profile 👋"',
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/25",
    delay: 0.3,
    position: "bottom-12 -right-4 sm:-right-12",
  },
];

export default function SneakPeek() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 px-4 overflow-hidden"
      aria-label="App sneak peek"
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(30,202,184,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">
            Sneak peek
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            A glimpse of
            <br />
            <span className="gradient-text">what&apos;s coming.</span>
          </h2>
        </motion.div>

        {/* Mockup area */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Phone frame */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative"
            >
              {/* Phone shell */}
              <div
                className="relative w-[260px] sm:w-[300px] rounded-[3rem] overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #1a2f45, #0d1b2a)",
                  border: "1.5px solid rgba(30,202,184,0.35)",
                  boxShadow:
                    "0 0 0 1px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(30,202,184,0.08)",
                }}
              >
                {/* Notch */}
                <div className="flex justify-center pt-4 pb-2">
                  <div className="w-20 h-6 rounded-full bg-surface-base/80" />
                </div>

                {/* Screen content */}
                <div className="px-4 pb-8 space-y-3 min-h-[480px]">
                  {/* App header */}
                  <div className="flex items-center justify-between py-2">
                    <span className="font-display font-bold text-white text-sm">
                      Work<span className="text-brand-teal">Int</span>
                    </span>
                    <div className="w-7 h-7 rounded-full bg-brand-teal/20 flex items-center justify-center">
                      <TrendingUp size={12} className="text-brand-teal" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Greeting */}
                  <div>
                    <p className="text-[10px] text-white/40">Good morning 👋</p>
                    <p className="font-display font-semibold text-white text-sm">
                      3 new matches today
                    </p>
                  </div>

                  {/* Match cards */}
                  {[
                    { role: "Electrician", company: "BuildRight Co.", match: 97, color: "#1ECAB8" },
                    { role: "Painter", company: "HomeReno Ltd.", match: 91, color: "#2563EB" },
                    { role: "Web Developer", company: "Tech Studio", match: 85, color: "#3DDFD0" },
                  ].map(({ role, company, match, color }) => (
                    <div
                      key={role}
                      className="rounded-xl p-3 bg-surface-raised/80 border border-white/5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-display font-semibold text-white text-xs leading-tight">
                            {role}
                          </p>
                          <p className="text-[10px] text-white/40 mt-0.5">{company}</p>
                        </div>
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{ background: `${color}25`, color }}
                        >
                          {match}% match
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="mt-2 h-0.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${match}%`, background: color }}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Quick stats row */}
                  <div className="flex gap-2 mt-2">
                    {[
                      { label: "Applied", val: "12" },
                      { label: "Viewed", val: "8" },
                      { label: "Replies", val: "5" },
                    ].map(({ label, val }) => (
                      <div
                        key={label}
                        className="flex-1 rounded-xl p-2 text-center bg-surface-raised/60 border border-white/5"
                      >
                        <p className="font-display font-bold text-white text-sm">{val}</p>
                        <p className="text-[9px] text-white/40 mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="flex justify-around py-4 border-t border-white/5">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-5 h-1 rounded-full ${i === 0 ? "bg-brand-teal" : "bg-white/15"}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              {/* Glow under phone */}
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-8 rounded-full blur-2xl"
                style={{ background: "rgba(30,202,184,0.35)" }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                aria-hidden="true"
              />
            </motion.div>

            {/* Floating cards */}
            {floatingCards.map(({ icon: Icon, title, sub, color, bg, border, delay, position }) => (
              <motion.div
                key={title}
                className={`absolute ${position} w-44 sm:w-52`}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4 + delay,
                }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4 + delay,
                    ease: "easeInOut",
                  }}
                  className={`rounded-2xl p-3 ${bg} border ${border} backdrop-blur-sm`}
                  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={14} className={color} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white leading-tight">{title}</p>
                      <p className="text-[10px] text-white/50 mt-0.5">{sub}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
