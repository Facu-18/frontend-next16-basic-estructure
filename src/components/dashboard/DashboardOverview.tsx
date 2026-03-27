import Link from "next/link";

import { dashboardMetrics, quickAccessItems } from "@/data/dashboard";

import { StatCard } from "@/components/ui/StatCard";

export function DashboardOverview() {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <StatCard key={metric.id} metric={metric} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {quickAccessItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:border-orange-300/25 hover:bg-white/8"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-orange-300">{item.badge}</p>
            <h2 className="mt-4 font-display text-3xl text-orange-50">{item.title}</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-300">{item.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
