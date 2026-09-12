import { motion } from "framer-motion";
import { Unlink } from "lucide-react";

// Orphan pages — zero internal links, unreachable from the site graph.
export default function OrphanPages({ orphans }) {
  return (
    <div className="surface-1 p-4">
      <div className="eyebrow mb-3">Orphan Pages · {orphans.length}</div>
      <div className="flex flex-col">
        {orphans.map((o, i) => (
          <motion.div
            key={o.path}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="flex items-center gap-3 border-b border-[var(--border-subtle)] px-1 py-2.5 last:border-0"
          >
            <Unlink className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--critical)" }} />
            <div className="min-w-0 flex-1">
              <div className="truncate font-mono text-[11px] text-foreground">{o.path}</div>
              <div className="text-[10px] text-fg-secondary">{o.words ? `${o.words} words · recoverable` : "no indexable content"}</div>
            </div>
            <span
              className="tabular shrink-0 font-mono text-[11px]"
              style={{ color: o.score >= 50 ? "var(--warning)" : "var(--critical)" }}
            >
              {o.score || "—"}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}