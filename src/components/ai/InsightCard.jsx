import { motion } from "framer-motion";

const KIND_STYLE = {
  "High Impact": { color: "var(--critical)" },
  "Pattern Detected": { color: "var(--accent-secondary)" },
  Opportunity: { color: "var(--success)" },
  Notice: { color: "var(--info)" },
};
const IMPACT_TONE = { High: "var(--critical)", Medium: "var(--warning)", Low: "var(--info)" };

// One intelligence feed item.
export default function InsightCard({ item, index }) {
  const kind = KIND_STYLE[item.kind] ?? { color: "var(--foreground-secondary)" };
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="surface-1 relative overflow-hidden p-4"
    >
      <div className="absolute left-0 top-0 h-full w-[2px]" style={{ background: kind.color, boxShadow: `0 0 10px -2px ${kind.color}` }} />
      <div className="flex items-center justify-between gap-3">
        <span className="eyebrow" style={{ color: kind.color }}>{item.kind}</span>
        <span className="font-mono text-[10px] text-fg-secondary">{item.module}</span>
      </div>
      <h3 className="mt-2 font-display text-[15px] font-semibold leading-snug">{item.title}</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-fg-secondary">{item.body}</p>
      <div className="mt-3 flex items-center gap-4 border-t border-[var(--border-subtle)] pt-2.5">
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider" style={{ color: IMPACT_TONE[item.impact] }}>
          Impact · {item.impact}
        </span>
        <span className="ml-auto flex items-center gap-2 font-mono text-[10px] text-fg-secondary">
          conf
          <span className="h-1 w-16 overflow-hidden rounded-full bg-[var(--surface-2)]">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: `${item.confidence}%` }}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.06 }}
              className="block h-full rounded-full"
              style={{ background: "var(--accent-brand)" }}
            />
          </span>
          {item.confidence}%
        </span>
      </div>
    </motion.article>
  );
}