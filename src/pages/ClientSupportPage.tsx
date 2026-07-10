import { ChevronRight, Clock3, Headphones, Heart, ShieldCheck, UploadCloud } from "lucide-react";
import { Link } from "react-router-dom";
import { SubmissionStatus } from "../components/SubmissionStatus";
import { useApiForm } from "../hooks/useApiForm";

export function ClientSupportPage() {
  const { handleSubmit, submission, isSubmitting } = useApiForm("support", { multipart: true });

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
          <span className="text-brand-red">Client Support</span>
        </nav>

        <div className="grid gap-10 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative z-10">
            <h1 className="max-w-lg text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl lg:text-black">
              Client
              <span className="block">Support,</span>
              <span className="mt-1 block text-brand-red">Always Here</span>
              <span className="block text-brand-red">for You</span>
            </h1>
            <p className="mt-5 max-w-md text-sm font-medium leading-6 text-white/85 sm:text-base lg:text-brand-muted">
              Our dedicated support team is committed to providing timely assistance, answering
              your questions, and ensuring a seamless experience at every step.
            </p>
            <Link
              to="/contact"
              className="focus-ring mt-7 inline-flex min-h-12 w-56 items-center justify-center rounded-3xl bg-brand-red px-8 text-base font-black text-white transition hover:bg-red-700"
            >
              Get in Touch
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
                src="/client-support-banner.png"
                alt="Medymatic client support team"
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

      <section className="section-y">
        <div className="container-page max-w-5xl">
          <div className="max-w-2xl">
            <p className="eyebrow">Client assistance</p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-4xl">
              Send us a message
            </h2>
            <p className="mt-4 text-base leading-7 text-brand-muted">
              Fill out the form below and one of our experts will contact you within one business
              day.
            </p>
          </div>

          <form className="relative mt-10 overflow-hidden" onSubmit={handleSubmit}>
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-red-50 blur-2xl"
            />

            <div className="relative grid gap-x-7 gap-y-6 sm:grid-cols-2">
              <SupportField name="fullName" label="Full Name" placeholder="John Doe" />
              <SupportField name="clientId" label="Client ID" placeholder="CL123456" />
              <SupportField
                name="email"
                label="Email"
                type="email"
                placeholder="john@hospital.com"
              />
              <label htmlFor="issueType" className="block">
                <span className="text-sm font-bold text-brand-ink">
                  Issue Type <span className="text-brand-red">*</span>
                </span>
                <select
                  id="issueType"
                  name="issueType"
                  required
                  defaultValue=""
                  className="focus-ring mt-2.5 h-14 w-full rounded-xl border border-brand-line bg-gray-50 px-4 text-base text-brand-ink"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Medical Billing</option>
                  <option>Medical Coding</option>
                  <option>Provider Credentialing</option>
                  <option>Revenue Cycle Management</option>
                  <option>AR Management</option>
                  <option>Denial Management</option>
                  <option>Technical Support</option>
                  <option>Other Support</option>
                </select>
              </label>
            </div>

            <label htmlFor="description" className="relative mt-6 block">
              <span className="text-sm font-bold text-brand-ink">
                Brief Description <span className="text-brand-red">*</span>
              </span>
              <textarea
                id="description"
                name="description"
                required
                placeholder="Tell us about your issue..."
                className="focus-ring mt-2.5 min-h-36 w-full resize-y rounded-xl border border-brand-line bg-gray-50 px-5 py-4 text-base text-brand-ink placeholder:text-gray-400"
              />
            </label>

            <div className="relative mt-6">
              <label htmlFor="document" className="text-sm font-bold text-brand-ink">
                Upload Document <span className="text-brand-red">*</span>
              </label>
              <label
                htmlFor="document"
                className="mt-2.5 flex min-h-24 cursor-pointer items-center justify-between gap-5 rounded-xl border border-dashed border-gray-300 bg-gray-50 px-5 py-4 transition hover:border-brand-red hover:bg-red-50/40 focus-within:ring-2 focus-within:ring-brand-red focus-within:ring-offset-2"
              >
                <span>
                  <span className="block text-sm font-bold text-brand-ink">
                    Choose a file or drag it here
                  </span>
                  <span className="mt-1 block text-xs text-brand-muted">
                    PDF, DOC, DOCX, JPG or PNG · Maximum 10MB
                  </span>
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-red shadow-sm">
                  <UploadCloud size={22} />
                </span>
                <input
                  id="document"
                  name="document"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className="sr-only"
                />
              </label>
            </div>

            <label className="relative mt-6 flex cursor-pointer items-start gap-3 rounded-xl border border-transparent p-3 transition hover:bg-gray-50">
              <input
                type="checkbox"
                name="consent"
                required
                className="focus-ring mt-0.5 h-4 w-4 shrink-0 accent-brand-red"
              />
              <span className="text-xs leading-5 text-brand-muted">
                I agree to receive communications from Medymatic and accept the Privacy Policy.
                You can unsubscribe at any time. <span className="text-brand-red">*</span>
              </span>
            </label>

            <div className="relative mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="focus-ring inline-flex min-h-12 min-w-40 items-center justify-center rounded-full bg-brand-red px-9 py-3.5 text-base font-black text-white transition hover:bg-red-700"
              >
                {isSubmitting ? "Sending…" : "Submit"}
              </button>
              <span className="flex items-center gap-2 text-xs font-medium text-brand-muted">
                <ShieldCheck size={17} className="text-brand-red" />
                Your information is handled securely.
              </span>
            </div>
            <SubmissionStatus {...submission} className="relative mt-4" />
          </form>
        </div>
      </section>
    </>
  );
}

type SupportFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
};

function SupportField({ name, label, placeholder, type = "text" }: SupportFieldProps) {
  return (
    <label htmlFor={name} className="block">
      <span className="text-sm font-bold text-brand-ink">
        {label} <span className="text-brand-red">*</span>
      </span>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="focus-ring mt-2.5 h-14 w-full rounded-xl border border-brand-line bg-gray-50 px-5 text-base text-brand-ink placeholder:text-gray-400"
      />
    </label>
  );
}
