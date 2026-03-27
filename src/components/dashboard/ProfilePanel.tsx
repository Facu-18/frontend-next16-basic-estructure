import { mockUser } from "@/data/user";

export function ProfilePanel() {
  const entries = [
    { label: "Rol", value: mockUser.role },
    { label: "Email", value: mockUser.email },
    { label: "Telefono", value: mockUser.phone },
    { label: "Sector", value: mockUser.sector },
    { label: "Espacio", value: mockUser.venue },
    { label: "Ubicacion", value: mockUser.location },
  ];

  return (
    <section className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
      <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/20 font-display text-3xl text-orange-100">
          {mockUser.initials}
        </div>
        <h2 className="mt-5 font-display text-3xl text-orange-50">{mockUser.name}</h2>
        <p className="mt-2 text-sm text-orange-200">{mockUser.role}</p>
        <div className="mt-6 space-y-3">
          <div className="rounded-2xl border border-white/10 bg-neutral-950/70 px-4 py-3 text-sm text-neutral-200">
            Turno: {mockUser.shift}
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-950/70 px-4 py-3 text-sm text-neutral-200">
            Sector actual: {mockUser.sector}
          </div>
        </div>
      </article>

      <article className="rounded-[2rem] border border-white/10 bg-neutral-950/70 p-6">
        <h3 className="font-display text-3xl text-orange-50">Datos del perfil</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {entries.map((entry) => (
            <div key={entry.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">{entry.label}</p>
              <p className="mt-3 text-lg text-neutral-100">{entry.value}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
