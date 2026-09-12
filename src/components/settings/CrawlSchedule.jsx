import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const FREQ = { hourly: "Every 6 hours", daily: "Daily", weekly: "Weekly", manual: "Manual only" };
const NEXT = { hourly: "today 18:40", daily: "tomorrow 09:00", weekly: "Mon 09:00", manual: "—" };

// Crawl frequency + notification preferences.
export default function CrawlSchedule({ frequency, notify, onChange }) {
  return (
    <div className="surface-1 flex flex-col gap-4 p-4">
      <div className="eyebrow">Schedule</div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-secondary">Crawl frequency</span>
        <Select value={frequency} onValueChange={(v) => onChange("frequency", v)}>
          <SelectTrigger className="w-full bg-[var(--surface-2)]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(FREQ).map(([k, label]) => (
              <SelectItem key={k} value={k}>{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-3">
        <span className="text-xs text-fg-secondary">Next crawl</span>
        <span className="font-mono text-xs">{NEXT[frequency]}</span>
      </div>
      <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-3">
        <div>
          <div className="text-xs font-medium">Insight alerts</div>
          <div className="text-[10px] text-fg-secondary">Email me new AI insights after each crawl</div>
        </div>
        <Switch checked={notify} onCheckedChange={(v) => onChange("notify", v)} />
      </div>
    </div>
  );
}