import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

// Crawl depth, budget, and crawler behavior controls.
export default function CrawlScope({ depth, budget, robots, onChange }) {
  return (
    <div className="surface-1 flex flex-col gap-5 p-4">
      <div className="eyebrow">Crawl Scope</div>

      <div className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-fg-secondary">Max depth</span>
          <span className="tabular font-mono text-sm font-semibold">{depth} levels</span>
        </div>
        <Slider value={[depth]} min={1} max={6} step={1} onValueChange={(v) => onChange("depth", v[0])} />
        <div className="flex justify-between font-mono text-[10px] text-fg-secondary">
          <span>1 · fast</span><span>6 · exhaustive</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-fg-secondary">Page budget</span>
          <span className="tabular font-mono text-sm font-semibold">{budget.toLocaleString()} pages</span>
        </div>
        <Slider value={[budget]} min={100} max={10000} step={100} onValueChange={(v) => onChange("budget", v[0])} />
      </div>

      <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-4">
        <div>
          <div className="text-xs font-medium">Respect robots.txt</div>
          <div className="text-[10px] text-fg-secondary">Honor disallow rules and crawl-delay</div>
        </div>
        <Switch checked={robots} onCheckedChange={(v) => onChange("robots", v)} />
      </div>
    </div>
  );
}