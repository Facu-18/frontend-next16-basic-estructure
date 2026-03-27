import { tableItems } from "@/data/dashboard";

import { StatusBadge } from "@/components/ui/StatusBadge";

export function MesasPanel() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {tableItems.map((table) => (
        <article key={table.id} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">{table.zone}</p>
              <h2 className="mt-3 font-display text-3xl text-orange-50">{table.name}</h2>
            </div>
            <StatusBadge status={table.status} />
          </div>

          <div className="mt-6 grid gap-3 text-sm text-neutral-300">
            <p>Capacidad: {table.capacity} personas</p>
            <p>{table.currentOrder ? `Comanda actual: ${table.currentOrder}` : "Sin comanda activa"}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
