import Image from "next/image";

import { galleryItems } from "@/data/gallery";

import { SectionTitle } from "@/components/ui/SectionTitle";

export function GallerySection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Universo visual"
        title="La marca publica sigue siendo emocional, nocturna y local"
        description="Escenario, patio, barra, comunidad y fiesta conviven con una estetica mas madura, lista para expandirse a producto digital."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
            <div className="relative h-64">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="space-y-2 p-5">
              <h3 className="font-display text-2xl text-orange-50">{item.title}</h3>
              <p className="text-sm leading-7 text-neutral-300">{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
