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
      const encoded = encodeURIComponent(idea.trim());
      router.push(`/roast?idea=${encoded}`);
    }
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 px-4">
      {/* Gradient background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/5 border border-[var(--accent)]/20 text-sm text-[var(--accent)] font-medium mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>Brutally honest AI feedback for founders</span>
        </div>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
          Get Your Startup Idea{" "}
          <span className="gradient-text">Roasted</span>
        </h1>

        <p className="text-lg sm:text-xl text-[var(--muted)] mb-10 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Enter your startup idea. Get roasted. Get scored. Get a better plan.
        </p>

        {/* Input Box */}
        <div className="max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl p-2 shadow-xl shadow-black/5">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder='e.g. "AI-powered resume builder for college students"'
                className="w-full px-4 py-4 bg-transparent text-[var(--foreground)] placeholder:text-[var(--muted)] resize-none focus:outline-none text-base sm:text-lg"
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
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-[var(--muted)] animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <span className="flex items-center gap-1">🔥 <strong className="text-[var(--foreground)]">2,400+</strong> ideas roasted</span>
          <span className="w-1 h-4 bg-[var(--border-color)] rounded-full" />
          <span className="flex items-center gap-1">⚡ <strong className="text-[var(--foreground)]">60 sec</strong> results</span>
          <span className="w-1 h-4 bg-[var(--border-color)] rounded-full hidden sm:block" />
          <span className="hidden sm:flex items-center gap-1">💯 <strong className="text-[var(--foreground)]">Free</strong> to try</span>
        </div>
      </div>
    </section>
  );
}
