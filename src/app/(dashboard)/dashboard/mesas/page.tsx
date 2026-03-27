import { MesasPanel } from "@/components/dashboard/MesasPanel";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function DashboardMesasPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Mesas"
        description="Mapa visual del salon, patio y terraza con estados mock claros y usables."
      />
      <MesasPanel />
    </div>
  );
}
