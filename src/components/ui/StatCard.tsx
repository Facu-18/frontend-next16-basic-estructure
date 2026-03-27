import { cn } from "@/lib/utils";
import type { DashboardMetric } from "@/types";

const toneMap: Record<DashboardMetric["tone"], string> = {
  orange: "from-orange-500/25 to-orange-500/0",
  violet: "from-violet-500/25 to-violet-500/0",
  cyan: "from-cyan-500/25 to-cyan-500/0",
  magenta: "from-fuchsia-500/25 to-fuchsia-500/0",
};

export function StatCard({ metric }: { metric: DashboardMetric }) {
  return (
    <article className={cn("rounded-[1.75rem] border border-white/10 bg-gradient-to-br p-5", toneMap[metric.tone])}>
      <p className="text-xs uppercase tracking-[0.28em] text-neutral-300">{metric.label}</p>
      <p className="mt-4 font-display text-4xl text-orange-50">{metric.value}</p>
      <p className="mt-3 text-sm text-neutral-200">{metric.change}</p>
    </article>
  );
}
