import type { ReactNode } from "react";

import { DashboardSidebar } from "@/components/layout/DashboardSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(9,9,11,1),rgba(15,15,20,1))] lg:flex">
      <DashboardSidebar />
      <main className="flex-1 p-5 sm:p-6 lg:p-8">{children}</main>
      <a
        href="https://wa.me/543515550147?text=Hola%2C%20necesito%20soporte%20del%20sistema%20interno%20de%20Pulqui."
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp del sistema interno"
        className="fixed right-6 bottom-6 z-30 inline-flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/35 bg-emerald-500 text-neutral-950 shadow-[0_18px_50px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950/12">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2a9.88 9.88 0 0 0-8.57 14.8L2 22l5.34-1.4a9.9 9.9 0 0 0 4.69 1.2h.01A9.96 9.96 0 0 0 22 11.91a9.8 9.8 0 0 0-2.95-7Zm-7.02 15.2h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.17.83.85-3.08-.2-.32a8.21 8.21 0 0 1-1.28-4.37c0-4.55 3.72-8.25 8.29-8.25a8.2 8.2 0 0 1 5.86 2.42 8.14 8.14 0 0 1 2.43 5.82c0 4.56-3.72 8.28-8.28 8.28Zm4.54-6.2c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.15.17-.29.19-.54.07-.25-.13-1.04-.38-1.98-1.21-.73-.65-1.23-1.45-1.37-1.7-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.77-1.84-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.12.17 1.77 2.71 4.28 3.8.6.26 1.07.42 1.44.53.61.2 1.17.17 1.61.1.49-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.11-.23-.17-.48-.29Z" />
          </svg>
        </span>
      </a>
    </div>
  );
}
