import Image from "next/image";

import type { EventItem } from "@/types";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${event.accent}`}>
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover opacity-80 transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs uppercase tracking-[0.28em] text-orange-100">
          {event.category}
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <p className="text-sm text-orange-200">
            {event.date} · {event.time}
          </p>
          <h3 className="font-display text-2xl text-orange-50">{event.title}</h3>
        </div>
        <p className="text-sm leading-7 text-neutral-300">{event.description}</p>
      </div>
    </article>
  );
}
