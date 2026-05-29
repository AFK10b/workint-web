"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/workint.in/visits")
      .then((r) => r.json())
      .then((data) => setCount(data.value))
      .catch(() => setCount(null));
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-4 text-white/25 text-xs">
      <Users size={12} aria-hidden="true" />
      <span>
        <span className="text-white/40 font-semibold tabular-nums">
          {count.toLocaleString("en-IN")}
        </span>{" "}
        site visits and counting
      </span>
    </div>
  );
}
