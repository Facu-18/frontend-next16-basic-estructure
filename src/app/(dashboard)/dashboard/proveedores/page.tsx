import { ProvidersPanel } from "@/components/dashboard/ProvidersPanel";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function DashboardProvidersPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Proveedores"
        description="Vista interna para compras, abastecimiento y agenda de contactos operativos del espacio."
      />
      <ProvidersPanel />
    </div>
  );
}
