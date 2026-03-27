import Link from "next/link";

import { landingHighlights } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_28%),linear-gradient(180deg,rgba(9,9,11,1)_0%,rgba(9,9,11,0.92)_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-orange-200">
            Pulqui | Industria Cultural
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl font-display text-5xl leading-none text-orange-50 sm:text-6xl lg:text-7xl">
              Cultura nocturna, barra viva y gestion lista para crecer.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
              La nueva landing presenta a Pulqui como espacio cultural y tambien como plataforma operativa: agenda, convocatorias, carta y acceso a un sistema interno mock para operar el espacio.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/login"
              className="rounded-full border border-orange-300/35 bg-orange-500 px-6 py-3 font-semibold text-neutral-950 transition hover:bg-orange-400"
            >
              Iniciar sesion
            </Link>
            <Link
              href="/dashboard"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-orange-50 transition hover:bg-white/10"
            >
              Acceso al sistema
            </Link>
            <Link
              href="/carta"
              className="rounded-full border border-violet-300/30 bg-violet-500/10 px-6 py-3 font-semibold text-violet-100 transition hover:bg-violet-500/20"
            >
              Ver carta
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          {landingHighlights.map((highlight) => (
            <article key={highlight.title} className="rounded-[1.75rem] border border-white/10 bg-black/30 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">{highlight.kicker}</p>
              <h2 className="mt-3 font-display text-2xl text-orange-50">{highlight.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-300">{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
