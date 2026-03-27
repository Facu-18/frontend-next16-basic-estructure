import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Panel principal"
        description="Resumen visual del estado del espacio, la barra y la operacion interna de Pulqui."
      />
      <DashboardOverview />
    </div>
  );
}
