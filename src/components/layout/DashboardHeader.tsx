import Link from "next/link";

import { mockUser } from "@/data/user";

export function DashboardHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-orange-300">Gestion interna</p>
        <h1 className="font-display text-4xl text-orange-50">{title}</h1>
        <p className="max-w-2xl text-sm leading-7 text-neutral-300">{description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-200">
          Turno actual: {mockUser.shift}
        </div>
        <Link
          href="/dashboard/profile"
          className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-100 transition hover:bg-white/10"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 font-semibold text-orange-100">
            {mockUser.initials}
          </span>
          {mockUser.name}
        </Link>
      </div>
    </div>
  );
}
