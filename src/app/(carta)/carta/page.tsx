import { MenuExperience } from "@/components/landing/MenuExperience";

export default function CartaPage() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.22),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl space-y-6">
            <p className="text-xs uppercase tracking-[0.34em] text-orange-300">Carta Pulqui</p>
            <h1 className="font-display text-5xl leading-none text-orange-50 sm:text-6xl">
              Barra y cocina en una experiencia dedicada
            </h1>
            <p className="max-w-2xl text-base leading-8 text-neutral-300">
              Esta vista queda aislada para mostrar solo la carta, con foco total en cervezas, tragos y comida, sin navegacion hacia otras pantallas.
            </p>
          </div>
        </div>
      </section>

      <MenuExperience />
    </div>
  );
}
