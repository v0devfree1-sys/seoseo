import { motion } from "framer-motion";
import { Sparkles, Clock } from "lucide-react";
import InsightCard from "./InsightCard";
import { aiFeed } from "@/lib/seoData";

const KIND_ORDER = ["High Impact", "Pattern Detected", "Opportunity", "Notice"];
const KIND_COLOR = {
  "High Impact": "var(--critical)",
  "Pattern Detected": "var(--accent-secondary)",
  Opportunity: "var(--success)",
  Notice: "var(--info)",
};

// AI Insights — proactive intelligence feed synthesized across every module.
export default function AiInsightsView() {
  const counts = KIND_ORDER.map((k) => ({ kind: k, count: aiFeed.items.filter((i) => i.kind === k).length }));
  const avgConf = Math.round(aiFeed.items.reduce((s, i) => s + i.confidence, 0) / aiFeed.items.length);

  return (
    <div className="px-4 py-5 lg:px-6 lg:py-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <div className="eyebrow">AI Insights</div>
          <h2 className="mt-1 font-display text-2xl font-bold tracking-tight">Intelligence Feed</h2>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-fg-secondary">
          <Clock className="h-3 w-3" />
          synthesized from latest crawl
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="flex flex-col gap-3 lg:col-span-3">
          {aiFeed.items.map((item, i) => (
            <InsightCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="surface-1 p-4">
            <div className="eyebrow mb-3">Signal Mix</div>
            <div className="flex flex-col gap-2.5">
              {counts.map(({ kind, count }) => (
                <div key={kind} className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: KIND_COLOR[kind] }} />
                  <span className="w-32 shrink-0 text-xs text-fg-secondary">{kind}</span>
                  <span className="h-1 flex-1 overflow-hidden rounded-full bg-[var(--surface-2)]">
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: `${(count / aiFeed.items.length) * 100}%` }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="block h-full rounded-full"
                      style={{ background: KIND_COLOR[kind] }}
                    />
                  </span>
                  <span className="tabular w-5 text-right font-mono text-[11px]">{count}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-[var(--border-subtle)] pt-3">
              <span className="text-xs text-fg-secondary">Mean confidence</span>
              <span className="tabular font-mono text-sm font-semibold" style={{ color: "var(--accent-brand)" }}>{avgConf}%</span>
            </div>
          </div>

          <div className="surface-1 flex flex-col items-center justify-center gap-2 p-5 text-center">
            <Sparkles className="h-5 w-5" style={{ color: "var(--accent-secondary)" }} />
            <p className="text-xs leading-relaxed text-fg-secondary">
              Insights are regenerated after every crawl — patterns are correlated across architecture, content, performance, and link graphs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}