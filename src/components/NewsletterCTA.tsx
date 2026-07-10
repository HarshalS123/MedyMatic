import { SubmissionStatus } from "./SubmissionStatus";
import { useApiForm } from "../hooks/useApiForm";

export function NewsletterCTA() {
  const { handleSubmit, submission, isSubmitting } = useApiForm("newsletter");

  return (
    <section className="bg-gray-50 py-16 sm:py-20" aria-labelledby="newsletter-title">
      <div className="container-page text-center">
        <h2 id="newsletter-title" className="text-3xl font-black text-black sm:text-4xl lg:text-5xl">
          Subscribe to Our <span className="text-brand-red">Newsletter</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-brand-muted sm:text-lg">
          Get the latest healthcare billing insights, industry updates, and best practices delivered
          to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row sm:items-center"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Enter your email address"
            className="focus-ring h-14 min-w-0 flex-1 rounded-full border border-brand-line bg-white px-6 text-base text-brand-ink placeholder:text-gray-400"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="focus-ring h-14 shrink-0 rounded-full bg-brand-red px-8 text-base font-black text-white transition hover:bg-red-700"
          >
            {isSubmitting ? "Subscribing…" : "Subscribe"}
          </button>
        </form>
        <SubmissionStatus {...submission} className="mt-4" />
      </div>
    </section>
  );
}
