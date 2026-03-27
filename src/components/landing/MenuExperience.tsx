import { beerItems } from "@/data/beers";
import { drinkItems, foodItems } from "@/data/menu";

import { BeerMenuSection } from "@/components/ui/BeerMenuSection";
import { MenuSection } from "@/components/ui/MenuSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function MenuExperience() {
  return (
    <section id="carta" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Carta"
        title="Carta separada en Cervezas, Tragos y bebidas, y Comida"
        description="Cervezas pasa a ser una experiencia visual destacada y distinta, mientras el resto de la barra conserva una lectura mas funcional."
      />

      <div className="mt-10 space-y-8">
        <BeerMenuSection items={beerItems} />
        <div className="grid gap-8 xl:grid-cols-2">
          <MenuSection
            title="Tragos y bebidas"
            description="Selecciones de barra para acompanar shows, pista, patio y ferias."
            items={drinkItems}
          />
          <MenuSection
            title="Comida"
            description="Opciones rapidas y rendidoras para sostener la jornada nocturna."
            items={foodItems}
          />
        </div>
      </div>
    </section>
  );
}
