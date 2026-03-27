import { events } from "@/data/events";

import { EventCard } from "@/components/ui/EventCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AgendaSection() {
  return (
    <section id="agenda" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Agenda"
        title="Programacion publica con curaduria y ritmo propio"
        description="Shows, talleres, ferias y noches especiales que muestran a Pulqui como espacio cultural activo y en movimiento."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
