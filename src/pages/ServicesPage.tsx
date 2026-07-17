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
  description1: string;
  description2?: string;
  image: string;
};

const providerServices: ServiceItem[] = [
  {
    id: "revenue-cycle-consultation",
    index: "01/07",
    title: "RCM Consultation",
    description1:
      "We offer a complimentary, no-obligation RCM consultation to help providers gain clarity on their current billing and revenue cycle processes. During this session, our experts assess existing workflows, identify revenue gaps, inefficiencies, and compliance risks, and provide actionable insights on how to optimize performance. ",
    description2: "Our goal is to empower providers with a clear roadmap to improve cash flow, reduce losses, and streamline operations—completely free of cost, with no commitment required.",
    image: "/rcm-consultation.webp",
  },
  {
    id: "ar-denial-management",
    index: "02/07",
    title: "Accounts Receivable (AR) & Denial Management",
    description1:
      "Accounts Receivable (AR) represents the revenue your practice is yet to collect for services already provided—and managing it effectively is key to maintaining a healthy cash flow. Our dedicated team takes complete ownership of your AR by proactively tracking outstanding claims, performing timely follow-ups with payers, and resolving payment delays with precision. We also specialize in Denial Management, where we identify the root causes of denials, correct errors, and ensure quick resubmissions to maximize reimbursements. ",
    description2: "By reducing aging receivables and minimizing revenue leakage, we help your practice get paid faster and more consistently—so you can focus on delivering exceptional patient care while we safeguard your revenue.",
    image: "/ar-denial.webp",
  },
  {
    id: "medical-coding",
    index: "03/07",
    title: "Medical Coding",
    description1:
      "Accurate medical coding is the foundation of a successful revenue cycle, and our expert coders ensure your claims are processed right the first time. Our team of certified professionals translates clinical documentation into precise, compliant codes aligned with the latest industry guidelines. ",
    description2: "By minimizing errors and maintaining coding accuracy, we help reduce denials, speed up claim approvals, and maximize reimbursements. With our strong focus on quality and compliance, your practice can achieve smoother billing operations while avoiding costly delays and rework.",
    image: "/medical-coding.webp",
  },
  {
    id: "eligibility-verification",
    index: "04/07",
    title: "Eligibility & Benefits Verification",
    description1:
      "Accurate eligibility and benefits verification is the first step toward a seamless revenue cycle. Our dedicated team ensures every patient's coverage is verified with precision before services are rendered, eliminating guesswork and reducing the risk of claim denials. Using a combination of industry expertise and efficient processes, we confirm coverage details, benefits, co-pays, deductibles, and authorization requirements tailored to your practice. ",
    description2: "By ensuring complete and accurate information upfront, we help streamline your billing workflow, minimize errors, and maximize reimbursements—giving your team the confidence to focus on delivering exceptional patient care.",
    image: "/eligibility-and-benefits.webp",
  },
  {
    id: "payment-posting",
    index: "05/07",
    title: "Payment Posting",
    description1:
      "Payment posting is a critical step in maintaining a clear and accurate picture of your practice’s financial health. Our Payment Posting services are designed to ensure every payment—whether from insurance providers, patients, or other sources is recorded with precision and timeliness. Our dedicated team carefully reconciles payments, identifies discrepancies, and updates accounts with complete accuracy, providing full transparency into your revenue flow. ",
    description2: "By maintaining clean and up-to-date financial records, we help reduce errors, accelerate reporting, and support better decision-making—ensuring your revenue cycle runs smoothly and efficiently.",
    image: "/payment-posting.webp",
  },
  {
    id: "patient-scheduling",
    index: "06/07",
    title: "Patient Scheduling Services",
    description1:
      "Our Patient Scheduling services are designed to create a seamless and professional experience for every caller. We handle inbound calls from patients, referral hospitals, insurance representatives, and other stakeholders with promptness, accuracy, and care. Our trained coordinators ensure appointments are scheduled efficiently while addressing inquiries with clarity and professionalism. ",
    description2: "By prioritizing timely responses and high-quality interactions, we help enhance patient satisfaction, reduce missed appointments, and build a strong sense of trust in your organization. Acting as an extension of your front desk, we ensure every interaction reflects your commitment to excellent care and professionalism.",
    image: "/patient-scheduling-services.webp",
  },
  {
    id: "credentialing-services",
    index: "07/07",
    title: "Credentialing Services",
    description1:
      "Our Credentialing Services are designed to ensure your providers are fully enrolled, compliant, and ready to deliver care without delays. We support initial credentialing from start to finish, as well as seamlessly take over and complete applications that are already in progress. Our team manages the entire process with accuracy and efficiency, including ongoing maintenance of key provider profiles such as CAQH, PECOS, and Availity Provider Data.",
    description2: "We ensure that all provider information remains up-to-date, validated, and aligned with payer requirements to avoid disruptions in billing and reimbursements. By handling complex credentialing workflows and continuous profile management, we help your practice stay compliant, reduce administrative burden, and accelerate revenue generation—allowing you to focus entirely on patient care.",
    image: "/credentialing-services.webp",
  },
];

