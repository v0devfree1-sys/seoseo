// Include / exclude path patterns for the crawler.
export default function PathRules({ include, exclude, onChange }) {
  return (
    <div className="surface-1 p-4">
      <div className="eyebrow mb-3">Path Rules</div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--success)" }}>Include</span>
          <textarea
            value={include}
            onChange={(e) => onChange("include", e.target.value)}
            rows={4}
            spellCheck={false}
            className="resize-none rounded-md border border-[var(--border)] bg-[var(--surface-2)] p-2.5 font-mono text-[11px] text-foreground outline-none focus:border-[var(--border-active)]"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--critical)" }}>Exclude</span>
          <textarea
            value={exclude}
            onChange={(e) => onChange("exclude", e.target.value)}
            rows={4}
            spellCheck={false}
            className="resize-none rounded-md border border-[var(--border)] bg-[var(--surface-2)] p-2.5 font-mono text-[11px] text-foreground outline-none focus:border-[var(--border-active)]"
          />
        </label>
      </div>
      <div className="mt-2.5 font-mono text-[10px] text-fg-secondary">one pattern per line · * wildcard supported</div>
    </div>
  );
}