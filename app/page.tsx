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
      <section className="py-20 px-4 text-center border-t border-[var(--border-color)]">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-3">
            Ready to Face the Truth?
          </h2>
          <p className="text-[var(--muted)] text-base mb-8">
            Before you build it, survive the roast.
          </p>
          <Link href="/roast">
            <Button size="lg" className="gap-2">
              🔥 Roast My Startup Idea
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
