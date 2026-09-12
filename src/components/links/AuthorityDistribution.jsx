import { motion } from "framer-motion";

// Internal link equity concentration across top hub pages.
export default function AuthorityDistribution({ pages }) {
  const max = Math.max(...pages.map((p) => p.share));
  return (
    <div className="surface-1 p-4">
      <div className="eyebrow mb-3">Authority Distribution</div>
      <div className="flex flex-col gap-2.5">
        {pages.map((p, i) => (
          <div key={p.path} className="flex items-center gap-3">
            <span className="min-w-0 w-40 shrink-0 truncate font-mono text-[11px] text-fg-secondary">{p.path}</span>
            <span className="h-1 flex-1 overflow-hidden rounded-full bg-[var(--surface-2)]">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: `${(p.share / max) * 100}%` }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="block h-full rounded-full"
                style={{ background: "linear-gradient(90deg, var(--accent-brand), var(--accent-secondary))" }}
              />
            </span>
            <span className="tabular w-10 text-right font-mono text-[11px]">{p.share}%</span>
          </div>
        ))}
      </div>
      <div className="mt-3 border-t border-[var(--border-subtle)] pt-2.5 text-[11px] leading-relaxed text-fg-secondary">
        Top 6 hubs hold 48.5% of internal link equity — commercial pages receive under 4%.
      </div>
    </div>
  );
}