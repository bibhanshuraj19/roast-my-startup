export function VerdictBlock({ verdict }: { verdict: string }) {
  return (
    <div className="text-center py-6 relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-12 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
      <p className="text-xl sm:text-2xl font-semibold text-[var(--foreground)] leading-relaxed max-w-2xl mx-auto">
        &ldquo;{verdict}&rdquo;
      </p>
    </div>
  );
}
