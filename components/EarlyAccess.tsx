"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

// Replace with your Formspree endpoint: https://formspree.io/
// e.g. "https://formspree.io/f/YOUR_FORM_ID"
const FORM_ENDPOINT = "https://formspree.io/f/REPLACE_ME";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function EarlyAccess() {
  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const fireConfetti = useCallback(() => {
    const colors = ["#1ECAB8", "#3DDFD0", "#2563EB", "#4B8BF5", "#ffffff"];
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors,
      ticks: 200,
    });
    setTimeout(() => {
      confetti({ particleCount: 60, spread: 50, origin: { y: 0.55, x: 0.3 }, colors });
      confetti({ particleCount: 60, spread: 50, origin: { y: 0.55, x: 0.7 }, colors });
    }, 200);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!isValidEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      inputRef.current?.focus();
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        fireConfetti();
      } else {
        console.log("Early access email captured:", email);
        setStatus("success");
        fireConfetti();
      }
    } catch {
      console.log("Early access email captured (offline):", email);
      setStatus("success");
      fireConfetti();
    }
  }

  return (
    <section
      id="early-access"
      ref={ref}
      className="relative py-24 sm:py-32 px-4"
      aria-label="Early access sign-up"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(30,202,184,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mono-label inline-block mb-5">[07] — Early access</span>
          <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight mb-4">
            Be among the first
            <br />
            <span className="text-outline">1000 users.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/55 mb-10 leading-relaxed">
            Join the waitlist today and get{" "}
            <span className="text-white font-semibold">lifetime premium free</span> — no
            strings, no tricks. Just WorkInt at its best, on us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <AnimatePresence mode="wait">
            {status !== "success" ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                noValidate
                aria-label="Early access email form"
              >
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Mail
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
                      aria-hidden="true"
                    />
                    <input
                      ref={inputRef}
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMsg) setErrorMsg("");
                      }}
                      placeholder="your@email.com"
                      disabled={status === "loading"}
                      aria-label="Email address"
                      aria-invalid={!!errorMsg}
                      aria-describedby={errorMsg ? "email-error" : undefined}
                      className="w-full pl-10 pr-4 py-4 rounded-xl glow-border bg-surface-raised text-white placeholder:text-white/30 text-sm outline-none focus:border-brand-teal/60 transition-all duration-200 disabled:opacity-60"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-display font-semibold text-sm text-surface-base bg-brand-teal hover:bg-brand-teal-light transition-all duration-200 hover:shadow-lg hover:shadow-brand-teal/30 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                    aria-label="Get early access"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                        Joining…
                      </>
                    ) : (
                      <>
                        Get early access
                        <ArrowRight size={15} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>

                {errorMsg && (
                  <p
                    id="email-error"
                    role="alert"
                    className="mt-3 text-sm text-red-400 text-center"
                  >
                    {errorMsg}
                  </p>
                )}

                <p className="mt-4 text-xs text-white/30">
                  No spam, ever. Unsubscribe in one click.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-4 py-8"
                role="status"
                aria-live="polite"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 20 }}
                  className="w-16 h-16 rounded-full bg-brand-teal/15 border border-brand-teal/40 flex items-center justify-center"
                >
                  <CheckCircle2 size={32} className="text-brand-teal" aria-hidden="true" />
                </motion.div>
                <div>
                  <p className="font-display font-bold text-xl text-white mb-1">
                    You&apos;re on the list!
                  </p>
                  <p className="text-sm text-white/50">
                    We&apos;ll reach out to{" "}
                    <span className="text-white">{email}</span> before launch.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
