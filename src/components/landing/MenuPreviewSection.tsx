import Link from "next/link";

export function MenuPreviewSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(24,24,27,1),rgba(10,10,14,0.98))] p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.32em] text-orange-300">Carta</p>
          <h2 className="font-display text-4xl leading-none text-orange-50 sm:text-5xl">
            La carta ahora vive en una vista propia
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base">
            Separada de la landing para dar más protagonismo a la experiencia de barra, especialmente a la nueva sección inmersiva de cervezas artesanales y tiradas.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/carta"
              className="rounded-full border border-orange-300/35 bg-orange-500 px-6 py-3 font-semibold text-neutral-950 transition hover:bg-orange-400"
            >
              Abrir carta completa
            </Link>
            <Link
              href="/dashboard/formularios"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-orange-50 transition hover:bg-white/10"
            >
              Ver sistema interno
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-[1.75rem] border border-orange-400/20 bg-orange-500/8 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-orange-300">Cervezas</p>
            <p className="mt-3 font-display text-3xl text-orange-50">Vista especial</p>
          </article>
          <article className="rounded-[1.75rem] border border-violet-400/20 bg-violet-500/8 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-violet-300">Tragos</p>
            <p className="mt-3 font-display text-3xl text-orange-50">Barra ordenada</p>
          </article>
          <article className="rounded-[1.75rem] border border-cyan-400/20 bg-cyan-500/8 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Comida</p>
            <p className="mt-3 font-display text-3xl text-orange-50">Lectura rapida</p>
          </article>
        </div>
      </div>
    </section>
  );
}
