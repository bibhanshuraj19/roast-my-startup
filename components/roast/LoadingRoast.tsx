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
    <div className="max-w-lg mx-auto text-center py-20">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
        <Flame className="w-10 h-10 text-[var(--accent)] animate-bounce-subtle" />
      </div>

      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">
        Roasting in Progress...
      </h2>

      <div className="h-12 flex items-center justify-center mb-8">
        <p key={lineIndex} className="text-[var(--muted)] text-sm italic animate-fade-in">
          {LOADING_LINES[lineIndex]}
        </p>
      </div>

      <div className="max-w-xs mx-auto">
        <div className="w-full h-2 bg-[var(--border-color)] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--accent)] to-[#ef4444] rounded-full transition-all duration-500"
            style={{ width: `${Math.min(progress, 95)}%` }}
          />
        </div>
        <p className="text-xs text-[var(--muted)] mt-2">
          {Math.round(Math.min(progress, 95))}% complete
        </p>
      </div>
    </div>
  );
}
