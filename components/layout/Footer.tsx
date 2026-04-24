import Link from "next/link";
import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--surface)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[var(--accent)] to-[#ef4444] flex items-center justify-center">
                <Flame className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-[var(--foreground)]">RoastMyStartup</span>
            </Link>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Brutally honest AI feedback for Indian students, indie hackers, and first-time founders.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-[var(--foreground)]">Product</h4>
            <div className="space-y-2">
              <Link href="/roast" className="block text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                Roast an Idea
              </Link>
              <Link href="/gallery" className="block text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                Gallery
              </Link>
              <Link href="/pricing" className="block text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                Pricing
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-[var(--foreground)]">Legal</h4>
            <div className="space-y-2">
              <span className="block text-sm text-[var(--muted)]/50">Privacy Policy</span>
              <span className="block text-sm text-[var(--muted)]/50">Terms of Service</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
          <p className="text-xs text-[var(--muted)]/50 leading-relaxed">
            <strong className="text-[var(--muted)]/70">Disclaimer:</strong> AI feedback is not financial, legal, or investment advice.
          </p>
          <p className="text-xs text-[var(--muted)]/40 mt-2">
            © {new Date().getFullYear()} RoastMyStartup.in
          </p>
        </div>
      </div>
    </footer>
  );
}
