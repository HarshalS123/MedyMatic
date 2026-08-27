import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsletterCTA } from "../components/NewsletterCTA";
import { ArticleTableOfContents, RelatedArticles } from "../components/ArticleNavigation";

export function NewPracticeLaunchBlogPage() {
  return (
    <>
      <article className="bg-white pb-20 pt-8 sm:pb-24">
      <div className="container-page max-w-5xl">
        <nav className="flex flex-wrap items-center gap-2 text-sm font-bold" aria-label="Breadcrumb">
          <Link to="/about#case-studies" className="text-brand-muted transition hover:text-brand-red">
            Case Studies
          </Link>
          <ChevronRight size={15} className="text-gray-300" />
          <span className="text-brand-red">New Practice Launch &amp; First Revenue Cycle Success</span>
        </nav>

        <header className="mt-8">
          <span className="inline-flex rounded-full bg-red-50 px-3 py-1.5 text-xs font-black text-brand-red">
            Case Study
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-brand-ink sm:text-5xl">
            From Zero to First Payment in 30 Days – A New Psychiatry Practice&apos;s Journey
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-brand-muted">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-red text-sm font-black text-white">
              M
            </span>
            <span>
              <span className="block font-black text-brand-ink">Medymatic Team</span>
              <time dateTime="2025-06-01" className="text-xs">
                June 2025
              </time>
            </span>
            <span aria-hidden="true" className="hidden h-8 w-px bg-brand-line sm:block" />
            <span className="font-medium">8 min read</span>
          </div>
        </header>

        <figure className="mt-12 overflow-hidden rounded-2xl bg-gray-100 shadow-[0_18px_45px_rgba(17,24,39,0.08)]">
          <img
            src="/psychiatry.webp"
            alt="Illustration of a mobile calculator"
            fetchPriority="high"
            decoding="async"
            className="aspect-[16/7] w-full object-cover"
          />
        </figure>

        <p className="mt-10 text-base leading-8 text-brand-muted sm:text-lg">
          Medymatic partnered with a Texas-based psychiatry provider transitioning from a solo
          setup into a growing group practice—expanding from 1 to 3 providers within just three
          months. At the outset, the practice had no established credentialing, payer contracts, or
          billing infrastructure, creating a high risk of delayed revenue and early-stage cash flow
          challenges. Our goal was to build a fully functional and scalable revenue cycle system
          from the ground up while ensuring fast time-to-revenue.
        </p>

        <ArticleTableOfContents
          items={[
            { id: "launch-challenges", label: "Challenges" },
            { id: "launch-approach", label: "Our approach" },
            { id: "launch-results", label: "Results and timeline" },
            { id: "key-outcomes", label: "Key outcomes" },
          ]}
        />

        <section className="mt-16" aria-labelledby="launch-challenges">
          <h2
            id="launch-challenges"
            className="border-l-2 border-brand-red pl-4 text-3xl font-black text-brand-ink sm:text-4xl"
          >
            Challenges
          </h2>
          <p className="mt-5 text-base leading-8 text-brand-muted sm:text-lg">
            The practice faced several early-stage operational hurdles:
          </p>
          <ul className="mt-7 space-y-5 text-base leading-7 text-brand-muted sm:text-lg">
            {[
              "No existing credentialing or payer enrolments",
              "Absence of billing workflows or system integration",
              "High risk of delayed reimbursements and cash flow gaps",
            ].map((challenge) => (
              <li key={challenge} className="flex items-start gap-3">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                {challenge}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16" aria-labelledby="launch-approach">
          <h2
            id="launch-approach"
            className="border-l-2 border-brand-red pl-4 text-3xl font-black text-brand-ink sm:text-4xl"
          >
            Our Approach
          </h2>
          <p className="mt-5 text-base leading-8 text-brand-muted sm:text-lg">
            To ensure a smooth and efficient launch, Medymatic implemented a structured, end-to-end
            RCM setup:
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Credentialing Setup",
                points: [
                  "Completed CAQH profile creation and attestations",
                  "Submitted enrolments for Medicare, Medicaid, and major commercial payers",
                ],
              },
              {
                number: "02",
                title: "Billing System Setup",
                points: [
                  "Configured EHR and billing system integration",
                  "Built claim submission workflows from scratch",
                ],
              },
              {
                number: "03",
                title: "Eligibility & Intake Process",
                points: [
                  "Established a robust insurance verification process",
                  "Created standardized intake SOPs to ensure accurate and clean data capture",
                ],
              },
              {
                number: "04",
                title: "First Claim Execution",
                points: ["Submitted the first batch of claims within 2 weeks of payer approvals"],
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-7"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-red text-sm font-black text-white">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-black text-brand-ink sm:text-2xl">{step.title}</h3>
                </div>
                <ul className="mt-7 space-y-5 text-sm leading-7 text-brand-muted sm:text-base">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="launch-results">
          <h2
            id="launch-results"
            className="border-l-2 border-brand-red pl-4 text-3xl font-black text-brand-ink sm:text-4xl"
          >
            Results
          </h2>
          <p className="mt-5 text-base leading-8 text-brand-muted sm:text-lg">
            The implementation led to rapid revenue activation and a strong financial foundation
            for the growing practice:
          </p>

          <div className="mt-7 overflow-hidden rounded-2xl border border-brand-line bg-white">
            <table className="w-full border-collapse text-left">
              <thead className="bg-brand-red text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 text-sm font-black sm:px-8">
                    Metric
                  </th>
                  <th scope="col" className="px-6 py-4 text-sm font-black sm:px-8">
                    Timeline
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line text-sm text-brand-muted sm:text-base">
                {[
                  ["Credentialing Approvals", "30–45 days"],
                  ["First Claim Submission", "Within 14 days of payer approval"],
                  ["First Payment Received", "Within 30 days of launch"],
                ].map(([metric, timeline], index) => (
                  <tr key={metric} className={index % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-brand-ink sm:px-8 sm:py-5"
                    >
                      {metric}
                    </th>
                    <td className="px-6 py-4 sm:px-8 sm:py-5">{timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="key-outcomes">
          <h2
            id="key-outcomes"
            className="border-l-2 border-brand-red pl-4 text-3xl font-black text-brand-ink sm:text-4xl"
          >
            Key Outcomes
          </h2>
          <ul className="mt-7 space-y-5 text-base leading-8 text-brand-muted sm:text-lg">
            <li className="flex items-start gap-4">
              <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red" />
              <span>
                Achieved <strong className="font-medium text-brand-red">first payment within 30 days of launch</strong>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red" />
              <span>
                Maintained <strong className="font-medium text-brand-red">clean Accounts Receivable (AR) from day one</strong>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red" />
              <span>
                Built a <strong className="font-medium text-brand-red">scalable billing and revenue cycle structure</strong> to support practice expansion
              </span>
            </li>
          </ul>
        </section>
        <RelatedArticles currentSlug="new-practice-launch-first-revenue-cycle-success" />
      </div>
      </article>
      <NewsletterCTA />
    </>
  );
}
