import { BriefcaseBusiness, ChevronRight, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsletterCTA } from "../components/NewsletterCTA";
import { ArticleTableOfContents, RelatedArticles } from "../components/ArticleNavigation";

export function PsychotherapyBlogPage() {
  return (
    <>
      <article className="bg-white pb-20 pt-8 sm:pb-24">
      <div className="container-page max-w-4xl">
        <nav className="flex items-center gap-2 text-sm font-bold" aria-label="Breadcrumb">
          <Link to="/blog" className="text-brand-muted transition hover:text-brand-red">
            Blog
          </Link>
          <ChevronRight size={15} className="text-gray-300" />
          <span className="text-brand-red">Psychotherapy</span>
        </nav>

        <header className="mt-8">
          <span className="inline-flex rounded-full bg-red-50 px-3 py-1.5 text-xs font-black text-brand-red">
            Wellness
          </span>
          <h1 className="mt-5 text-4xl font-black leading-tight text-brand-ink sm:text-5xl">
            Psychotherapy
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-brand-muted">
            <span className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-red text-white">
                <UserRound size={17} />
              </span>
              <span>
                <span className="block font-black text-brand-ink">Medymatic Team</span>
                <time dateTime="2026-03-08" className="text-xs">
                  Mar 8, 2026
                </time>
              </span>
            </span>
            <span aria-hidden="true" className="hidden h-8 w-px bg-brand-line sm:block" />
            <span className="font-medium">5 min read</span>
          </div>
        </header>

        <figure className="mt-10 overflow-hidden rounded-2xl bg-gray-100 shadow-[0_18px_45px_rgba(17,24,39,0.08)]">
          <img
            src="/psychotherapy.png"
            alt="Psychotherapy and mental health support"
            fetchPriority="high"
            decoding="async"
            className="aspect-[16/8] w-full object-cover"
          />
        </figure>

        <p className="mt-8 text-base leading-8 text-brand-muted sm:text-lg">
          Psychotherapy provides a safe and confidential space for individuals to explore and
          understand their thoughts, emotions, and behaviours. It offers evidence-based techniques
          to address mental health concerns, promote self-awareness, and develop coping strategies.
        </p>

        <ArticleTableOfContents
          items={[
            { id: "psychotherapy-billing-steps", label: "Psychotherapy billing steps" },
            { id: "roles-responsibilities", label: "Roles and responsibilities" },
            { id: "psychotherapy-cpt-codes", label: "Psychotherapy CPT codes" },
            { id: "psychotic-problems", label: "Common conditions" },
            { id: "disallowed-claims", label: "Why claims are disallowed" },
            { id: "psychotherapy-billing-steps-summary", label: "Billing steps summary" },
          ]}
        />

        <section className="mt-16" aria-labelledby="psychotherapy-billing-steps">
          <h2
            id="psychotherapy-billing-steps"
            className="border-l-2 border-brand-red pl-4 text-2xl font-black leading-tight text-brand-ink sm:text-3xl"
          >
            Important Steps While Billing for Psychotherapy Sessions
          </h2>

          <ol className="mt-8 space-y-5 text-sm leading-7 text-brand-muted sm:text-base">
            {[
              ["Step 1", "Proper and Timely Documentation."],
              ["Step 2", "Billing within a Set Time Frame to Avoid Delays in Payments."],
              ["Step 3", "Specifying the Use of CPT Codes for Different Therapist Specialties."],
              ["Step 4", "Use of Modifiers."],
              [
                "Step 6",
                "Educating Providers and the Coding Team to Stay Updated with State and Federal Requirements for Psychotherapy.",
              ],
            ].map(([step, text]) => (
              <li key={step}>
                <span className="font-black text-brand-red">{step}:</span> {text}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16" aria-labelledby="roles-responsibilities">
          <h2
            id="roles-responsibilities"
            className="border-l-2 border-brand-red pl-4 text-2xl font-black text-brand-ink sm:text-3xl"
          >
            Roles and Responsibilities
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-brand-line bg-white p-6 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:p-7">
              <h3 className="flex items-center gap-3 text-lg font-black text-brand-ink">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-red text-white">
                  <UserRound size={17} />
                </span>
                Provider
              </h3>
              <p className="mt-5 text-sm leading-7 text-brand-muted sm:text-base">
                As a provider, the facility must implement a standardized format for documenting
                therapy sessions to prevent denials and recoupments. Therapists should be thoroughly
                educated by the billing and office managers on any updates and changes to
                documentation requirements. Documentation is a critical and impactful aspect of
                psychotherapy billing.
              </p>
            </article>

            <article className="rounded-2xl border border-brand-line bg-white p-6 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:p-7">
              <h3 className="flex items-center gap-3 text-lg font-black text-brand-ink">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-red text-white">
                  <BriefcaseBusiness size={17} />
                </span>
                Coders &amp; Billers
              </h3>
              <p className="mt-5 text-sm leading-7 text-brand-muted sm:text-base">
                As coders and billers, we understand and acknowledge our responsibility in revenue
                generation and the smooth operation of the practice. We ensure that all sessions are
                documented in compliance with state requirements. All coding elements outlined in
                CMS guidelines are present in the documentation. Our expert team of billers and AR
                associates ensures that claims are submitted in a timely manner and payments are
                accurately organized, posted, and documented in the EMR/PMS software.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="psychotherapy-cpt-codes">
          <h2
            id="psychotherapy-cpt-codes"
            className="border-l-2 border-brand-red pl-4 text-2xl font-black text-brand-ink sm:text-3xl"
          >
            Psychotherapy CPT Codes
          </h2>
          <p className="mt-4 text-xs leading-6 text-brand-muted sm:text-sm">
            All rights to the Current Procedural Terminology (CPT) codes are reserved by the
            American Medical Association (AMA).
          </p>

          <div className="mt-7 space-y-3">
            {[
              {
                code: "90791",
                text: "Psychiatric diagnostic evaluation without medical services. This code is used for initial evaluations conducted by psychiatrists, psychologists, or other qualified mental health professionals. It includes a comprehensive assessment of the patient’s mental health history, current symptoms, and functional status, as well as the formulation of a diagnosis and initial treatment plan.",
              },
              {
                code: "90792",
                text: "Psychiatric diagnostic evaluation with medical services. This code is similar to 90791 but includes an evaluation of the patient’s medical history and physical health status in addition to the psychiatric assessment. It is often used when the evaluation is conducted by a psychiatrist who is also providing medical management or when medical issues may be contributing to the patient’s mental health symptoms.",
              },
              {
                code: "90785",
                text: "Interactive complexity. This code is used in conjunction with psychiatric diagnostic evaluation codes 90791 or 90792 when the evaluation involves additional complexities that require increased clinical attention. This may include factors such as communication barriers, high emotional intensity, or involvement of multiple parties such as family members, caregivers, or the evaluation process.",
              },
              {
                code: "90832",
                text: "This code is used for individual psychotherapy, typically lasting 30 minutes. It covers face-to-face sessions between a therapist and a patient, during which therapeutic techniques are employed to address mental health concerns.",
              },
              {
                code: "90833",
                text: "This code is an add-on used with primary or other E/M codes to indicate an additional 30 minutes of psychotherapy provided beyond the typical session duration. It is typically used when therapy sessions exceed the standard duration.",
              },
              {
                code: "90834",
                text: "Similar to 90832, this code also covers individual psychotherapy sessions. However, it is for sessions lasting 45 minutes, indicating a longer duration of therapy.",
              },
              {
                code: "90836",
                text: "Similar to 90833, this add-on code indicates an additional 45 minutes of psychotherapy provided beyond the typical session duration. It is used in conjunction with primary or other CPT codes to bill for longer therapy sessions.",
              },
              {
                code: "90837",
                text: "This code is for individual psychotherapy sessions lasting 60 minutes. It is used when therapy sessions extend beyond the typical 45-minute duration, providing additional time for in-depth exploration and intervention.",
              },
              {
                code: "90847",
                text: "This code is used for family psychotherapy sessions. It involves psychotherapeutic interventions with multiple family members present, addressing family dynamics, communication patterns, and interpersonal relationships.",
              },
              {
                code: "90846",
                text: "This code is used for family psychotherapy without the patient present. It covers sessions in which the therapist works with family members but the identified patient is not present, often to address family issues or dynamics that may be impacting the patient’s mental health.",
              },
              {
                code: "90853",
                text: "This code is for group psychotherapy sessions. It involves therapeutic interventions conducted in a group setting with multiple participants, allowing for peer support, feedback, and interpersonal learning.",
              },
              {
                code: "90839",
                text: "This code is used for crisis psychotherapy sessions. It covers psychotherapy services provided during a crisis or emergency situation, typically involving imminent risk of harm to the patient or others.",
              },
              {
                code: "90840",
                text: "This code is used for crisis psychotherapy sessions lasting longer than the typical session duration. It indicates extended psychotherapy services provided during a crisis or emergency situation, often requiring more intensive intervention and support.",
              },
            ].map((item) => (
              <article
                key={item.code}
                className="rounded-xl border border-brand-line bg-white p-5 transition hover:border-red-200 hover:shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:p-6"
              >
                <h3 className="flex items-center gap-3 font-black text-brand-ink">
                  <span className="h-1.5 w-3 rounded-full bg-brand-red" />
                  <span className="font-mono text-sm">{item.code}</span>
                </h3>
                <p className="mt-3 pl-6 text-xs leading-6 text-brand-muted sm:text-sm sm:leading-7">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="psychotic-problems">
          <h2
            id="psychotic-problems"
            className="border-l-2 border-brand-red pl-4 text-2xl font-black text-brand-ink sm:text-3xl"
          >
            Psychotic Problems and Diagnosis
          </h2>
          <p className="mt-5 text-sm leading-7 text-brand-muted sm:text-base">
            In psychotherapy, clients seek help for a wide range of issues and diagnoses. Some
            common problems or diagnoses individuals seek psychotherapy for include:
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Depression",
                text: "Persistent feelings of sadness, hopelessness, and loss of interest in activities.",
              },
              {
                title: "Anxiety Disorders",
                text: "Generalized Anxiety Disorder (GAD), Panic Disorder, Social Anxiety Disorder, and specific phobias.",
              },
              {
                title: "Trauma & (PTSD)",
                text: "Resulting from experiences such as accidents, abuse, combat, or other traumatic events.",
              },
              {
                title: "OCD",
                text: "Characterized by intrusive, repetitive thoughts (obsessions) and/or compulsive behaviors.",
              },
              {
                title: "Substance Use Disorders",
                text: "Addiction to substances such as alcohol, drugs, or prescription medications.",
              },
              {
                title: "Eating Disorders",
                text: "Including Anorexia Nervosa, Bulimia Nervosa, and Binge Eating Disorder.",
              },
              {
                title: "Personality Disorders",
                text: "Such as Borderline Personality Disorder (BPD), Narcissistic Personality Disorder (NPD), and Avoidant Personality Disorder (AvPD).",
              },
              {
                title: "Relationship Issues",
                text: "Difficulties in interpersonal relationships, marital conflicts, family issues, or difficulties forming and maintaining relationships.",
              },
              {
                title: "Stress Management",
                text: "Coping with stressors related to work, family, relationships, or life transitions.",
              },
              {
                title: "Self-Esteem Issues",
                text: "Feelings of inadequacy, low self-worth, or a negative self-concept.",
              },
              {
                title: "Grief and Loss",
                text: "Dealing with the death of a loved one, divorce, or other significant losses.",
              },
              {
                title: "Sexual Issues",
                text: "Such as low libido, sexual dysfunction, or difficulties with sexual identity or orientation.",
              },
              {
                title: "Childhood Behavioral Issues",
                text: "Addressing behavioral problems or emotional disturbances in children and adolescents.",
              },
              {
                title: "Adjustment Disorders",
                text: "Difficulty coping with major life changes, such as relocation, job loss, or illness.",
              },
              {
                title: "Anger Management",
                text: "Difficulty controlling anger or expressing it in a healthy manner.",
              },
            ].map((problem) => (
              <article
                key={problem.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:p-6"
              >
                <h3 className="flex items-start gap-2 text-base font-black leading-6 text-brand-ink">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                  {problem.title}
                </h3>
                <p className="mt-3 pl-4 text-sm leading-7 text-brand-muted">{problem.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="disallowed-claims">
          <h2
            id="disallowed-claims"
            className="border-l-2 border-brand-red pl-4 text-2xl font-black text-brand-ink sm:text-3xl"
          >
            Common Reason for Disallowed Claims
          </h2>

          <div className="mt-7 space-y-4">
            {[
              {
                title: "Medical Records Required",
                text: "As per the Handbook for Providers of Medical Services (Chapter 100 - General Policy and Procedure, Page 47), all required records must be available for inspection, audit, and copying (including photocopying) by authorized Department personnel or designees during normal business hours. Such personnel or designees may include, but are not limited to, the Department’s Office of Inspector General, representatives of the Medicaid Fraud Control Unit, law enforcement personnel, the Office of the Auditor General, and the federal Centers for Medicare and Medicaid Services (CMS).",
              },
              {
                title: "Conflicting Service/Billing Provider",
                text: "The Billing NPI (formerly referred to as Payee NPI) must be reported in loop 2010AA, and the Rendering Provider NPI must be entered in loop 2310B, Rendering Provider.",
              },
              {
                title: "Incorrect or Unlikely Number of Units",
                text: "Behavioral Health services must meet specific requirements for reimbursement. Documented services must: meet the State’s Medicaid program rules; reflect medical necessity and justify the treatment and clinical rationale as required under State law; reflect active treatment as required under State law; be complete, concise, and accurate, including the face-to-face time spent with the patient; be legible, signed, and dated; be maintained and available for review; and be coded correctly for billing purposes.",
              },
              {
                title: "Incomplete or Invalid Documentation",
                text: "Documentation to support services provided for which reimbursement is claimed shall be in the format specified by the public payer and must be legible.",
              },
              {
                title: "Documentation Does Not Support the Telemedicine Service/Modifier Billed",
                text: "Effective with dates of service beginning October 1, 2021, providers billing a service performed via audio or video communication must append the procedure code with modifier GT and use Place of Service Code 02.",
              },
              {
                title: "Timely Signature",
                text: "Behavioral health practitioners are committed to helping their patients. Meeting ongoing patient needs, such as furnishing and coordinating necessary services, is impossible without documenting each patient encounter completely, accurately, and in a timely manner.",
              },
            ].map((reason) => (
              <article
                key={reason.title}
                className="rounded-xl border border-brand-line bg-white p-5 transition hover:border-red-200 hover:shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:p-6"
              >
                <h3 className="flex items-start gap-4 text-base font-black leading-6 text-brand-ink sm:text-lg">
                  <span className="mt-2.5 h-1.5 w-3 shrink-0 rounded-full bg-brand-red" />
                  {reason.title}
                </h3>
                <p className="mt-4 pl-7 text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
                  {reason.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="psychotherapy-billing-steps-summary">
          <h2
            id="psychotherapy-billing-steps-summary"
            className="border-l-2 border-brand-red pl-4 text-2xl font-black leading-tight text-brand-ink sm:text-3xl"
          >
            Important Steps While Billing for Psychotherapy Sessions
          </h2>

          <ol className="mt-8 space-y-5 text-sm leading-7 text-brand-muted sm:text-base">
            {[
              ["Step 1", "Proper and Timely Documentation."],
              ["Step 2", "Billing within a Set Time Frame to Avoid Delays in Payments."],
              ["Step 3", "Specifying the Use of CPT Codes for Different Therapist Specialties."],
              ["Step 4", "Use of Modifiers."],
              [
                "Step 6",
                "Educating Providers and the Coding Team to Stay Updated with State and Federal Requirements for Psychotherapy.",
              ],
            ].map(([step, text]) => (
              <li key={step}>
                <span className="font-black text-brand-red">{step}:</span> {text}
              </li>
            ))}
          </ol>
        </section>

        <aside className="relative mt-16 overflow-hidden rounded-2xl border border-brand-line bg-white p-7 shadow-[0_12px_32px_rgba(17,24,39,0.05)] sm:p-9">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-50 blur-2xl"
          />
          <div className="relative">
            <h2 className="text-2xl font-black leading-tight text-brand-ink sm:text-3xl">
              Maximize Your Revenue with MedyMatic Business Solutions
            </h2>
            <p className="mt-4 text-sm leading-7 text-brand-muted sm:text-base">
              With expertise, knowledge, and cost-effective services, MedyMatic is a partner you
              can trust for your behavioral health practice.
            </p>
          </div>
        </aside>
        <RelatedArticles currentSlug="psychotherapy" />
      </div>
      </article>
      <NewsletterCTA />
    </>
  );
}
