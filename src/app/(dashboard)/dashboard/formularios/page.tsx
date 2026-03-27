import { LandingFormsPanel } from "@/components/dashboard/LandingFormsPanel";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function DashboardFormsPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Formularios de la landing"
        description="Vista interna para revisar los datos mock que llegan desde contacto, convocatorias, uso de espacios y newsletter."
      />
      <LandingFormsPanel />
    </div>
  );
}
