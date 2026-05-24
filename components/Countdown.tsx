"use client";

import { useEffect, useState } from "react";

// Configure your launch date here
export const LAUNCH_DATE = new Date("2026-06-24T00:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    function calculate() {
      const now = Date.now();
      const diff = LAUNCH_DATE.getTime() - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }

    calculate();
    const id = setInterval(calculate, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-3 sm:gap-4" role="timer" aria-live="polite" aria-label="Countdown to launch">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="glow-border rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[52px] sm:min-w-[64px] text-center bg-surface-raised">
              <span className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white tabular-nums">
                {pad(value)}
              </span>
            </div>
            <span className="mt-1.5 text-[10px] sm:text-xs text-white/40 font-medium uppercase tracking-widest">
              {label}
            </span>
          </div>
          {i < 3 && (
            <span className="font-display font-bold text-xl sm:text-2xl text-brand-teal/40 mb-4">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
