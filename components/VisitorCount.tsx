"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/workint-in/visits/up")
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.count === "number") setCount(data.count);
      })
      .catch(() => setCount(null));
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-4 text-xs text-white/25">
      <Users size={12} aria-hidden="true" />
      <span>
        <span className="text-white/45 font-semibold tabular-nums">
          {count.toLocaleString("en-IN")}
        </span>{" "}
        site visits and counting
      </span>
    </div>
  );
}
