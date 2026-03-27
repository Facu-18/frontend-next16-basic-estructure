import Link from "next/link";

import { quickAccessItems } from "@/data/dashboard";

import { SectionTitle } from "@/components/ui/SectionTitle";

export function SystemPreviewSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(24,24,27,1),rgba(10,10,14,0.98))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
        <SectionTitle
          eyebrow="Sistema interno"
          title="Pulqui ya se muestra como software de gestion para operar el espacio"
          description="La landing deja de ser solo presentacion: ahora tambien anticipa el producto interno con acceso, modulos y recorrido visual consistente."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[1.75rem] border border-orange-400/20 bg-orange-500/8 p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-orange-300">Acceso visible</p>
            <h3 className="mt-4 font-display text-3xl text-orange-50">Login mock y panel operativo</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-300">
              Sin autenticacion real todavia, pero con una experiencia frontend completa que comunica escalabilidad, organizacion y producto.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/login"
                className="rounded-full border border-orange-300/35 bg-orange-500 px-5 py-3 font-semibold text-neutral-950 transition hover:bg-orange-400"
              >
                Ir al login
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-orange-50 transition hover:bg-white/10"
              >
                Ver dashboard
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {quickAccessItems.map((item) => (
              <article key={item.href} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-violet-300">{item.badge}</p>
                <h3 className="mt-3 font-display text-2xl text-orange-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
