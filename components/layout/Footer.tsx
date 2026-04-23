import Link from "next/link";
import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--surface)] mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                <Flame className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">RoastMyStartup</span>
            </Link>
            <p className="text-sm text-[var(--muted)] max-w-md mb-4">
              Get your startup idea roasted by AI. Brutally honest feedback for
              Indian students, indie hackers, and first-time founders.
            </p>
            <p className="text-xs text-[var(--muted)]">
              Built with 🔥 for the Indian startup ecosystem
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Product</h4>
            <div className="flex flex-col gap-2">
              <Link href="/roast" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                Roast an Idea
              </Link>
              <Link href="/gallery" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                Gallery
              </Link>
              <Link href="/pricing" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                Pricing
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Legal</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[var(--muted)]">Privacy Policy</span>
              <span className="text-sm text-[var(--muted)]">Terms of Service</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            <strong>Disclaimer:</strong> AI feedback is not financial, legal, or investment advice. 
            Public roasts may be visible if you choose public mode. Do not enter confidential business 
            information. This product gives educational feedback only.
          </p>
          <p className="text-xs text-[var(--muted)] mt-3">
            © {new Date().getFullYear()} RoastMyStartup.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
