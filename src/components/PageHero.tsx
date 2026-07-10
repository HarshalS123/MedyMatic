type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
};

export function PageHero({ eyebrow, title, text, image = "/figma-image-1.png" }: PageHeroProps) {
  return (
    <section className="border-b border-brand-line bg-brand-soft">
      <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-[1fr_0.85fr] lg:py-20">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-brand-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-brand-muted sm:text-lg">{text}</p>
        </div>
        <div className="overflow-hidden rounded-lg border border-white bg-white shadow-card">
          <img
            src={image}
            alt=""
            fetchPriority="high"
            decoding="async"
            className="h-72 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
