import { WorksPanel } from "@/components/dashboard/WorksPanel";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function DashboardWorksPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Obras en curso"
        description="Seguimiento mock de mejoras, mantenimiento y tareas de infraestructura dentro del espacio."
      />
      <WorksPanel />
    </div>
  );
}
