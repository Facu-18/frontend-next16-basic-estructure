import type { DrinkItem, FoodItem } from "@/types";

type MenuSectionProps = {
  title: string;
  description: string;
  items: Array<DrinkItem | FoodItem>;
};

export function MenuSection({ title, description, items }: MenuSectionProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-neutral-900/80 p-6 sm:p-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-display text-3xl text-orange-50">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-300">{description}</p>
        </div>
        <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-neutral-200">
          {items.length} opciones
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="flex items-start justify-between gap-4 rounded-[1.5rem] border border-white/8 bg-white/5 p-5"
          >
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.24em] text-violet-300">{item.category}</p>
              <h4 className="text-lg font-semibold text-orange-50">{item.name}</h4>
              <p className="text-sm leading-7 text-neutral-300">{item.description}</p>
            </div>
            <p className="rounded-full border border-orange-400/40 bg-orange-500/10 px-3 py-1 text-sm font-semibold text-orange-100">
              {item.price}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
