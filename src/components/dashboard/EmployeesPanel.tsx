import { employeeItems } from "@/data/dashboard";

import { StatusBadge } from "@/components/ui/StatusBadge";
import { Table } from "@/components/ui/Table";

export function EmployeesPanel() {
  return (
    <section className="space-y-6">
      <div className="flex justify-end">
        <button className="rounded-2xl border border-orange-300/35 bg-orange-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-orange-400">
          Agregar empleado
        </button>
      </div>

      <Table columns={["Nombre", "Rol", "Turno", "Estado", "Contacto"]}>
        {employeeItems.map((employee) => (
          <tr key={employee.id} className="border-t border-white/5">
            <td className="px-5 py-4 text-sm text-neutral-100">{employee.name}</td>
            <td className="px-5 py-4 text-sm text-neutral-300">{employee.role}</td>
            <td className="px-5 py-4 text-sm text-neutral-300">{employee.shift}</td>
            <td className="px-5 py-4">
              <StatusBadge status={employee.status} />
            </td>
            <td className="px-5 py-4 text-sm text-neutral-300">{employee.contact}</td>
          </tr>
        ))}
      </Table>
    </section>
  );
}
