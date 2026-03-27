import { comandaItems } from "@/data/dashboard";

import { StatusBadge } from "@/components/ui/StatusBadge";
import { Table } from "@/components/ui/Table";

export function ComandasPanel() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">Activas</p>
          <p className="mt-3 font-display text-4xl text-orange-50">09</p>
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">En preparacion</p>
          <p className="mt-3 font-display text-4xl text-orange-50">04</p>
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">Listas para entregar</p>
          <p className="mt-3 font-display text-4xl text-orange-50">02</p>
        </div>
      </div>

      <Table columns={["Comanda", "Mesa", "Productos", "Estado", "Total", "Accion"]}>
        {comandaItems.map((item) => (
          <tr key={item.id} className="border-t border-white/5 align-top">
            <td className="px-5 py-4 text-sm font-medium text-neutral-100">{item.id}</td>
            <td className="px-5 py-4 text-sm text-neutral-300">{item.table}</td>
            <td className="px-5 py-4 text-sm text-neutral-300">{item.items.join(" · ")}</td>
            <td className="px-5 py-4">
              <StatusBadge status={item.status} />
            </td>
            <td className="px-5 py-4 text-sm text-neutral-100">{item.total}</td>
            <td className="px-5 py-4">
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-neutral-100 transition hover:bg-white/10">
                Ver detalle
              </button>
            </td>
          </tr>
        ))}
      </Table>
    </section>
  );
}