const payerServices: ServiceItem[] = [
  {
    id: "payer-call-center",
    index: "01/03",
    title: "Payer Call Center",
    description1:
      "Our Payer Call Centre service is designed to seamlessly manage high volumes of inbound calls from providers and members with efficiency and precision. We handle a wide range of inquiries, including eligibility verification, claim status updates, benefit clarifications, and issue resolution. Our trained representatives ensure clear communication, accurate information, and timely responses, enhancing the overall caller experience.",
    description2: "By serving as a reliable extension of your operations, we help reduce internal workload, improve response times, and maintain consistent service quality across all payer interactions.",
    image: "/payer-call-center.webp",
  },
  {
    id: "rejection-management",
    index: "02/03",
    title: "Rejection Management",
    description1:
      "Our Rejection Management service is designed to support insurance payers in maintaining accuracy, compliance, and consistency in claims processing. We assist in reviewing and validating claims to ensure that rejections are issued correctly in accordance with payer policies and regulatory guidelines.",
    description2:
      "By implementing structured verification processes and thorough quality checks, we help minimize incorrect denials, reduce disputes, and improve overall adjudication efficiency. Our approach ensures that only appropriate rejections are communicated, strengthening provider trust while optimizing operational performance.",
    image: "/rejection-management.webp",
  },
  {
    id: "chat-support-services",
    index: "03/03",
    title: "Chat Support Services",
    description1:
      "Our Chat Support Services are designed to provide real-time, efficient assistance to providers and members through seamless digital interactions. Our trained representatives handle live chat queries from provider executives, addressing concerns related to eligibility, claims status, benefits, and issue resolution directly within the chat platform.",
    description2: "By delivering accurate and prompt responses, we help resolve issues instantly without the need for follow-up calls. This service enhances user experience, reduces call volumes, and ensures consistent, high-quality support while acting as a reliable extension of your customer service operations.",
    image: "/chat-support.webp",
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
              {item.description1}
            </p>
            {item.description2 && (
              <p className="mt-4 max-w-md text-sm leading-6 text-brand-muted">
                {item.description2}
              </p>
            )}
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
            className={`rounded-full px-6 py-2.5 text-sm font-bold transition ${activeTab === "providers"
              ? "bg-brand-red text-white"
              : "bg-gray-100 text-brand-ink hover:bg-gray-200"
              }`}
          >
            For Providers
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("payers")}
            className={`rounded-full px-6 py-2.5 text-sm font-bold transition ${activeTab === "payers"
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
          <img src="/services-banner.webp" alt="Medymatic services" className="h-full w-full object-cover" />
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
                  src="/services-banner.webp"
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
