import { motion } from "framer-motion";
import { Sparkles, Link2 } from "lucide-react";
import LinkOpportunityCard from "./LinkOpportunityCard";
import AuthorityDistribution from "./AuthorityDistribution";
import OrphanPages from "./OrphanPages";
import { audit, linksIntel } from "@/lib/seoData";

// Internal Link Intelligence — equity, orphans, and AI-suggested links.
export default function LinksView() {
  return (
    <div className="px-4 py-5 lg:px-6 lg:py-6">
      <div className="mb-4">
        <div className="eyebrow">Internal Link Intelligence</div>
        <h2 className="mt-1 font-display text-2xl font-bold tracking-tight">Link Graph Authority</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="flex flex-col gap-3 lg:col-span-3">
          {audit.linkOpportunities.map((item, i) => (
            <LinkOpportunityCard key={item.source} item={item} index={i} />
          ))}

          <div className="surface-1 flex items-start gap-2 p-4">
            <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "var(--accent-secondary)" }} />
            <p className="text-xs leading-relaxed text-fg-secondary">
              Rebalancing equity from informational hubs to commercial pages is the highest-impact structural fix — 38 product pages receive under 4% of internal link equity.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <AuthorityDistribution pages={linksIntel.equity} />
          <OrphanPages orphans={linksIntel.orphans} />

          <div className="surface-1 p-4">
            <div className="eyebrow mb-3 flex items-center gap-1.5">
              <Link2 className="h-3 w-3" /> Weakly Connected
            </div>
            <div className="flex flex-col gap-2">
              {linksIntel.weakNodes.map((n) => (
                <div key={n.path} className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="min-w-0 flex-1 truncate text-foreground">{n.path}</span>
                  <span className="shrink-0 text-fg-secondary">{n.inlinks} in</span>
                </div>
              ))}
            </div>
            <div className="mt-2.5 text-[10px] leading-relaxed text-fg-secondary">
              High-value pages with fewer than 20 internal links — candidates for hub re-linking.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}