import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: string;
};

const tones: Record<string, string> = {
  disponible: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  agotada: "border-rose-400/30 bg-rose-400/10 text-rose-200",
  ok: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  bajo: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  abierta: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  "en preparacion": "border-violet-400/30 bg-violet-400/10 text-violet-200",
  lista: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  entregada: "border-neutral-400/30 bg-neutral-400/10 text-neutral-200",
  libre: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  ocupada: "border-orange-400/30 bg-orange-400/10 text-orange-200",
  reservada: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200",
  activo: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  descanso: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  franco: "border-neutral-400/30 bg-neutral-400/10 text-neutral-200",
  nuevo: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  revisado: "border-violet-400/30 bg-violet-400/10 text-violet-200",
  contactado: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  archivado: "border-neutral-400/30 bg-neutral-400/10 text-neutral-200",
  "en curso": "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  pausada: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  "por iniciar": "border-violet-400/30 bg-violet-400/10 text-violet-200",
  finalizada: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  pendiente: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  inactivo: "border-neutral-400/30 bg-neutral-400/10 text-neutral-200",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-3 py-1 text-xs uppercase tracking-[0.22em]",
        tones[status] ?? "border-white/10 bg-white/5 text-neutral-200",
      )}
    >
      {status}
    </span>
  );
}
