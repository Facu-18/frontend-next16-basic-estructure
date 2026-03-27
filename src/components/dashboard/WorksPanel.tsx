import { workItems } from "@/data/dashboard";

import { StatusBadge } from "@/components/ui/StatusBadge";

export function WorksPanel() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {workItems.map((work) => (
          <article key={work.id} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">{work.area}</p>
                <h2 className="mt-3 font-display text-2xl text-orange-50">{work.title}</h2>
              </div>
              <StatusBadge status={work.status} />
            </div>
            <div className="mt-5 space-y-3 text-sm text-neutral-300">
              <p>Responsable: {work.manager}</p>
              <p>Entrega estimada: {work.deadline}</p>
            </div>
            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-neutral-400">
                <span>Progreso</span>
                <span>{work.progress}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-fuchsia-500" style={{ width: `${work.progress}%` }} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
