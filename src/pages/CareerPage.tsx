import { CheckCircle2, ChevronRight, Heart, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function CareerPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gray-50 pb-16 pt-8">
        <div className="absolute inset-0 lg:hidden" aria-hidden="true">
          <img src="/figma-image-2.png" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/55" />
        </div>

        <div className="container-page relative z-10">
        <nav className="flex items-center gap-3 text-sm font-bold" aria-label="Breadcrumb">
          <Link to="/" className="text-white transition hover:text-brand-red lg:text-brand-ink">
            Home
          </Link>
          <ChevronRight size={16} className="text-white/60 lg:text-brand-muted" />
          <span className="text-brand-red">Careers</span>
        </nav>

        <div className="grid gap-10 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative z-10">
            <h1 className="max-w-xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl lg:text-black">
              Build Your Career
              <span className="mt-1 block text-brand-red">Make an Impact</span>
            </h1>
            <p className="mt-5 max-w-md text-sm font-medium leading-6 text-white/85 sm:text-base lg:text-brand-muted">
              Join a team that is passionate about improving healthcare and driving meaningful
              change through innovation and teamwork.
            </p>
            <a
              href="#open-positions"
              className="focus-ring mt-7 inline-flex min-h-12 w-fit items-center justify-center rounded-3xl border border-brand-red bg-white px-8 text-base font-black text-brand-red transition hover:bg-brand-red hover:text-white"
            >
              View Open Positions
            </a>
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
                src="/career-banner.png"
                alt="Medymatic team collaborating"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-8 bottom-2 h-24 w-24 rounded-full bg-brand-red" />

            <div className="absolute right-8 top-0 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                <Users className="text-brand-red" size={18} />
              </span>
              <span className="text-xs font-black leading-tight text-brand-ink">
                Growth
                <br />
                Opportunities
              </span>
            </div>
            <div className="absolute left-0 top-1/3 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                <Sparkles className="text-brand-red" size={18} />
              </span>
              <span className="text-xs font-black leading-tight text-brand-ink">
                Great Work
                <br />
                Culture
              </span>
            </div>
            <div className="absolute bottom-8 right-2 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                <Heart className="text-brand-red" size={18} />
              </span>
              <span className="text-xs font-black leading-tight text-brand-ink">
                Make a
                <br />
                Difference
              </span>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black leading-tight text-black sm:text-4xl">
              Why Work at <span className="text-brand-red">Medymatic</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-brand-muted sm:text-base">
              We&apos;re committed to creating an environment where talent thrives and innovation
              flourishes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Professional Development",
                description:
                  "Continuous learning opportunities with training programs, certifications, and skill-development initiatives.",
              },
              {
                title: "Work-Life Balance",
                description:
                  "Flexible work arrangements and comprehensive wellness programs to support your personal and professional life.",
              },
              {
                title: "Competitive Compensation",
                description:
                  "Industry-leading salary packages with performance bonuses and comprehensive benefits.",
              },
              {
                title: "Growth Opportunities",
                description:
                  "Clear career paths with opportunities to advance and take on leadership roles.",
              },
              {
                title: "Collaborative Culture",
                description:
                  "Work with talented professionals in a supportive, inclusive, and innovative environment.",
              },
              {
                title: "Healthcare Impact",
                description:
                  "Make a meaningful difference in healthcare by helping providers deliver better patient care.",
              },
            ].map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-xl border border-gray-100 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-[0_12px_30px_rgba(17,24,39,0.08)]"
              >
                <h3 className="text-base font-black text-brand-ink">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-red px-4 py-20 text-center text-white">
        <p className="text-xl font-medium leading-6">
          Interested candidates can send their resumes to <br />
          <a
            href="mailto:HR@medymatic.com"
            className="focus-ring ml-1 font-black underline-offset-4 hover:underline"
          >
            HR@medymatic.com
          </a>
          .
        </p>
      </section>

      <section className="section-y bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-3xl font-black text-black sm:text-4xl">
              Our <span className="text-brand-red">Culture</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-brand-muted sm:text-base">
              At Medymatic, we foster an inclusive, collaborative environment where innovation
              thrives. Our team members are empowered to take ownership, share ideas, and grow
              professionally while making a meaningful impact in healthcare.
            </p>

            <div className="mt-7 space-y-4">
              {[
                {
                  title: "Innovative First",
                  text: "We encourage creative problem-solving and new ideas.",
                },
                {
                  title: "Team Collaboration",
                  text: "Work with talented professionals across departments.",
                },
                {
                  title: "Continuous Learning",
                  text: "Access to training, certifications, and growth opportunities.",
                },
                {
                  title: "Work-Life Balance",
                  text: "Flexible schedules and remote work options support personal well-being.",
                },
              ].map((value) => (
                <div key={value.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-red" size={19} />
                  <p className="text-sm leading-6 text-brand-muted">
                    <span className="font-black text-brand-ink">{value.title}:</span> {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-72 overflow-hidden rounded-2xl bg-gray-100 shadow-[0_20px_50px_rgba(17,24,39,0.08)] sm:h-96">
            <img
              src="/culture.png"
              alt="Medymatic team culture and collaboration"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="open-positions" className="section-y scroll-mt-24 bg-gray-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black text-black sm:text-4xl">
              Application <span className="text-brand-red">Process</span>
            </h2>
            <p className="mt-4 text-sm leading-6 text-brand-muted sm:text-base">
              Our streamlined hiring process is designed to find the best fit for both you and our
              team.
            </p>
          </div>

          <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <li
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-red-200 lg:block"
            />
            {[
              {
                number: "01",
                title: "Apply Online",
                text: "Submit your resume and cover letter through our careers portal.",
              },
              {
                number: "02",
                title: "Initial Screening",
                text: "Our HR team reviews applications and contacts qualified candidates.",
              },
              {
                number: "03",
                title: "Interviews",
                text: "Meet with hiring managers and team members to discuss the role and your fit.",
              },
              {
                number: "04",
                title: "Offer & Onboarding",
                text: "Receive your offer and join our comprehensive onboarding program.",
              },
            ].map((step) => (
              <li key={step.number} className="relative text-center">
                <span className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-red text-sm font-black text-white shadow-[0_8px_18px_rgba(232,35,55,0.25)]">
                  {step.number}
                </span>
                <h3 className="mt-5 text-base font-black text-brand-ink">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-brand-muted">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
