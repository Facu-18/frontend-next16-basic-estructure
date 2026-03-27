import Link from "next/link";

import { publicNavItems } from "@/data/site";

export function PublicNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-display text-2xl uppercase tracking-[0.18em] text-orange-200">Pulqui</span>
          <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-neutral-300 sm:inline-flex">
            Industria cultural
          </span>
        </Link>

        <nav aria-label="Navegacion principal" className="hidden items-center gap-6 lg:flex">
          {publicNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-neutral-300 transition hover:text-orange-100">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full border border-orange-300/35 bg-orange-500/12 px-4 py-2 text-sm font-medium text-orange-100 transition hover:border-orange-200 hover:bg-orange-500/22"
          >
            Ingresar
          </Link>
          <Link
            href="/dashboard"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-100 transition hover:bg-white/10 sm:inline-flex"
          >
            Acceso al sistema
          </Link>
        </div>
      </div>
    </header>
  );
}
