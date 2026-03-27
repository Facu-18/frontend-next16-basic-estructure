import { ProfilePanel } from "@/components/dashboard/ProfilePanel";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function DashboardProfilePage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Perfil"
        description="Datos mock del usuario, su rol, sector y relacion con el espacio."
      />
      <ProfilePanel />
    </div>
  );
}
