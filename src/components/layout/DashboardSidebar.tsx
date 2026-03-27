"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { dashboardNavItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b border-white/10 bg-neutral-950/90 p-4 lg:w-72 lg:border-b-0 lg:border-r lg:p-6">
      <div className="flex items-center justify-between gap-3 lg:block">
        <div className="space-y-2">
          <p className="font-display text-2xl uppercase tracking-[0.18em] text-orange-200">Pulqui</p>
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-400">Sistema interno mock</p>
        </div>
        <Link
          href="/"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-neutral-200 transition hover:bg-white/10"
        >
          Volver a la landing
        </Link>
      </div>

      <nav aria-label="Navegacion de dashboard" className="mt-6 grid gap-2">
        {dashboardNavItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-2xl px-4 py-3 text-sm transition",
                active
                  ? "border border-orange-400/25 bg-orange-500/12 text-orange-100"
                  : "border border-transparent bg-transparent text-neutral-300 hover:border-white/10 hover:bg-white/5 hover:text-orange-50",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
