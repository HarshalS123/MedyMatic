import { ChevronRight, Clock3, Headphones, Heart, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SubmissionStatus } from "../components/SubmissionStatus";
import { useApiForm } from "../hooks/useApiForm";

const contactServices = [
  "Billing",
  "Medical Coding",
  "Rejection Management",
  "Chat Support",
  "Call Centre",
  "Eligibility & Benefits Verification",
  "Others",
];

export function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const { handleSubmit, submission, isSubmitting } = useApiForm("contact", {
    onSuccess: () => setSelectedServices([]),
  });

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((selected) => selected !== service)
        : [...current, service],
    );
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-gray-50 pb-16 pt-8">
        <div className="absolute inset-0 lg:hidden" aria-hidden="true">
          <img src="/contact-banner.webp" alt="Medymatic contact team" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/55" />
        </div>

        <div className="container-page relative z-10">
          <nav className="flex items-center gap-3 text-sm font-bold" aria-label="Breadcrumb">
            <Link to="/" className="text-white transition hover:text-brand-red lg:text-brand-ink">
              Home
            </Link>
            <ChevronRight size={16} className="text-white/60 lg:text-brand-muted" />
            <span className="text-brand-red">Contact Us</span>
          </nav>

          <div className="grid gap-10 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative z-10">
              <h1 className="max-w-lg text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl lg:text-black">
                Let&apos;s Connect
                <span className="mt-1 block text-brand-red">With Us</span>
              </h1>
              <p className="mt-5 max-w-md text-sm font-medium leading-6 text-white/85 sm:text-base lg:text-brand-muted">
                Have questions or need assistance? Our team is here to help you streamline
                operations and achieve your goals.
              </p>
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
                  src="/contact-banner.webp"
                  alt="Medymatic support team"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-8 bottom-2 h-24 w-24 rounded-full bg-brand-red" />

              <div className="absolute right-8 top-0 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                  <Clock3 className="text-brand-red" size={18} />
                </span>
                <span className="text-xs font-black leading-tight text-brand-ink">
                  Quick
                  <br />
                  Response
                </span>
              </div>
              <div className="absolute left-0 top-1/3 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                  <Headphones className="text-brand-red" size={18} />
                </span>
                <span className="text-xs font-black leading-tight text-brand-ink">
                  Dedicated
                  <br />
                  Support
                </span>
              </div>
              <div className="absolute bottom-8 right-2 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                  <Heart className="text-brand-red" size={18} />
                </span>
                <span className="text-xs font-black leading-tight text-brand-ink">
                  Here to
                  <br />
                  Help
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-gray-50">
        <div className="container-page grid gap-6 md:grid-cols-3">
          <article className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-7 shadow-[0_10px_30px_rgba(17,24,39,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,24,39,0.08)] sm:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-red-50 text-brand-red">
              <Phone size={22} />
            </span>
            <h2 className="mt-6 text-2xl font-black text-brand-ink">Speak to Sales</h2>
            <p className="mt-2 text-sm leading-6 text-brand-muted">
              Discuss your requirements with our RCM specialists today.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
              <a
                href="tel:+917972176347"
                className="focus-ring rounded-xl border border-red-100 bg-red-50/60 px-4 py-3 transition hover:border-brand-red hover:bg-red-50"
              >
                <span className="block text-xs font-bold uppercase tracking-wider text-brand-muted">
                  India
                </span>
                <span className="mt-1 block whitespace-nowrap text-sm font-black text-brand-red">
                  +91 79721 76347
                </span>
              </a>
              <a
                href="tel:+18475039952"
                className="focus-ring rounded-xl border border-red-100 bg-red-50/60 px-4 py-3 transition hover:border-brand-red hover:bg-red-50"
              >
                <span className="block text-xs font-bold uppercase tracking-wider text-brand-muted">
                  USA
                </span>
                <span className="mt-1 block whitespace-nowrap text-sm font-black text-brand-red">
                  +1 (847) 503-9952
                </span>
              </a>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-7 shadow-[0_10px_30px_rgba(17,24,39,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,24,39,0.08)] sm:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-red-50 text-brand-red">
              <Mail size={22} />
            </span>
            <h2 className="mt-6 text-2xl font-black text-brand-ink">Email Support</h2>
            <p className="mt-2 text-sm leading-6 text-brand-muted">
              For existing clients needing technical or billing support.
            </p>
            <a
              href="mailto:info@medymatic.com"
              className="focus-ring mt-6 inline-flex w-fit text-base font-black text-brand-red underline-offset-4 hover:underline"
            >
              info@medymatic.com
            </a>
            <div className="mt-auto pt-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                24/7 response coverage
              </span>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-7 shadow-[0_10px_30px_rgba(17,24,39,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,24,39,0.08)] sm:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-red-50 text-brand-red">
              <MapPin size={22} />
            </span>
            <h2 className="mt-6 text-2xl font-black text-brand-ink">Our Locations</h2>
            <div className="mt-5 space-y-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=76%2C+Jetwan+Housing+Society%2C+Shastri+Layout%2C+Nagpur%2C+440025"
                target="_blank"
                rel="noreferrer"
                className="focus-ring block rounded-xl border border-brand-line p-4 transition hover:border-brand-red hover:bg-red-50/40"
              >
                <span className="text-xs font-black uppercase tracking-wider text-brand-red">India</span>
                <address className="mt-1 text-sm not-italic leading-6 text-brand-muted">
                  76, Jetwan Housing Society, Shastri Layout, Nagpur, 440025
                </address>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1111B+S+Governors+Ave%2C+Dover%2C+DE+19904%2C+United+States"
                target="_blank"
                rel="noreferrer"
                className="focus-ring block rounded-xl border border-brand-line p-4 transition hover:border-brand-red hover:bg-red-50/40"
              >
                <span className="text-xs font-black uppercase tracking-wider text-brand-red">USA</span>
                <address className="mt-1 text-sm not-italic leading-6 text-brand-muted">
                  1111B S Governors Ave, Dover, DE 19904, United States
                </address>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="contact-form" className="section-y scroll-mt-24 bg-white">
        <div className="container-page max-w-5xl">
          <h2 className="text-3xl font-black text-brand-ink sm:text-4xl">Send us a message</h2>
          <p className="mt-4 text-base leading-7 text-brand-muted sm:text-lg">
            Fill out the form below and one of our experts will contact you within one business
            day.
          </p>

          <form className="mt-10" onSubmit={handleSubmit}>
            <div className="grid gap-x-7 gap-y-6 sm:grid-cols-2">
              <Field name="fullName" label="Full Name" placeholder="Enter your name" required />
              <Field
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                required
              />
              <Field
                name="position"
                label="Position"
                placeholder="Enter your position"
                required
              />
              <Field
                name="groupName"
                label="Group Name"
                placeholder="Enter your group name"
                required
              />
              <Field
                name="groupSpecialty"
                label="Group Specialty"
                placeholder="Enter your group specialty"
                required
              />
              <Field
                name="providerSize"
                label="Provider Size"
                placeholder="Enter provider size"
                required
              />
            </div>

            <fieldset className="mt-8">
              <legend className="text-sm font-bold text-brand-ink">
                Services Looking For <span className="text-brand-red">*</span>
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {contactServices.map((service) => {
                  const isSelected = selectedServices.includes(service);

                  return (
                    <button
                      key={service}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => toggleService(service)}
                      className={`focus-ring rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                        isSelected
                          ? "border-brand-red bg-red-50 text-brand-red"
                          : "border-gray-200 bg-white text-black hover:border-gray-300"
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
              <input type="hidden" name="services" value={selectedServices.join(", ")} />
            </fieldset>

            {selectedServices.includes("Others") && (
              <label htmlFor="comment" className="mt-6 block">
                <span className="text-sm font-bold text-brand-ink">
                  Comment / Short Note <span className="text-brand-red">*</span>
                </span>
                <textarea
                  id="comment"
                  name="comment"
                  required
                  placeholder="Briefly describe your requirement or inquiry..."
                  className="focus-ring mt-2.5 min-h-32 w-full resize-y rounded-xl border border-brand-line bg-gray-50 px-5 py-4 text-base text-brand-ink placeholder:text-gray-400"
                />
              </label>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="focus-ring mt-8 inline-flex min-h-12 min-w-40 items-center justify-center rounded-full bg-brand-red px-9 py-3.5 text-lg font-black text-white transition hover:bg-red-700"
            >
              {isSubmitting ? "Sending…" : "Submit"}
            </button>
            <SubmissionStatus {...submission} className="mt-4" />
          </form>
        </div>
      </section>
    </>
  );
}

type FieldProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
};

function Field({ name, label, placeholder, type = "text", required = false }: FieldProps) {
  return (
    <label htmlFor={name} className="block">
      <span className="text-sm font-bold text-brand-ink">
        {label} {required && <span className="text-brand-red">*</span>}
      </span>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="focus-ring mt-2.5 h-14 w-full rounded-xl border border-brand-line bg-gray-50 px-5 text-base text-brand-ink placeholder:text-gray-400"
      />
    </label>
  );
}
