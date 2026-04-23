import { Suspense } from "react";
import { RoastForm } from "@/components/roast/RoastForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roast Your Startup Idea — RoastMyStartup.in",
  description:
    "Submit your startup idea and get a brutally honest AI roast, a score out of 100, and a practical 7-day validation plan.",
};

export default function RoastPage() {
  return (
    <div className="py-12 sm:py-16 px-4">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
          🔥 Time to Get Roasted
        </h1>
        <p className="text-[var(--muted)] text-lg">
          Tell us about your idea. Be detailed — the more you share, the
          better (and funnier) the roast.
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-12 text-[var(--muted)]">Loading form...</div>}>
        <RoastForm />
      </Suspense>
    </div>
  );
}
