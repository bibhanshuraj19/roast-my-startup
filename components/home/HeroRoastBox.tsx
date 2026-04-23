"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroRoastBox() {
  const [idea, setIdea] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (idea.trim().length >= 10) {
      const encoded = encodeURIComponent(idea.trim());
      router.push(`/roast?idea=${encoded}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 px-4">
      {/* Background gradient blobs — purely decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[var(--accent)] opacity-[0.06] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500 opacity-[0.04] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500 opacity-[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative" style={{ zIndex: 1 }}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/[0.08] border border-[var(--accent)]/20 text-sm text-[var(--accent)] font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Brutally honest AI feedback for founders</span>
        </div>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-6">
          Get Your Startup Idea{" "}
          <span className="gradient-text-fire">Roasted</span>
        </h1>

        <p className="text-lg sm:text-xl text-[var(--muted)] mb-12 max-w-xl mx-auto leading-relaxed">
          Enter your startup idea. Get roasted. Get scored. Get a better plan.
        </p>

        {/* Input Box */}
        <div className="max-w-xl mx-auto">
          <div className="relative group">
            {/* Glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[var(--surface-elevated)] border border-white/[0.08] rounded-2xl p-2 shadow-2xl shadow-black/40">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='e.g. "AI-powered resume builder for college students"'
                className="w-full px-4 py-4 bg-transparent text-[var(--foreground)] placeholder:text-[var(--muted)]/50 resize-none focus:outline-none text-base sm:text-lg leading-relaxed"
                rows={3}
              />
              <div className="flex items-center justify-between px-2 pb-1">
                <span className="text-xs text-[var(--muted)]">
                  {idea.length > 0 ? `${idea.length} characters` : "Min 10 characters"}
                </span>
                <Button
                  onClick={handleSubmit}
                  disabled={idea.trim().length < 10}
                  size="md"
                  className="gap-2"
                >
                  Roast My Idea
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-4 sm:gap-6 text-sm text-[var(--muted)] flex-wrap">
          <span className="flex items-center gap-1.5">
            🔥 <strong className="text-[var(--foreground)]">2,400+</strong> ideas roasted
          </span>
          <span className="w-1 h-1 bg-[var(--muted)]/30 rounded-full hidden sm:block" />
          <span className="flex items-center gap-1.5">
            ⚡ <strong className="text-[var(--foreground)]">60 sec</strong> results
          </span>
          <span className="w-1 h-1 bg-[var(--muted)]/30 rounded-full hidden sm:block" />
          <span className="flex items-center gap-1.5">
            💯 <strong className="text-[var(--foreground)]">Free</strong> to try
          </span>
        </div>
      </div>
    </section>
  );
}
