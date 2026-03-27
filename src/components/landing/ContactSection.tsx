import { contactData } from "@/data/site";

import { SectionTitle } from "@/components/ui/SectionTitle";

export function ContactSection() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-[2.25rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
        <div>
          <SectionTitle
            eyebrow="Contacto"
            title="Marca publica, operaciones internas y futuro producto en un solo frontend"
            description="Todo el sitio sigue funcionando con datos mock, pero la estructura ya esta preparada para integrar servicios reales cuando toque."
          />
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.5rem] border border-white/10 bg-neutral-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.26em] text-neutral-400">Direccion</p>
            <p className="mt-3 text-lg text-orange-50">{contactData.address}</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-neutral-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.26em] text-neutral-400">Contacto</p>
            <p className="mt-3 text-sm text-neutral-200">{contactData.email}</p>
            <p className="mt-2 text-sm text-neutral-200">{contactData.phone}</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-neutral-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.26em] text-neutral-400">Horarios</p>
            <p className="mt-3 text-sm text-neutral-200">{contactData.hours}</p>
          </div>
          <div className="flex gap-3">
            <a
              href={contactData.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-100 transition hover:bg-white/10"
            >
              Instagram
            </a>
            <a
              href={contactData.youtube}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-100 transition hover:bg-white/10"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
