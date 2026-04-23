"use client";

import { useState, useEffect } from "react";
import { LOADING_LINES } from "@/lib/utils/constants";
import { Flame } from "lucide-react";

export function LoadingRoast() {
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % LOADING_LINES.length);
    }, 2500);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 8;
      });
    }, 500);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div className="max-w-lg mx-auto text-center py-24 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--accent)]/[0.08] rounded-full blur-[80px] animate-float" />
      </div>

      {/* Animated flame */}
      <div className="relative inline-flex mb-10">
        <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[var(--accent)]/20 to-transparent flex items-center justify-center">
          <Flame className="w-12 h-12 text-[var(--accent)] animate-bounce-subtle" />
        </div>
        <div className="absolute inset-0 w-24 h-24 rounded-full bg-[var(--accent)]/5 animate-ping" />
        {/* Ember particles */}
        <div className="absolute -top-2 left-1/2 w-2 h-2 bg-[var(--accent)] rounded-full blur-[1px] animate-bounce-subtle opacity-60" style={{ animationDelay: "0.3s" }} />
        <div className="absolute -top-4 left-1/3 w-1.5 h-1.5 bg-amber-500 rounded-full blur-[1px] animate-bounce-subtle opacity-40" style={{ animationDelay: "0.6s" }} />
        <div className="absolute -top-1 right-1/3 w-1 h-1 bg-red-400 rounded-full blur-[1px] animate-bounce-subtle opacity-50" style={{ animationDelay: "0.9s" }} />
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3 text-[var(--foreground)]">
        Roasting in Progress...
      </h2>

      {/* Loading line */}
      <div className="h-12 flex items-center justify-center mb-8">
        <p
          key={lineIndex}
          className="text-[var(--muted)] text-sm italic animate-fade-in"
        >
          {LOADING_LINES[lineIndex]}
        </p>
      </div>

      {/* Progress bar */}
      <div className="max-w-xs mx-auto">
        <div className="w-full h-2 bg-white/[0.06] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--accent)] via-red-500 to-amber-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${Math.min(progress, 95)}%` }}
          />
        </div>
        <p className="text-xs text-[var(--muted)]/60 mt-2">
          {Math.round(Math.min(progress, 95))}% complete
        </p>
      </div>
    </div>
  );
}
