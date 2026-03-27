import { ComandasPanel } from "@/components/dashboard/ComandasPanel";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function DashboardComandasPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Comandas"
        description="Seguimiento de pedidos activos, totales y estados de atencion con informacion mock."
      />
      <ComandasPanel />
    </div>
  );
}
