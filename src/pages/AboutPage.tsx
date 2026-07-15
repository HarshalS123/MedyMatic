import { BarChart3, ChevronRight, Eye, Quote, Rocket, ShieldCheck, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gray-50 pb-16 pt-8">
        <div className="absolute inset-0 lg:hidden" aria-hidden="true">
          <img src="/career-banner.webp" alt="Medymatic team" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/55" />
        </div>

        <div className="container-page relative z-10">
          <nav className="flex items-center gap-3 text-sm font-bold" aria-label="Breadcrumb">
            <Link to="/" className="text-white transition hover:text-brand-red lg:text-brand-ink">
              Home
            </Link>
            <ChevronRight size={16} className="text-white/60 lg:text-brand-muted" />
            <span className="text-brand-red">About Us</span>
          </nav>

          <div className="grid gap-10 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative z-10">
              <h1 className="max-w-lg text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl lg:text-black">
                About Us
                <span className="mt-1 block text-brand-red">Who We Are</span>
              </h1>
              <p className="mt-5 max-w-md text-sm font-medium leading-6 text-white/85 sm:text-base lg:text-brand-muted">
                At Medymatic, we are committed to transforming healthcare operations through
                innovative RCM solutions, expertise, and a people-first approach.
              </p>
              <Link
                to="/contact"
                className="focus-ring mt-7 inline-flex min-h-12 w-56 items-center justify-center rounded-3xl bg-brand-red px-8 text-base font-black text-white transition hover:bg-red-700"
              >
                Contact Us
              </Link>
            </div>

            <div className="relative hidden min-h-[26rem] sm:min-h-[28rem] lg:block">
              <div className="absolute left-2 top-6 hidden text-3xl font-light text-red-200 lg:block">
                +
              </div>
              <div className="absolute -left-8 bottom-16 hidden text-3xl font-light text-red-200 lg:block">
                +
              </div>
              <div className="absolute left-0 top-1/2 hidden text-3xl font-light text-red-200 lg:block">
                +
              </div>

              <div className="absolute right-0 top-0 h-[24rem] w-[24rem] overflow-hidden rounded-full bg-white shadow-[0_30px_80px_rgba(17,24,39,0.08)] sm:h-[27rem] sm:w-[27rem] lg:h-[29rem] lg:w-[29rem]">
                <img
                  src="/career-banner.webp"
                  alt="Medymatic healthcare operations team"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-8 bottom-2 h-24 w-24 rounded-full bg-brand-red" />

              <div className="absolute right-8 top-0 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                  <Users className="text-brand-red" size={18} />
                </span>
                <span className="text-xs font-black leading-tight text-brand-ink">
                  People
                  <br />
                  First
                </span>
              </div>
              <div className="absolute left-0 top-1/3 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                  <ShieldCheck className="text-brand-red" size={18} />
                </span>
                <span className="text-xs font-black leading-tight text-brand-ink">
                  Trusted by
                  <br />
                  Healthcare Leaders
                </span>
              </div>
              <div className="absolute bottom-8 right-2 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                  <BarChart3 className="text-brand-red" size={18} />
                </span>
                <span className="text-xs font-black leading-tight text-brand-ink">
                  Driven by
                  <br />
                  Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="section-y scroll-mt-24 bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium text-brand-muted">About Us</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-black sm:text-4xl">
              About <span className="text-brand-red">Medymatic</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-brand-muted">
              Medymatic is focused on delivering reliable healthcare revenue cycle management
              and medical billing solutions designed to help healthcare providers improve
              operational efficiency and financial performance.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:gap-14">
            <div className="space-y-5 text-sm leading-6 text-brand-ink sm:text-base">
              <p>
                At MedyMatic Business Solutions, we provide top-tier medical billing solutions
                tailored to the needs of healthcare providers and payers across the United States.
              </p>
              <p>
                Our team of seasoned professionals brings extensive knowledge and experience in
                the US healthcare field, ensuring that we deliver exceptional results.
              </p>
              <p>
                We understand the unique challenges faced by payers and healthcare providers. Our
                mission is to streamline billing processes, enhance financial performance, and
                improve operational efficiency for our clients.
              </p>
              <p>
                Our vision is to make medical billing services accessible and affordable for
                healthcare facilities of all sizes. By offering budget-friendly solutions, we
                enable our clients to outsource their billing operations with confidence and
                ease—allowing them to focus on what truly matters: delivering outstanding patient
                care.
              </p>
              <p>
                At MedyMatic, we are dedicated to improving the efficiency and financial health of
                your practice through our comprehensive and cost-effective billing solutions.
              </p>
            </div>

            <div className="relative min-h-[28rem] overflow-hidden rounded-xl bg-gray-100 shadow-[0_20px_50px_rgba(17,24,39,0.08)] sm:min-h-[34rem] lg:min-h-0">
              <img
                src="/about.webp"
                alt="Medymatic reception area"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="section-y scroll-mt-24 bg-gray-50">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-red text-white">
                  <Rocket size={24} />
                </span>
                <h2 className="text-3xl font-black text-brand-red sm:text-4xl">Our Mission</h2>
              </div>
              <div className="mt-5 space-y-5 text-sm leading-7 text-brand-muted sm:text-base">
                <p>
                  Our mission is to empower healthcare providers by making high-quality Revenue
                  Cycle Management (RCM) both accessible and cost-effective. We understand that
                  many providers hesitate to outsource due to rising costs, which often impacts
                  their operational decisions.
                </p>
                <p>
                  Our goal is to change that by offering reliable, end-to-end RCM solutions that
                  deliver exceptional results without straining your budget. We aim to support new
                  and growing practices by taking complete ownership of their RCM processes.
                </p>
              </div>
            </div>

            <div className="h-64 overflow-hidden rounded-2xl bg-gray-100 shadow-[0_20px_50px_rgba(17,24,39,0.08)] sm:h-72">
              <img
                src="/mission.webp"
                alt="doctors making a circle to represent unity and collaboration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article id="vision" className="scroll-mt-24 rounded-2xl bg-brand-red p-7 text-white shadow-[0_12px_30px_rgba(17,24,39,0.14)] sm:p-9">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-white text-red-300">
                  <Target size={30} />
                </span>
                <div>
                  <h3 className="text-2xl font-black">Our Vision</h3>
                  <span className="mt-2 block h-0.5 w-12 bg-white" />
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/90 sm:text-base">
                Our vision is to make medical billing services accessible and affordable for
                healthcare facilities of all sizes. By offering budget-friendly solutions, we
                enable our clients to outsource their billing operations with confidence and
                ease—allowing them to focus on what truly matters: delivering outstanding patient
                care and building strong patient relationships.
              </p>
            </article>

            <article id="purpose" className="scroll-mt-24 rounded-2xl border border-red-200 bg-white p-7 shadow-[0_12px_30px_rgba(17,24,39,0.1)] sm:p-9">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-red text-white shadow-md">
                  <Eye size={30} />
                </span>
                <div>
                  <h3 className="text-2xl font-black text-brand-red">Our Purpose</h3>
                  <span className="mt-2 block h-0.5 w-12 bg-brand-red" />
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-brand-muted sm:text-base">
                Our purpose is to simplify and strengthen the financial backbone of healthcare
                practices by redefining how Revenue Cycle Management is delivered. We exist to
                remove the burden of complex, costly RCM processes so providers can focus entirely
                on patient care and practice growth. By offering efficient, transparent, and
                affordable solutions, we aim to support both new and established providers in
                building sustainable, thriving practices.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-black text-black sm:text-4xl">
            Our Core <span className="text-brand-red">Values</span>
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Excellence",
                image: "/excellency.webp",
                description:
                  "We maintain the highest standards in every aspect of our service delivery, ensuring accuracy, compliance, and exceptional results for our clients.",
              },
              {
                title: "Transparency",
                image: "/transparency.webp",
                description:
                  "We believe in open communication and complete transparency in our processing, pricing, and performance metrics with all our partners.",
              },
              {
                title: "Innovation",
                image: "/innovation.webp",
                description:
                  "We continuously evolve our processes and adopt cutting-edge technologies to provide the most efficient revenue cycle management solutions.",
              },
            ].map((value) => (
              <article
                key={value.title}
                className="overflow-hidden rounded-2xl border border-brand-line bg-white p-5 shadow-[0_8px_24px_rgba(17,24,39,0.06)]"
              >
                <img
                  src={value.image}
                  alt={value.title}
                  className="h-40 w-full rounded-xl object-cover"
                />
                <h3 className="mt-5 text-xl font-black text-brand-red">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="section-y scroll-mt-24 overflow-hidden bg-[#070707] text-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-brand-red/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-brand-red">
              Leadership
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Our <span className="text-brand-red">Leadership Quote</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400">
              Experienced professionals dedicated to transforming healthcare revenue cycle
              management.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#1b1b1b] to-[#101010] p-6 shadow-2xl sm:p-8 lg:p-10">
            <Quote
              aria-hidden="true"
              className="absolute right-8 top-6 text-white/[0.04]"
              size={120}
              strokeWidth={1.5}
            />

            <div className="relative grid gap-8 lg:grid-cols-[0.75fr_1.6fr] lg:items-center lg:gap-12">
              <div>
                <div className="h-64 overflow-hidden rounded-xl border border-white/10 sm:h-72 lg:h-80">
                  <img
                    src="/harshal.webp"
                    alt="Medymatic CEO Harshal Sawarkar"
                    className="h-full w-full object-fill"
                  />
                </div>
                <div className="mt-5 text-center lg:text-left">
                  <p className="text-lg font-black">Harshal Sawarkar</p>
                  <span className="mt-2 inline-flex rounded-full bg-brand-red px-3 py-1 text-[0.65rem] font-black uppercase tracking-wider text-white">
                    CEO - Medymatic
                  </span>
                </div>
              </div>

              <blockquote className="border-l-2 border-brand-red pl-6 text-base leading-8 text-gray-300 sm:pl-8 sm:text-lg sm:leading-9">
                “We partner with healthcare providers not just to manage their revenue cycle, but
                to transform it—bringing visible improvements to systems, workflows, and financial
                outcomes. As an extension of our providers, we deliver intelligent, cost-effective
                solutions that drive sustainable and long-term results, without compromising
                quality. Equally, we are committed to our people—building a culture where employees
                are respected, empowered, and inspired, because their growth directly fuels the
                success of every provider we serve.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="section-y scroll-mt-24 bg-gray-50">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black leading-tight text-black sm:text-4xl lg:text-5xl">
              Proven Success <span className="text-brand-red">Stories</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-brand-muted sm:text-base">
              Real results from healthcare providers we&apos;ve partnered with to optimize their
              revenue cycle operations and drive measurable growth.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-brand-line bg-white p-7 shadow-[0_10px_30px_rgba(17,24,39,0.04)] sm:p-9">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-black text-brand-red">Claim Denial Reduction</h3>
                  <p className="mt-2 font-black text-brand-ink">Multi-Specialty Practice</p>
                </div>
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-red-50 text-lg font-black text-brand-red">
                  35%
                </span>
              </div>

              <p className="mt-6 text-sm leading-7 text-brand-muted sm:text-base">
                Implemented comprehensive denial management process resulting in significant
                improvement in first-pass acceptance rate and streamlined revenue collection
                workflows.
              </p>

              <div className="my-7 h-px bg-brand-line" />

              <div className="space-y-4">
                {["35% fewer denials", "15% faster payments", "98% clean claim rate"].map(
                  (result) => (
                    <div
                      key={result}
                      className="flex items-center gap-4 rounded-xl bg-gray-50 px-5 py-4 text-sm font-black text-brand-ink"
                    >
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red" />
                      {result}
                    </div>
                  ),
                )}
              </div>
            </article>

            <div className="grid gap-6">
              <article className="rounded-2xl bg-gradient-to-br from-brand-red to-[#ff4054] p-7 text-white shadow-[0_14px_32px_rgba(232,35,55,0.18)] sm:p-9">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-black">Revenue Increase</h3>
                    <p className="mt-2 font-bold text-white/90">Urgent Care Network</p>
                  </div>
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/20 text-lg font-black">
                    22%
                  </span>
                </div>
                <p className="mt-5 text-sm leading-6 text-white/90">
                  Optimized revenue cycle workflows across 12 locations, improving cash flow and
                  operational efficiency.
                </p>
                <ul className="mt-5 space-y-2.5 text-sm font-bold">
                  {["22% revenue increase", "40% faster AR recovery", "95% patient satisfaction"].map(
                    (result) => (
                      <li key={result} className="flex items-center gap-3">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-white" />
                        {result}
                      </li>
                    ),
                  )}
                </ul>
              </article>

              <article className="rounded-2xl border border-brand-line bg-white p-7 shadow-[0_10px_30px_rgba(17,24,39,0.04)] sm:p-9">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-black text-brand-red">Faster Credentialing</h3>
                    <p className="mt-2 font-black text-brand-ink">Behavioral Health Group</p>
                  </div>
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-red-50 text-lg font-black text-brand-red">
                    50%
                  </span>
                </div>
                <p className="mt-5 text-sm leading-6 text-brand-muted">
                  Reduced credentialing timeline and improved payer enrollment efficiency for
                  expanding practice.
                </p>
                <ul className="mt-5 space-y-2.5 text-sm font-bold text-brand-ink">
                  {["50% faster credentialing", "100% compliance maintained", "20+ payer contracts"].map(
                    (result) => (
                      <li key={result} className="flex items-center gap-3">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                        {result}
                      </li>
                    ),
                  )}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
