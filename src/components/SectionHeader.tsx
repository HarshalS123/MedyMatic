type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-brand-ink sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-brand-muted">{text}</p>}
    </div>
  );
}
