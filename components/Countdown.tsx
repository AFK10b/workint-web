"use client";

import { useEffect, useState } from "react";

// Configure your launch date here
export const LAUNCH_DATE = new Date("2026-08-01T00:00:00");

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
    <div className="flex items-center gap-3 sm:gap-5" role="timer" aria-live="polite" aria-label="Countdown to launch">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-3 sm:gap-5">
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono font-bold text-2xl sm:text-3xl text-white tabular-nums">
              {pad(value)}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-teal">
              {label}
            </span>
          </div>
          {i < 3 && (
            <span className="font-mono text-lg text-white/20" aria-hidden="true">
              /
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
