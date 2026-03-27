import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { convocatorias } from "@/data/convocatorias";

export function generateStaticParams() {
  return convocatorias.map((item) => ({ slug: item.slug }));
}

export default async function ConvocatoriaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const convocatoria = convocatorias.find((item) => item.slug === slug);

  if (!convocatoria) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5">
        <div className="relative h-72">
          <Image src={convocatoria.image} alt={convocatoria.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-orange-300">{convocatoria.deadline}</p>
            <h1 className="mt-3 font-display text-4xl text-orange-50 sm:text-5xl">{convocatoria.title}</h1>
          </div>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.75fr]">
          <div className="space-y-5">
            <p className="text-base leading-8 text-neutral-200">{convocatoria.description}</p>
            {convocatoria.details.map((detail) => (
              <p key={detail} className="text-sm leading-7 text-neutral-300">
                {detail}
              </p>
            ))}
          </div>

          <aside className="space-y-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-neutral-950/70 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">Dirigido a</p>
              <p className="mt-3 text-sm leading-7 text-neutral-200">{convocatoria.audience}</p>
            </div>
            <div className="rounded-[1.75rem] border border-dashed border-orange-400/30 bg-orange-500/8 p-5 text-sm leading-7 text-orange-50/80">
              Demo frontend: esta pantalla simula el futuro flujo de convocatorias y todavia no envia datos reales.
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full border border-orange-300/35 bg-orange-500 px-5 py-3 font-semibold text-neutral-950 transition hover:bg-orange-400">
                Postularme
              </button>
              <Link
                href="/"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-orange-50 transition hover:bg-white/10"
              >
                Volver
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
