import { HeroRoastBox } from "@/components/home/HeroRoastBox";
import { SampleRoasts } from "@/components/home/SampleRoasts";
import { HowItWorks } from "@/components/home/HowItWorks";
import { RecentRoasts } from "@/components/home/RecentRoasts";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeroRoastBox />
      <SampleRoasts />
      <HowItWorks />
      <RecentRoasts />

      {/* Final CTA */}
      <section className="py-24 px-4 text-center relative">
        <div className="section-divider absolute top-0 left-0 right-0" />

        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--accent)]/[0.06] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4 text-[var(--foreground)]">
            Ready to Face the Truth?
          </h2>
          <p className="text-[var(--muted)] text-lg mb-8 leading-relaxed">
            Before you build it, survive the roast.
          </p>
          <Link href="/roast">
            <Button size="lg" className="gap-2 text-lg animate-pulse-glow">
              🔥 Roast My Startup Idea
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
