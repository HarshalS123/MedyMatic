import { Link } from "react-router-dom";

export function CallToAction() {
  return (
    <section className="relative isolate mt-20 overflow-hidden bg-brand-red text-white md:min-h-[21rem] md:overflow-visible">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(62deg,transparent_0,transparent_58%,rgba(255,255,255,0.12)_58.35%,transparent_59.1%),linear-gradient(64deg,transparent_0,transparent_52%,rgba(255,255,255,0.10)_52.35%,transparent_53.1%),linear-gradient(66deg,transparent_0,transparent_46%,rgba(255,255,255,0.08)_46.35%,transparent_47.1%)]" />
      </div>

      <div className="container-page relative flex flex-col md:block md:min-h-[21rem]">
        <div className="relative z-10 max-w-xl pb-0 pt-10 md:py-12">
          <h2 className="max-w-md text-3xl font-black leading-tight sm:text-4xl">
            Optimize Your Healthcare Billing Operations
          </h2>
          <p className="mt-4 max-w-sm text-base font-medium leading-6 text-white/90">
            Improve reimbursements and streamline revenue cycle workflows with reliable medical
            billing support.
          </p>
          <Link
            to="/contact"
            className="focus-ring mt-8 inline-flex min-h-10 items-center justify-center rounded-3xl bg-white px-6 py-2 text-sm font-black text-brand-red transition hover:bg-red-50 md:mt-24"
          >
            Talk to our experts
          </Link>
        </div>

        <img
          src="/doctor.webp"
          alt="Doctor with stethoscope"
          className="pointer-events-none relative z-20 -mb-px mx-auto mt-8 block h-[20rem] w-auto max-w-full translate-y-px object-contain sm:h-[24rem] md:absolute md:bottom-0 md:right-0 md:mb-0 md:mt-0 md:h-[26rem] md:translate-y-0 lg:right-12 lg:h-[29rem]"
        />
      </div>
    </section>
  );
}
