"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroRoastBox() {
  const [idea, setIdea] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (idea.trim().length >= 10) {
      router.push(`/roast?idea=${encodeURIComponent(idea.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/20 text-sm text-[var(--accent)] font-medium mb-8" style={{ backgroundColor: 'rgba(249,115,22,0.08)' }}>
          <Sparkles className="w-4 h-4" />
          Brutally honest AI feedback for founders
        </div>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
          Get Your Startup Idea{" "}
          <span className="gradient-text-fire">Roasted</span>
        </h1>

        <p className="text-lg text-[var(--muted)] mb-10 max-w-xl mx-auto leading-relaxed">
          Enter your startup idea. Get roasted. Get scored. Get a better plan.
        </p>

        {/* Input Card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-[var(--surface-elevated)] border border-[var(--border-color)] rounded-2xl p-3">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='e.g. "AI-powered resume builder for college students"'
              className="w-full px-3 py-3 bg-transparent text-[var(--foreground)] placeholder:text-[var(--muted)] resize-none focus:outline-none text-base leading-relaxed"
              rows={3}
            />
            <div className="flex items-center justify-between pt-2 border-t border-[var(--border-color)]">
              <span className="text-xs text-[var(--muted)] pl-1">
                {idea.length > 0 ? `${idea.length} chars` : "Min 10 characters"}
              </span>
              <Button
                onClick={handleSubmit}
                disabled={idea.trim().length < 10}
                size="sm"
                className="gap-1.5"
              >
                Roast My Idea
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-[var(--muted)] flex-wrap">
          <span>🔥 <strong className="text-[var(--foreground)]">2,400+</strong> ideas roasted</span>
          <span className="hidden sm:inline">•</span>
          <span>⚡ <strong className="text-[var(--foreground)]">60 sec</strong> results</span>
          <span className="hidden sm:inline">•</span>
          <span>💯 <strong className="text-[var(--foreground)]">Free</strong> to try</span>
        </div>
      </div>
    </section>
  );
}
