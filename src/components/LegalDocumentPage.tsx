import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalDocumentPageProps = {
  title: string;
  introduction: string;
  effectiveDate?: string;
  effectiveDateTime?: string;
  sections: LegalSection[];
};

export function LegalDocumentPage({
  title,
  introduction,
  effectiveDate,
  effectiveDateTime,
  sections,
}: LegalDocumentPageProps) {
  return (
    <>
      <section className="border-b border-brand-line bg-gray-50 py-10 sm:py-14">
        <div className="container-page max-w-5xl">
          <nav className="flex items-center gap-2 text-sm font-bold" aria-label="Breadcrumb">
            <Link to="/" className="text-brand-muted transition hover:text-brand-red">
              Home
            </Link>
            <ChevronRight size={15} className="text-gray-300" />
            <span className="text-brand-red">{title}</span>
          </nav>
          <h1 className="mt-7 text-4xl font-black leading-tight text-brand-ink sm:text-5xl">
            {title}
          </h1>
          {effectiveDate && effectiveDateTime && (
            <p className="mt-4 text-sm font-bold text-brand-muted">
              Effective date: <time dateTime={effectiveDateTime}>{effectiveDate}</time>
            </p>
          )}
          <p className="mt-5 max-w-3xl text-base leading-8 text-brand-muted sm:text-lg">
            {introduction}
          </p>
        </div>
      </section>

      <article className="section-y bg-white">
        <div className="container-page max-w-5xl">
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="border-l-2 border-brand-red pl-4 text-2xl font-black leading-tight text-brand-ink sm:text-3xl">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-5 text-base leading-8 text-brand-muted">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-5 space-y-3 text-base leading-7 text-brand-muted">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
