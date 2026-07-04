"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "When are you launching?",
    a: "WorkInt launches on 1 August 2026. We're currently in closed beta, hand-picking early users from the waitlist. Sign up today to be among the first to get access — and lock in lifetime premium free.",
  },
  {
    q: "Is WorkInt only for blue-collar and trade workers?",
    a: "The primary focus at launch is skilled tradespeople and service workers — painters, electricians, plumbers, carpenters, barbers, delivery workers, labour, and more. There will also be a separate professional hiring track for office jobs, tech roles, and white-collar recruitment. Both tracks will be available but with different experiences.",
  },
  {
    q: "How does pricing work for workers?",
    a: "Workers pay a small marketplace access fee — ₹20/day or ₹300/month. You choose what works for you. That fee gets your verified skill profile listed in front of clients actively searching for your service nearby. If you get hired even once, you've already made your fee back many times over. Clients who are hiring always browse and connect for free.",
  },
  {
    q: "Which cities are you starting in?",
    a: "We're launching first across Indore, Bhopal, Mumbai, Delhi, Bangalore, and Hyderabad. Expanding pan-India within 60 days of launch. International markets are on the roadmap for Q4 2026.",
  },
  {
    q: "How is WorkInt different from OLX, Apna, or Urban Company?",
    a: "OLX and classifieds are unstructured. Urban Company controls the pricing and takes a large commission. Apna is mainly for job listings. WorkInt is a direct skill-based platform — workers own their profile and connect directly with clients. No commission cuts, no algorithm hiding you, no middlemen. Your skills speak for themselves.",
  },
  {
    q: "How can I become a beta tester?",
    a: "Join the waitlist above. We're selecting beta users based on sign-up order. If you're a business or employer who wants to be a beta partner, email us at connect@workint.in with 'Beta Partner' in the subject.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      className={`rounded-2xl glow-border overflow-hidden transition-colors duration-300 ${
        isOpen ? "bg-surface-overlay" : "bg-surface-raised hover:bg-surface-overlay"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-display font-semibold text-sm sm:text-base text-white">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
            isOpen ? "bg-brand-teal/25 text-brand-teal" : "bg-surface-overlay text-white/50"
          }`}
          aria-hidden="true"
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-6 pb-6 text-sm text-white/60 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-24 sm:py-32 px-4"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[09]</span>
            <span className="mono-label text-white/40">FAQ</span>
            <span className="flex-1 h-px bg-gradient-to-r from-brand-teal/40 to-transparent" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl text-white leading-[0.95] tracking-tight">
            Straight answers.
            <br />
            <span className="text-outline">No fluff.</span>
          </h2>
        </motion.div>

        {inView && (
          <div className="space-y-3" role="list">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
                index={i}
              />
            ))}
          </div>
        )}

        <motion.p
          className="text-center mt-10 text-sm text-white/35"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          More questions?{" "}
          <a
            href="mailto:connect@workint.in"
            className="text-brand-teal hover:text-brand-teal-light transition-colors duration-200 underline underline-offset-2"
          >
            Email us
          </a>
        </motion.p>
      </div>
    </section>
  );
}
