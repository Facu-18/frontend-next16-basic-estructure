import type { ReactNode } from "react";

export default function CartaLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-neutral-950">{children}</div>;
}
