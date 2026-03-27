import { stockItems } from "@/data/dashboard";

import { StatusBadge } from "@/components/ui/StatusBadge";
import { Table } from "@/components/ui/Table";

export function StockPanel() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row">
          <input
            aria-label="Buscar producto"
            placeholder="Buscar producto"
            className="w-full rounded-2xl border border-white/10 bg-neutral-950/70 px-4 py-3 text-sm text-neutral-100 outline-none placeholder:text-neutral-500 focus:border-orange-300/45"
          />
          <select
            aria-label="Filtrar por categoria"
            className="rounded-2xl border border-white/10 bg-neutral-950/70 px-4 py-3 text-sm text-neutral-100 outline-none focus:border-orange-300/45"
            defaultValue="all"
          >
            <option value="all">Todas las categorias</option>
            <option value="cervezas">Cervezas</option>
            <option value="destilados">Destilados</option>
            <option value="mixers">Mixers</option>
            <option value="cocina">Cocina</option>
          </select>
        </div>
        <button className="rounded-2xl border border-orange-300/35 bg-orange-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-orange-400">
          Agregar producto
        </button>
      </div>

      <Table columns={["Producto", "Categoria", "Cantidad", "Estado", "Actualizado"]}>
        {stockItems.map((item) => (
          <tr key={item.id} className="border-t border-white/5">
            <td className="px-5 py-4 text-sm text-neutral-100">{item.name}</td>
            <td className="px-5 py-4 text-sm text-neutral-300">{item.category}</td>
            <td className="px-5 py-4 text-sm text-neutral-300">
              {item.quantity} {item.unit}
            </td>
            <td className="px-5 py-4">
              <StatusBadge status={item.status} />
            </td>
            <td className="px-5 py-4 text-sm text-neutral-400">{item.updatedAt}</td>
          </tr>
        ))}
      </Table>
    </section>
  );
}
