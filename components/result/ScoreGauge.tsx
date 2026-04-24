"use client";

import { useEffect, useState } from "react";
import { getScoreBracket } from "@/lib/utils/constants";

interface ScoreGaugeProps {
  score: number;
}

export function ScoreGauge({ score }: ScoreGaugeProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const bracket = getScoreBracket(score);

  const radius = 75;
  const circumference = 2 * Math.PI * radius;
  const progress = (animatedScore / 100) * circumference;
  const dashOffset = circumference - progress;

  useEffect(() => {
    const duration = 1500;
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setAnimatedScore(Math.round(eased * score));
      if (t < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [score]);

  return (
    <div className="score-gauge mx-auto">
      <svg viewBox="0 0 180 180" className="w-full h-full" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="90" cy="90" r={radius} fill="none" stroke="var(--border-color)" strokeWidth="10" />
        <circle
          cx="90" cy="90" r={radius} fill="none"
          stroke={bracket.color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
        />
      </svg>

      <div className="score-gauge-text">
        <span className="text-5xl font-bold font-[family-name:var(--font-heading)]" style={{ color: bracket.color }}>
          {animatedScore}
        </span>
        <span className="text-sm text-[var(--muted)] font-medium">/100</span>
        <span className="text-xs font-semibold mt-1 px-2.5 py-0.5 rounded-full" style={{ backgroundColor: `${bracket.color}20`, color: bracket.color }}>
          {bracket.emoji} {bracket.label}
        </span>
      </div>
    </div>
  );
}
