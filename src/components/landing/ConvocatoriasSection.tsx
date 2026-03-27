import { convocatorias } from "@/data/convocatorias";

import { ConvocatoriaCard } from "@/components/ui/ConvocatoriaCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ConvocatoriasSection() {
  return (
    <section id="convocatorias" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Convocatorias"
        title="Una landing que tambien ordena oportunidades de participacion"
        description="La experiencia publica ya deja lista la estructura para futuras integraciones de formularios, validaciones y gestion interna."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {convocatorias.map((item) => (
          <ConvocatoriaCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
