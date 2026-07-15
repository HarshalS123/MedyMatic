import { ChevronRight, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsletterCTA } from "../components/NewsletterCTA";
import { ArticleTableOfContents, RelatedArticles } from "../components/ArticleNavigation";

export function TelemedicineBlogPage() {
  return (
    <>
      <article className="bg-white pb-20 pt-8 sm:pb-24">
        <div className="container-page max-w-4xl">
          <nav className="flex items-center gap-2 text-sm font-bold" aria-label="Breadcrumb">
            <Link to="/blog" className="text-brand-muted transition hover:text-brand-red">
              Blog
            </Link>
            <ChevronRight size={15} className="text-gray-300" />
            <span className="text-brand-red">Telemedicine</span>
          </nav>

          <header className="mt-8">
            <span className="inline-flex rounded-full bg-red-50 px-3 py-1.5 text-xs font-black text-brand-red">
              Healthcare Tech
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight text-brand-ink sm:text-5xl">
              Telemedicine
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-brand-muted">
              <span className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-red text-white">
                  <UserRound size={17} />
                </span>
                <span>
                  <span className="block font-black text-brand-ink">Medymatic Team</span>
                  <time dateTime="2026-03-12" className="text-xs">
                    Mar 12, 2026
                  </time>
                </span>
              </span>
              <span aria-hidden="true" className="hidden h-8 w-px bg-brand-line sm:block" />
              <span className="font-medium">4 min read</span>
            </div>
          </header>

          <figure className="mt-10 overflow-hidden rounded-2xl bg-gray-100 shadow-[0_18px_45px_rgba(17,24,39,0.08)]">
            <img
              src="/telemedicine.webp"
              alt="Healthcare professional using digital revenue cycle technology"
              fetchPriority="high"
              decoding="async"
              className="aspect-[16/8] w-full object-cover"
            />
          </figure>

          <p className="mt-8 text-base leading-8 text-brand-muted sm:text-lg">
            Telehealth enables remote medical care through secure virtual tools, offering accessible
            and convenient healthcare anytime, anywhere.
          </p>

          <ArticleTableOfContents
            items={[
              { id: "telehealth-benefits", label: "Benefits of telehealth management" },
              { id: "telehealth-benefits-continued", label: "Additional telehealth benefits" },
              { id: "billing-guidelines", label: "Telehealth billing guidelines" },
            ]}
          />

          <section className="mt-16" aria-labelledby="telehealth-benefits">
            <h2
              id="telehealth-benefits"
              className="border-l-2 border-brand-red pl-4 text-2xl font-black text-brand-ink sm:text-3xl"
            >
              Benefits of Telehealth Management
            </h2>

            <div className="mt-7 space-y-4">
              {[
                {
                  number: "01",
                  title: "Virtual Consultations",
                  text: "Patients can consult with healthcare providers remotely to discuss symptoms, receive medical advice, and obtain prescriptions or referrals.",
                },
                {
                  number: "02",
                  title: "Remote Monitoring",
                  text: "Patients with chronic conditions or those recovering from surgery can be monitored remotely using connected devices to track vital signs, symptoms, and medication adherence.",
                },
                {
                  number: "03",
                  title: "Telepsychiatry and Counseling",
                  text: "Mental health professionals provide therapy, counseling, and psychiatric evaluations remotely, making mental health services more accessible to individuals in need.",
                },
                {
                  number: "04",
                  title: "Specialty Consultations",
                  text: "Patients can receive consultations with specialists in various fields—such as cardiology, dermatology, neurology, and oncology—without the need for travel.",
                },
                {
                  number: "05",
                  title: "Follow-up Care",
                  text: "Telemedicine facilitates follow-up appointments and routine check-ups remotely, improving continuity of care and reducing the need for frequent visits to healthcare facilities.",
                },
              ].map((benefit) => (
                <article
                  key={benefit.number}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-7"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand-red text-xs font-black text-white">
                      {benefit.number}
                    </span>
                    <h3 className="text-base font-black text-brand-ink sm:text-lg">{benefit.title}</h3>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-brand-muted sm:text-base">
                    {benefit.text}
                  </p>
                </article>
              ))}
            </div>
          </section>
          <section className="mt-16" aria-labelledby="telehealth-benefits-continued">
            <h2
              id="telehealth-benefits-continued"
              className="border-l-2 border-brand-red pl-4 text-2xl font-black text-brand-ink sm:text-3xl"
            >
              Benefits of Telehealth Management
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Increased Access to Care",
                  text: "Telehealth has improved access to behavioral health services, especially in rural or underserved areas where mental health providers may be limited. Through telehealth, patients can connect with therapists, counselors, and psychiatrists remotely, overcoming barriers to treatment.",
                },
                {
                  title: "Convenience",
                  text: "Telehealth offers convenience for both patients and providers. Patients can attend therapy or counseling sessions from the comfort of their homes, eliminating travel and saving time. This ease of access can lead to better engagement and adherence to treatment plans.",
                },
                {
                  title: "Reduced Stigma",
                  text: "For some, the stigma around seeking mental health treatment can prevent them from getting help. Telehealth offers a more private and discreet way to receive therapy, which may reduce stigma and encourage more individuals to seek care.",
                },
                {
                  title: "Crisis Intervention",
                  text: "Telehealth can also be used for crisis intervention and suicide prevention. Hotlines and crisis centers can provide remote support and counseling, offering immediate assistance to individuals in crisis.",
                },
                {
                  title: "Enhanced Collaboration",
                  text: "Telehealth promotes better collaboration among a patient’s care team, including therapists, psychiatrists, primary care providers, and specialists. Virtual consultations and shared electronic health records enable providers to work together more effectively, developing comprehensive treatment plans and coordinating care.",
                },
                {
                  title: "Continuity of Care",
                  text: "Telehealth ensures more consistent and continuous care, allowing patients to easily connect with their mental health providers for follow-up appointments and ongoing support. This is especially beneficial for those with chronic mental health conditions who require regular monitoring and intervention.",
                },
              ].map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-xl border border-brand-line bg-white p-6 shadow-[0_8px_24px_rgba(17,24,39,0.04)]"
                >
                  <h3 className="flex items-center gap-3 text-base font-black text-brand-ink sm:text-lg">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                    {benefit.title}
                  </h3>
                  <p className="mt-4 pl-5 text-sm leading-7 text-brand-muted">{benefit.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16" aria-labelledby="billing-guidelines">
            <div className="flex flex-col gap-5 rounded-2xl border border-brand-line bg-gray-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <h2 id="billing-guidelines" className="text-xl font-black text-brand-ink sm:text-2xl">
                  TeleHealth Billing Guidelines
                </h2>
                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  Download our comprehensive telehealth billing guidelines.
                </p>
              </div>
              <a
                href="/TeleHealth Billing Guidelines.xlsx"
                download
                className="focus-ring inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-black text-white transition hover:bg-red-700"
              >
                Click here to download
              </a>
            </div>

            <p className="mt-10 text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
              With extensive expertise and a dedicated focus on telemedicine billing, our company is
              well-equipped to navigate the complexities of billing reimbursement in the telehealth
              landscape. Our team of seasoned professionals has in-depth knowledge of telemedicine
              billing codes, regulations, and payer policies, allowing us to maximize revenue and
              streamline the billing process for our clients. We prioritize accuracy, compliance, and
              timely reimbursement. By staying up-to-date with industry changes, we continuously adapt
              our strategies to meet the evolving needs of both our clients and the telemedicine
              industry. Our commitment to excellence and client satisfaction is reflected in our
              unparalleled service, helping healthcare providers optimize revenue while delivering
              high-quality care to patients remotely.
            </p>
          </section>
          <RelatedArticles currentSlug="telemedicine" />
        </div>
      </article>
      <NewsletterCTA />
    </>
  );
}
