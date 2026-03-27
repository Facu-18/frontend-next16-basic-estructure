type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl space-y-4 ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-300">{eyebrow}</p>
      <h2 className="font-display text-3xl leading-tight text-orange-50 sm:text-4xl">{title}</h2>
      <p className="text-sm leading-7 text-neutral-300 sm:text-base">{description}</p>
    </div>
  );
}
