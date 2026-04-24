import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RoastMyStartup.in — Get Your Startup Idea Roasted by AI",
  description:
    "Enter your startup idea. Get roasted. Get scored out of 100. Get a practical 7-day validation plan. Brutally honest feedback for Indian students, indie hackers, and first-time founders.",
  keywords: [
    "roast my startup idea",
    "startup idea feedback",
    "AI startup idea validator",
    "startup idea score",
    "startup idea generator India",
    "business idea validator",
    "pitch feedback AI",
    "startup mentor AI",
  ],
  openGraph: {
    type: "website",
    title: "RoastMyStartup.in — Get Your Startup Idea Roasted by AI",
    description:
      "Enter your startup idea. Get roasted. Get scored. Get a better plan.",
    siteName: "RoastMyStartup.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoastMyStartup.in — Get Your Startup Idea Roasted by AI",
    description:
      "Enter your startup idea. Get roasted. Get scored. Get a better plan.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
