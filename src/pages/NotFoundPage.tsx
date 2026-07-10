import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="section-y min-h-[60vh] bg-gray-50">
      <div className="container-page max-w-3xl text-center">
        <p className="eyebrow">404 error</p>
        <h1 className="mt-4 text-4xl font-black text-brand-ink sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-brand-muted">
          The page you requested may have moved or no longer exists. Return to the
          homepage or explore our medical billing and revenue cycle services.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="focus-ring rounded-full bg-brand-red px-6 py-3 text-sm font-black text-white hover:bg-red-700"
          >
            Return home
          </Link>
          <Link
            to="/services"
            className="focus-ring rounded-full border border-brand-line bg-white px-6 py-3 text-sm font-black text-brand-ink hover:border-brand-red hover:text-brand-red"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
