import { StockPanel } from "@/components/dashboard/StockPanel";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function DashboardStockPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Stock"
        description="Vista operativa con tabla mock, filtros visuales y estados de disponibilidad."
      />
      <StockPanel />
    </div>
  );
}
