import { useState } from "react";
import { motion } from "framer-motion";
import { Save } from "lucide-react";
import CrawlScope from "./CrawlScope";
import CrawlSchedule from "./CrawlSchedule";
import PathRules from "./PathRules";
import { audit } from "@/lib/seoData";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

// Settings — crawl configuration, scope, and path rules.
export default function SettingsView() {
  const { toast } = useToast();
  const [config, setConfig] = useState({
    depth: 4,
    budget: 2500,
    robots: true,
    frequency: "daily",
    notify: true,
    include: "/blog/*\n/products/*\n/docs/*",
    exclude: "*/legal/*\n*/api/*\n*/search?",
  });

  const update = (key, value) => setConfig((c) => ({ ...c, [key]: value }));

  const handleSave = () => {
    toast({ title: "Configuration saved", description: `Applies to the next crawl of ${audit.domain}.` });
  };

  return (
    <div className="px-4 py-5 lg:px-6 lg:py-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <div className="eyebrow">Settings</div>
          <h2 className="mt-1 font-display text-2xl font-bold tracking-tight">Crawl Configuration</h2>
        </div>
        <Button onClick={handleSave} size="sm" className="gap-2">
          <Save className="h-3.5 w-3.5" /> Save changes
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
          className="lg:col-span-3"
        >
          <CrawlScope depth={config.depth} budget={config.budget} robots={config.robots} onChange={update} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.06 }}
          className="lg:col-span-2"
        >
          <CrawlSchedule frequency={config.frequency} notify={config.notify} onChange={update} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.12 }}
          className="lg:col-span-5"
        >
          <PathRules include={config.include} exclude={config.exclude} onChange={update} />
        </motion.div>
      </div>
    </div>
  );
}