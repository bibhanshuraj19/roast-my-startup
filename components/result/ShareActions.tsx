"use client";

import { Button } from "@/components/ui/Button";
import { Share2, ExternalLink, Copy, Check, Download } from "lucide-react";
import { useState } from "react";
import { SITE_URL } from "@/lib/utils/constants";

interface ShareActionsProps {
  slug: string;
  shareText: string;
  score: number;
}

export function ShareActions({ slug, shareText, score }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE_URL}/r/${slug}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`${shareText}\n\nRoast yours: ${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${shareText}\n\nRoast yours at`
  )}&url=${encodeURIComponent(url)}`;

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `${shareText}\n\nRoast yours: ${url}`
  )}`;

  return (
    <div className="py-6">
      <h3 className="font-semibold text-sm text-[var(--muted)] uppercase tracking-wider mb-4 flex items-center gap-2 justify-center">
        <Share2 className="w-4 h-4" />
        Share Your Roast
      </h3>

      <div className="bg-[var(--surface-elevated)] border border-[var(--border-color)] rounded-xl p-4 mb-4 max-w-md mx-auto">
        <p className="text-sm text-[var(--foreground)] italic">&ldquo;{shareText}&rdquo;</p>
      </div>

      <div className="flex items-center justify-center gap-2 flex-wrap">
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="gap-1.5">
            <ExternalLink className="w-3.5 h-3.5" />
            Twitter
          </Button>
        </a>

        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="gap-1.5">
            <ExternalLink className="w-3.5 h-3.5" />
            LinkedIn
          </Button>
        </a>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="gap-1.5">
            💬 WhatsApp
          </Button>
        </a>

        <Button variant="outline" size="sm" className="gap-1.5" onClick={handleCopy}>
          {copied ? (
            <><Check className="w-3.5 h-3.5" style={{ color: '#4ade80' }} /> Copied!</>
          ) : (
            <><Copy className="w-3.5 h-3.5" /> Copy</>
          )}
        </Button>
      </div>
    </div>
  );
}
