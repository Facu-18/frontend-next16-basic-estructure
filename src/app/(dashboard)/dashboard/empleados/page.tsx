import { EmployeesPanel } from "@/components/dashboard/EmployeesPanel";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function DashboardEmployeesPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Empleados"
        description="Listado mock del equipo, turnos, estados y puntos de contacto internos."
      />
      <EmployeesPanel />
    </div>
  );
}
