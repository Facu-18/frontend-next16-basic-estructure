import { landingFormSubmissions } from "@/data/forms";

import { StatusBadge } from "@/components/ui/StatusBadge";
import { Table } from "@/components/ui/Table";

const labels = {
  contacto: "Contacto",
  convocatoria: "Convocatoria",
  espacios: "Espacios",
  newsletter: "Newsletter",
} as const;

export function LandingFormsPanel() {
  const totals = {
    contacto: landingFormSubmissions.filter((item) => item.type === "contacto").length,
    convocatoria: landingFormSubmissions.filter((item) => item.type === "convocatoria").length,
    espacios: landingFormSubmissions.filter((item) => item.type === "espacios").length,
    newsletter: landingFormSubmissions.filter((item) => item.type === "newsletter").length,
  };

  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(totals).map(([key, value]) => (
          <article key={key} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">
              {labels[key as keyof typeof labels]}
            </p>
            <p className="mt-3 font-display text-4xl text-orange-50">{value}</p>
          </article>
        ))}
      </div>

      <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-3xl text-orange-50">Envios desde la landing</h2>
            <p className="mt-2 text-sm leading-7 text-neutral-300">
              Vista mock para centralizar los datos de formularios publicos dentro del sistema interno.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-3 sm:flex-row lg:max-w-xl">
            <input
              aria-label="Buscar envio"
              placeholder="Buscar por nombre o email"
              className="w-full rounded-2xl border border-white/10 bg-neutral-950/70 px-4 py-3 text-sm text-neutral-100 outline-none placeholder:text-neutral-500 focus:border-orange-300/45"
            />
            <select
              aria-label="Filtrar por formulario"
              defaultValue="all"
              className="rounded-2xl border border-white/10 bg-neutral-950/70 px-4 py-3 text-sm text-neutral-100 outline-none focus:border-orange-300/45"
            >
              <option value="all">Todos los formularios</option>
              <option value="contacto">Contacto</option>
              <option value="convocatoria">Convocatoria</option>
              <option value="espacios">Espacios</option>
              <option value="newsletter">Newsletter</option>
            </select>
          </div>
        </div>
      </div>

      <Table columns={["Formulario", "Remitente", "Resumen", "Fecha", "Estado", "Origen"]}>
        {landingFormSubmissions.map((submission) => (
          <tr key={submission.id} className="border-t border-white/5 align-top">
            <td className="px-5 py-4">
              <div>
                <p className="text-sm font-medium text-neutral-100">{submission.title}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-violet-300">
                  {labels[submission.type]}
                </p>
              </div>
            </td>
            <td className="px-5 py-4 text-sm text-neutral-300">
              <p className="text-neutral-100">{submission.name}</p>
              <p className="mt-1">{submission.email}</p>
              {submission.phone ? <p className="mt-1 text-neutral-400">{submission.phone}</p> : null}
            </td>
            <td className="px-5 py-4 text-sm leading-7 text-neutral-300">{submission.summary}</td>
            <td className="px-5 py-4 text-sm text-neutral-300">{submission.date}</td>
            <td className="px-5 py-4">
              <StatusBadge status={submission.status} />
            </td>
            <td className="px-5 py-4 text-sm text-neutral-400">{submission.source}</td>
          </tr>
        ))}
      </Table>
    </section>
  );
}
