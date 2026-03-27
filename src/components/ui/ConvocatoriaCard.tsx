import Image from "next/image";
import Link from "next/link";

import type { Convocatoria } from "@/types";

export function ConvocatoriaCard({ item }: { item: Convocatoria }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/80">
      <div className="relative h-48 overflow-hidden bg-neutral-950">
        <Image src={item.image} alt={item.title} fill className="object-cover opacity-85" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.28em] text-violet-300">{item.deadline}</p>
          <h3 className="font-display text-2xl text-orange-50">{item.title}</h3>
        </div>
        <p className="text-sm leading-7 text-neutral-300">{item.description}</p>
        <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-200">
          {item.audience}
        </p>
        <Link
          href={`/convocatorias/${item.slug}`}
          className="mt-auto inline-flex w-fit items-center rounded-full border border-orange-400/40 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-100 transition hover:border-orange-300 hover:bg-orange-500/20"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
