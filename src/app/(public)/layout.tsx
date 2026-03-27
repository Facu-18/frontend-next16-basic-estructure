import type { ReactNode } from "react";

import { PublicNavbar } from "@/components/layout/PublicNavbar";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950">
      <PublicNavbar />
      <main>{children}</main>
    </div>
  );
}
