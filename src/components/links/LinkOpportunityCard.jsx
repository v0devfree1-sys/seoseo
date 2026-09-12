import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// One AI-suggested internal link: source → target with anchor reasoning and score.
export default function LinkOpportunityCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="surface-1 p-4"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="eyebrow" style={{ color: "var(--accent-secondary)" }}>Suggested Link</span>
        <span className="tabular font-mono text-xs font-semibold" style={{ color: "var(--accent-brand)" }}>{item.score}</span>
      </div>

      <div className="mt-3 flex items-center gap-2 font-mono text-[11px]">
        <span className="min-w-0 flex-1 truncate rounded border border-[var(--border-subtle)] bg-[var(--surface-2)] px-2 py-1.5 text-foreground">{item.source}</span>
        <ArrowRight className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--accent-brand)" }} />
        <span className="min-w-0 flex-1 truncate rounded border border-[var(--border-hover)] bg-[var(--surface-2)] px-2 py-1.5 text-foreground">{item.target}</span>
      </div>

      <div className="mt-2.5 flex items-center gap-2 text-[11px] text-fg-secondary">
        anchor
        <span className="rounded-sm border border-[var(--border)] px-1.5 py-0.5 font-mono text-[10px] text-foreground">"{item.anchor}"</span>
      </div>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {item.reason.map((r) => (
          <li key={r} className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-1)] px-2 py-0.5 text-[10px] text-fg-secondary">
            {r}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}