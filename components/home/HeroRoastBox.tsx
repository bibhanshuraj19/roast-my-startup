"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

function EmberParticles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="ember"
          style={{
            left: `${10 + Math.random() * 80}%`,
            bottom: `${Math.random() * 30}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            opacity: 0.3 + Math.random() * 0.5,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }}
        />
      ))}
    </div>
  );
}

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
      {/* Gradient mesh background */}
      <div className="hero-mesh" />

      {/* Extra ambient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[var(--accent)]/[0.06] rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/[0.04] rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <EmberParticles />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/[0.08] border border-[var(--accent)]/20 text-sm text-[var(--accent)] font-medium mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>Brutally honest AI feedback for founders</span>
        </div>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up">
          Get Your Startup Idea{" "}
          <span className="gradient-text-fire">Roasted</span>
        </h1>

        <p className="text-lg sm:text-xl text-[var(--muted)] mb-12 max-w-xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
          Enter your startup idea. Get roasted. Get scored. Get a better plan.
        </p>

        {/* Input Box */}
        <div className="max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
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
                <span className="text-xs text-[var(--muted)]/60">
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
        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-[var(--muted)] animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <span className="flex items-center gap-1.5">
            🔥 <strong className="text-[var(--foreground)]">2,400+</strong> ideas roasted
          </span>
          <span className="w-1 h-1 bg-[var(--muted)]/30 rounded-full" />
          <span className="flex items-center gap-1.5">
            ⚡ <strong className="text-[var(--foreground)]">60 sec</strong> results
          </span>
          <span className="w-1 h-1 bg-[var(--muted)]/30 rounded-full hidden sm:block" />
          <span className="hidden sm:flex items-center gap-1.5">
            💯 <strong className="text-[var(--foreground)]">Free</strong> to try
          </span>
        </div>
      </div>
    </section>
  );
}
