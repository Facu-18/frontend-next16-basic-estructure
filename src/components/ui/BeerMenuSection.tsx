import type { BeerItem } from "@/types";

import { cn } from "@/lib/utils";

const statusLabel: Record<BeerItem["status"], string> = {
  disponible: "Disponible",
  agotada: "Agotada",
};

export function BeerMenuSection({ items }: { items: BeerItem[] }) {
  return (
    <section className="overflow-hidden rounded-[2.25rem] border border-orange-500/20 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.2),_transparent_30%),linear-gradient(180deg,rgba(22,22,28,1)_0%,rgba(8,8,11,1)_100%)] p-6 shadow-[0_30px_90px_rgba(249,115,22,0.12)] sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_1.85fr]">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-orange-300">Cervezas</p>
            <h3 className="font-display text-4xl leading-none text-orange-50 sm:text-5xl">
              Beer tap menu con caracter propio
            </h3>
            <p className="max-w-md text-sm leading-7 text-orange-50/75">
              Una carta aparte para artesanales y tiradas, pensada como experiencia visual inmersiva y con foco en barra.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-400">Canillas activas</p>
              <p className="mt-3 font-display text-4xl text-orange-50">04</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-400">Invitadas de la semana</p>
              <p className="mt-3 font-display text-4xl text-orange-50">02</p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-dashed border-orange-400/30 bg-orange-500/8 p-5 text-sm leading-7 text-orange-50/80">
            Vista especial separada del resto de la carta para comunicar que Pulqui tiene una seleccion cervecera curada y operable desde sistema.
          </div>
        </div>

        <div className="grid gap-4">
          {items.map((beer, index) => (
            <article
              key={beer.id}
              className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-black/35 p-5 backdrop-blur md:grid-cols-[auto_1fr_auto]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/25 bg-orange-500/10 text-sm font-semibold text-orange-100">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="space-y-3">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan-200">
                        {beer.highlight}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-neutral-300">
                        {beer.brewery}
                      </span>
                    </div>
                    <h4 className="mt-3 font-display text-3xl text-orange-50">{beer.name}</h4>
                    <p className="text-sm uppercase tracking-[0.26em] text-orange-200/90">
                      {beer.style} · {beer.abv}
                    </p>
                  </div>

                  <div
                    className={cn(
                      "w-fit rounded-full border px-3 py-1 text-xs uppercase tracking-[0.24em]",
                      beer.status === "disponible"
                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                        : "border-rose-400/30 bg-rose-400/10 text-rose-200",
                    )}
                  >
                    {statusLabel[beer.status]}
                  </div>
                </div>

                {beer.description ? <p className="text-sm leading-7 text-neutral-300">{beer.description}</p> : null}

                <div className="flex flex-wrap gap-3 text-sm text-neutral-200">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{beer.size}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Artesanal</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Tirada</span>
                </div>
              </div>

              <div className="flex items-end md:items-center">
                <p className="rounded-full border border-orange-300/35 bg-orange-500/12 px-4 py-2 text-lg font-semibold text-orange-100">
                  {beer.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
