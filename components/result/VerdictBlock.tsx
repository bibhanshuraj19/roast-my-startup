export function VerdictBlock({ verdict }: { verdict: string }) {
  return (
    <div className="text-center py-6">
      <p className="text-xl sm:text-2xl font-semibold text-[var(--foreground)] leading-relaxed max-w-2xl mx-auto">
        &ldquo;{verdict}&rdquo;
      </p>
    </div>
  );
}
