import { ArrowRight, Eye, FileText, Mail, MapPin, Phone, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";
import { CallToAction } from "../components/CallToAction";
import { blogPosts } from "../data/site";
import { useState } from "react";
import { SubmissionStatus } from "../components/SubmissionStatus";
import { useApiForm } from "../hooks/useApiForm";

const homeServices = [
  {
    title: "Revenue Cycle Consultation",
    text: "Expert insights to identify revenue gaps and improve billing performance.",
  },
  {
    title: "AR & Denial Management",
    text: "Reduce denials, recover payments faster, and improve cash flow.",
  },
  {
    title: "Medical Coding",
    text: "Accurate coding that supports compliance and faster reimbursements.",
  },
  {
    title: "Eligibility Verification",
    text: "Verify patient coverage and benefits before services are delivered.",
  },
  {
    title: "Payment Posting",
    text: "Accurate payment reconciliation for complete financial visibility.",
  },
  {
    title: "Patient Scheduling",
    text: "Professional scheduling support to improve patient experience.",
  },
  {
    title: "Credentialing Services",
    text: "Provider enrollment and credentialing support with ongoing compliance.",
  },
];

const whyMedymatic = [
  {
    step: "One",
    image: "/revenue-cycle.webp",
    title: "Dedicated Revenue Cycle Specialists",
    text: "Experienced healthcare billing professionals focused on improving workflow consistency and reimbursement performance.",
  },
  {
    step: "Two",
    image: "/hipaa.webp",
    title: "HIPAA-Compliant Operations",
    text: "Secure healthcare billing workflows aligned with industry compliance and patient data protection standards.",
  },
  {
    step: "Three",
    image: "/report.webp",
    title: "Transparent Reporting & Insights",
    text: "Structured reporting systems that provide visibility into claims, reimbursements, denials, and operational performance.",
  },
  {
    step: "Four",
    image: "/healthcare.webp",
    title: "Scalable Healthcare Support",
    text: "Flexible operational support solutions designed for independent clinics, specialty providers, and growing healthcare organizations.",
  },
];

const workingProcess = [
  {
    step: "Step 01",
    title: "RCM Health Assessment",
    text: "We begin by thoroughly evaluating your current revenue cycle to identify gaps, inefficiencies, and revenue leakage. We then provide clear recommendations along with a defined timeline to fix and optimize the process.",
  },
  {
    step: "Step 02",
    title: "Workflow & Reporting Setup",
    text: "Based on our findings, we design a structured workflow and implement transparent reporting systems, ensuring you have complete visibility into operations and progress.",
  },
  {
    step: "Step 03",
    title: "Knowledge Transfer",
    text: "Our team conducts a detailed knowledge transfer of your existing software, processes, payer requirements, and practice-specific workflows to ensure seamless continuity.",
  },
  {
    step: "Step 04",
    title: "Go-Live & Execution",
    text: "Once everything is aligned, we initiate full-scale operations, delivering results from day one while ensuring a smooth, efficient, and disruption-free transition.",
  },
];

export function HomePage() {
  const services = [
  "Billing",
  "Medical Coding",
  "Rejection Management",
  "Chat Support",
  "Call Centre",
  "HR Management",
  "Eligibility & Benefits Verification",
  "Others",
];

const [selectedServices, setSelectedServices] = useState<string[]>([]);
const { handleSubmit, submission, isSubmitting } = useApiForm("contact", {
  onSuccess: () => setSelectedServices([]),
});

const toggleService = (service: string) => {
  setSelectedServices((prev) =>
    prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
  );
};
  return (
    <>
      <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-brand-dark text-white">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src="/Hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-black/10" />

        <div className="container-page flex min-h-[calc(100vh-5rem)] items-center py-16 sm:py-20">
          <div className="max-w-3xl">
            <h1 className="max-w-2xl text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Streamline your{" "}
              <span className="text-brand-red">
                Medical Billing Process
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-white/85 sm:text-lg">
              We offer expert billing solutions tailored to meet the unique needs of healthcare
              providers at a fraction of the cost.
            </p>
            <div className="mt-9 flex">
              <ButtonLink href="/contact">Contact Us</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium text-brand-muted">Our Services</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-black sm:text-4xl lg:text-5xl">
              Comprehensive Medical Billing & Revenue Cycle Management{" "}
              <span className="text-brand-red">Services</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-brand-muted">
              We help healthcare providers streamline billing operations, reduce administrative
              burden, and improve reimbursement performance through structured revenue cycle
              management solutions tailored for modern healthcare practices.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/services"
                className="focus-ring inline-flex min-h-10 items-center justify-center rounded-3xl bg-brand-red px-7 py-2 text-sm font-black text-white transition hover:bg-red-700"
              >
                For Providers
              </Link>
              <Link
                to="/services"
                className="focus-ring inline-flex min-h-10 items-center justify-center rounded-3xl border border-brand-red bg-white px-7 py-2 text-sm font-black text-brand-red transition hover:bg-red-50"
              >
                For Payers
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:items-stretch">
            <div className="overflow-hidden rounded-lg bg-white shadow-card">
              <img
                src="/services.webp"
                alt="Medical billing team reviewing revenue cycle dashboards"
                className="h-full min-h-[28rem] w-full object-cover"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {homeServices.map((service) => (
                <article
                  key={service.title}
                  className="rounded-lg border border-brand-line bg-white p-5 shadow-sm"
                >
                  <span className="grid h-8 w-8 place-items-center rounded bg-red-50 text-brand-red">
                    <FileText size={16} strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-4 text-base font-black leading-snug text-brand-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{service.text}</p>
                </article>
              ))}

              <div className="flex min-h-40 flex-col items-center justify-center rounded-lg bg-brand-red p-6 text-center text-white shadow-sm">
                <h3 className="max-w-48 text-2xl font-black leading-tight">
                  Optimize Your Revenue Cycle
                </h3>
                <Link
                  to="/contact"
                  className="focus-ring mt-6 inline-flex min-h-10 items-center justify-center rounded-3xl bg-white px-7 py-2 text-sm font-black text-brand-red transition hover:bg-red-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-gray-50">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium text-brand-muted">Why Medymatic</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-black sm:text-4xl lg:text-5xl">
              Built Around{" "}
              <span className="text-brand-red">
                Accuracy, Transparency & Operational Efficiency
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-brand-muted">
              Our healthcare revenue cycle solutions are designed to help providers improve
              workflow efficiency, strengthen reimbursements, and maintain operational visibility
              across every stage of the billing process.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyMedymatic.map((item) => (
              <article key={item.step} className="flex flex-col justify-between items-center">
                <div>
                  <span className="inline-flex min-h-8 items-center rounded bg-brand-red px-3 text-xs font-black text-white">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-black leading-snug text-black">{item.title}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-6 text-brand-muted">{item.text}</p>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="mt-5 aspect-[1.35] w-full rounded-lg object-cover"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium text-brand-muted">Our Working Process</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-black sm:text-4xl lg:text-5xl">
              Our Onboarding <span className="text-brand-red">Process</span>
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-brand-muted">
              We follow a streamlined and transparent process to help healthcare providers improve
              operational efficiency, reduce claim denials, and maintain smooth revenue cycle
              management workflows.
            </p>
          </div>

          <div className="mt-8 grid overflow-hidden bg-white lg:max-h-[31rem] lg:grid-cols-[1.08fr_0.92fr]">
            <img
              src="/onboarding.webp"
              alt="Healthcare professional reviewing onboarding documents"
              className="h-72 w-full object-cover sm:h-96 lg:h-full lg:min-h-0 rounded-lg"
            />

            <div className="flex flex-col justify-center gap-4 px-6 py-6 sm:px-10 lg:px-12">
              {workingProcess.map((item) => (
                <article key={item.step}>
                  <p className="text-xs font-black text-brand-red">{item.step}</p>
                  <h3 className="mt-1 text-sm font-black leading-snug text-black sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-brand-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-gray-50">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium text-brand-muted">About Us</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-black sm:text-4xl lg:text-5xl">
              About <span className="text-brand-red">Medymatic</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-brand-muted">
              Medymatic is focused on delivering reliable healthcare revenue cycle management and
              medical billing solutions designed to help healthcare providers improve operational
              efficiency and financial performance.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col">
              <div className="space-y-6 text-base font-medium leading-7 text-black">
                <p>
                  Our team combines industry expertise, structured workflows, and technology-driven
                  processes to support healthcare organizations across multiple specialties. From
                  medical billing and coding to AR management and insurance verification, we help
                  providers simplify complex operational workflows while maintaining accuracy and
                  compliance.
                </p>
                <p>
                  We are committed to building long-term partnerships through transparency,
                  consistency, and scalable healthcare support solutions.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <article className="relative overflow-hidden rounded-lg bg-brand-red p-7 text-white">
                  <span className="absolute right-0 top-0 grid h-12 w-12 place-items-center rounded-bl-lg bg-white text-brand-red">
                    <Target size={24} strokeWidth={2.4} />
                  </span>
                  <h3 className="mt-12 text-lg font-black">Our Mission</h3>
                  <p className="mt-4 max-w-xs text-sm font-medium leading-5 text-white/95">
                    To help healthcare providers streamline revenue cycle operations through
                    accurate, reliable, and efficient medical billing solutions that improve
                    financial performance and reduce administrative complexity.
                  </p>
                </article>

                <article className="relative overflow-hidden rounded-lg bg-red-200 p-7 text-black">
                  <span className="absolute right-0 top-0 grid h-12 w-12 place-items-center rounded-bl-lg bg-brand-red text-white">
                    <Eye size={24} strokeWidth={2.4} />
                  </span>
                  <h3 className="mt-12 text-lg font-black">Our Vision</h3>
                  <p className="mt-4 max-w-xs text-sm font-medium leading-5 text-black/75">
                    To become a trusted healthcare operations partner delivering scalable,
                    technology-driven revenue cycle management solutions for healthcare
                    organizations worldwide.
                  </p>
                </article>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-lg sm:h-96 lg:h-auto">
              <img
                src="/about.webp"
                alt="Medymatic office reception"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="section-y bg-gray-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium text-brand-muted">Blog</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-black sm:text-4xl lg:text-5xl">
              Insights That Drive <span className="text-brand-red">Results</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-brand-muted">
              Discover practical insights, industry trends, and proven RCM strategies to improve
              operational efficiency, reduce claim denials, and drive sustainable growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-black shadow-sm">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium text-brand-muted">
                    <time dateTime={post.publishedDate}>{post.date}</time> &middot; {post.readTime}
                  </p>
                  <h3 className="mt-2 text-xl font-black text-black">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-brand-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                    Read More
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-black transition-colors hover:border-brand-red hover:text-brand-red"
            >
              View All Articles
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium text-brand-muted">Contact Us</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-black sm:text-4xl lg:text-5xl">
              <span className="text-brand-red">Contact</span> Us
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-brand-muted">
              Connect with our team to learn how Medymatic can help optimize your medical billing
              operations and healthcare revenue cycle workflows.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-gray-200 lg:grid lg:grid-cols-[0.9fr_1.3fr]">
            <div className="flex flex-col justify-between bg-brand-red p-8 text-white sm:p-10">
              <div>
                <h3 className="text-xl font-black">Let&apos;s talk</h3>
                <p className="mt-3 text-sm leading-6 text-white/85">
                  Fill out the form and one of our experts will contact you within one business day.
                </p>
              </div>

              <div className="mt-10 space-y-4 lg:mt-0">
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={18} />
                  <span>info@medymatic.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={18} />
                  <span>+1 (762) 716-5164</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={18} />
                  <span>+91 79721 76347</span>
                </div>
              </div>
            </div>

            <form className="space-y-5 bg-white p-8 sm:p-10" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-black">
                    Full Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-black">
                    Email <span className="text-brand-red">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-black">
                    Position <span className="text-brand-red">*</span>
                  </label>
                  <input
                    name="position"
                    type="text"
                    required
                    placeholder="Enter your position"
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-black">
                    Group Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    name="groupName"
                    type="text"
                    required
                    placeholder="Enter your group name"
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-black">
                    Group Speciality <span className="text-brand-red">*</span>
                  </label>
                  <input
                    name="groupSpecialty"
                    type="text"
                    required
                    placeholder="Enter your group"
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-black">
                    Provider Size <span className="text-brand-red">*</span>
                  </label>
                  <input
                    name="providerSize"
                    type="text"
                    required
                    placeholder="Enter provider size"
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
                  />
                </div>
                <input type="hidden" name="services" value={selectedServices.join(", ")} />
              </div>

              <div>
                <label className="text-xs font-semibold text-black">
                  Services Looking For <span className="text-brand-red">*</span>
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {services.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${isSelected
                            ? "border-brand-red bg-red-50 text-brand-red"
                            : "border-gray-200 text-black hover:border-gray-300"
                          }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-brand-red py-3 text-sm font-bold text-white transition-colors hover:bg-red-700"
              >
                {isSubmitting ? "Sending…" : "Submit"}
              </button>
              <SubmissionStatus {...submission} />
            </form>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
