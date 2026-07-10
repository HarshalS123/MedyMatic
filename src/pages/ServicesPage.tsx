import {
  BarChart3,
  CalendarDays,
  ChevronRight,
  Clock3,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { CallToAction } from "../components/CallToAction";

const serviceHeroStats = [
  { value: "100%", label: "Claim Accuracy", icon: ShieldCheck },
  { value: "30%", label: "Faster Collections", icon: Clock3 },
  { value: "30%", label: "Revenue Improvement", icon: TrendingUp },
  { value: ">30 Days", label: "Average Claim Aging", icon: CalendarDays },
  { value: "70%", label: "Decrease in Denial Rate", icon: TrendingDown },
];

type ServiceItem = {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
};

const providerServices: ServiceItem[] = [
  {
    id: "revenue-cycle-consultation",
    index: "01/07",
    title: "RCM Consultation",
    description:
      "We assess your existing revenue cycle workflows and identify gaps in claims processing, denial management, and collections, then build a tailored roadmap for improvement.",
    image: "/rcm-consultation.png",
  },
  {
    id: "ar-denial-management",
    index: "02/07",
    title: "Accounts Receivable (AR) & Denial Management",
    description:
      "Our team works aged AR and denied claims systematically, reducing days in AR and recovering revenue that would otherwise be written off.",
    image: "/ar-denial.png",
  },
  {
    id: "medical-coding",
    index: "03/07",
    title: "Medical Coding",
    description:
      "Certified coders assign accurate CPT, ICD-10, and HCPCS codes across specialties, minimizing claim rejections and supporting compliant reimbursement.",
    image: "/medical-coding.png",
  },
  {
    id: "eligibility-verification",
    index: "04/07",
    title: "Eligibility & Benefits Verification",
    description:
      "We verify patient coverage and benefits ahead of visits, reducing front-end denials and giving your team accurate information before service is rendered.",
    image: "/eligibility-and-benefits.png",
  },
  {
    id: "payment-posting",
    index: "05/07",
    title: "Payment Posting",
    description:
      "Accurate, timely posting of payer and patient payments keeps your financial records reconciled and gives you a clear view of true outstanding balances.",
    image: "/payment-posting.png",
  },
  {
    id: "patient-scheduling",
    index: "06/07",
    title: "Patient Scheduling Services",
    description:
      "Our scheduling support reduces no-shows and gaps in your calendar, keeping patient flow steady and provider time fully utilized.",
    image: "/patient-scheduling-services.png",
  },
  {
    id: "credentialing-services",
    index: "07/07",
    title: "Credentialing Services",
    description:
      "We manage payer enrollment and credentialing end to end, so providers can bill and get reimbursed without administrative delays.",
    image: "/credentialing-services.png",
  },
];

const payerServices: ServiceItem[] = [
  {
    id: "payer-call-center",
    index: "01/03",
    title: "Payer Call Center",
    description:
      "Dedicated call center support for provider and member questions, benefits guidance, and timely issue resolution.",
    image: "/payer-call-center.png",
  },
  {
    id: "rejection-management",
    index: "02/03",
    title: "Rejection Management",
    description:
      "Structured rejection workflows that improve claims accuracy, resolve processing issues, and reduce avoidable rework.",
    image: "/rejection-management.png",
  },
  {
    id: "chat-support-services",
    index: "03/03",
    title: "Chat Support Services",
    description:
      "Responsive chat assistance for provider and member inquiries, helping payers deliver clear support in real time.",
    image: "/chat-support.png",
  },
];

function ServiceSlide({ item, reverse }: { item: ServiceItem; reverse: boolean }) {
  return (
    <li
      id={item.id}
      className="sticky top-0 z-10 flex h-screen w-full scroll-mt-20 items-center bg-white"
    >
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className={reverse ? "lg:order-2" : ""}>
            <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-[0_20px_50px_rgba(17,24,39,0.08)]">
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover sm:h-80 lg:h-[28rem]"
              />
            </div>
          </div>

          <div className={reverse ? "lg:order-1" : ""}>
            <p className="text-xs font-black tracking-wider text-brand-red">{item.index}</p>
            <h3 className="mt-3 max-w-md text-2xl font-black leading-snug text-black sm:text-3xl">
              {item.title}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-6 text-brand-muted">
              {item.description}
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-black text-brand-red transition hover:gap-3"
            >
              Discuss {item.title}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

function ServicesOverview() {
  const location = useLocation();
  const requestedTab = new URLSearchParams(location.search).get("tab") === "payers" ? "payers" : "providers";
  const [activeTab, setActiveTab] = useState<"providers" | "payers">(requestedTab);
  const activeServices = activeTab === "providers" ? providerServices : payerServices;

  useEffect(() => {
    setActiveTab(requestedTab);

    const timer = window.setTimeout(() => {
      const targetId = location.hash.slice(1);
      const target = targetId ? document.getElementById(targetId) : null;
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 75);

    return () => window.clearTimeout(timer);
  }, [location.hash, requestedTab]);

  return (
    <section className="bg-white pb-28 pt-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium text-brand-muted">Our Services</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-black sm:text-4xl lg:text-5xl">
            Comprehensive Support Across The{" "}
            <span className="text-brand-red">Healthcare Ecosystem</span>
          </h2>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveTab("providers")}
            className={`rounded-full px-6 py-2.5 text-sm font-bold transition ${
              activeTab === "providers"
                ? "bg-brand-red text-white"
                : "bg-gray-100 text-brand-ink hover:bg-gray-200"
            }`}
          >
            For Providers
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("payers")}
            className={`rounded-full px-6 py-2.5 text-sm font-bold transition ${
              activeTab === "payers"
                ? "bg-brand-red text-white"
                : "bg-gray-100 text-brand-ink hover:bg-gray-200"
            }`}
          >
            For Payers
          </button>
        </div>
      </div>

      <ul
        className="m-0 mt-12 grid list-none grid-cols-1 gap-0 p-0"
        style={{ gridTemplateRows: `repeat(${activeServices.length}, 100vh)` }}
      >
        {activeServices.map((item, index) => (
          <ServiceSlide key={item.title} item={item} reverse={index % 2 === 1} />
        ))}
      </ul>
    </section>
  );
}

export function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gray-50 pb-20 pt-8">
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
            <span className="text-brand-red">Services</span>
          </nav>

          <div className="grid gap-10 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative z-10">
              <h1 className="max-w-lg text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl lg:text-black">
                Our Services
                <span className="mt-1 block text-brand-red">Your Success</span>
              </h1>
              <p className="mt-5 max-w-md text-sm font-medium leading-6 text-white/85 sm:text-base lg:text-brand-muted">
                Comprehensive RCM and operational support services designed for healthcare
                providers and payers. Streamline workflows. Improve outcomes. Maximize revenue.
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
                  src="/services-banner.png"
                  alt="Healthcare revenue cycle specialists reviewing claims dashboards"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-8 bottom-2 h-24 w-24 rounded-full bg-brand-red" />

              <div className="absolute right-8 top-0 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                  <Users className="text-brand-red" size={18} />
                </span>
                <span className="text-xs font-black leading-tight text-brand-ink">
                  Patient
                  <br />
                  Focused
                </span>
              </div>
              <div className="absolute left-0 top-1/3 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                  <ShieldCheck className="text-brand-red" size={18} />
                </span>
                <span className="text-xs font-black leading-tight text-brand-ink">
                  Compliant
                  <br />& Secure
                </span>
              </div>
              <div className="absolute bottom-8 right-2 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                  <BarChart3 className="text-brand-red" size={18} />
                </span>
                <span className="text-xs font-black leading-tight text-brand-ink">
                  Results
                  <br />
                  Driven
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-10 rounded-2xl bg-white px-6 py-7 shadow-card">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
              {serviceHeroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center ${index === 0 ? "" : "lg:border-l lg:border-brand-line"}`}
                >
                  <stat.icon className="mx-auto text-brand-red" size={32} strokeWidth={2.2} />
                  <p className="mt-3 text-2xl font-black text-brand-red">{stat.value}</p>
                  <p className="mt-1 text-sm font-bold text-brand-ink">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />
      <CallToAction />
    </>
  );
}
