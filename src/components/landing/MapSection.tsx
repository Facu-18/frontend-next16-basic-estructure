import { contactData } from "@/data/site";

import { SectionTitle } from "@/components/ui/SectionTitle";

export function MapSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-[2.25rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div className="space-y-5">
          <SectionTitle
            eyebrow="Ubicacion"
            title="Pulqui en el mapa"
            description="Sumamos un bloque visual de Google Maps para que la landing ubique rapido el espacio y refuerce la experiencia de visita."
          />
          <div className="rounded-[1.5rem] border border-white/10 bg-neutral-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">Direccion</p>
            <p className="mt-3 text-lg text-orange-50">{contactData.address}</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-950/70">
          <iframe
            title="Mapa de Pulqui"
            src="https://www.google.com/maps?q=Av.%20Colon%201845%2C%20Cordoba&z=15&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
