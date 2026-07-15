export type SeoChangeFrequency =
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly";

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  index: boolean;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  schemaHeadline?: string;
  schemaImage?: string;
  changeFrequency?: SeoChangeFrequency;
  priority?: number;
};

export type SiteConfig = {
  baseUrl: string;
  siteName: string;
  shortName: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  locale: string;
  language: string;
  organization: {
    name: string;
    legalName: string;
    email: string;
    logo: string;
  };
  socialProfiles: string[];
  allowIndexing: boolean;
};

const productionFallbackUrl = "https://medymatic.com";

export function resolveProductionUrl(value?: string) {
  if (!value) return productionFallbackUrl;

  try {
    const url = new URL(value);
    const isLocal =
      url.hostname === "localhost" ||
      url.hostname === "127.0.0.1" ||
      url.hostname === "0.0.0.0" ||
      url.hostname === "::1";

    if (url.protocol !== "https:" || isLocal) return productionFallbackUrl;
    return url.origin;
  } catch {
    return productionFallbackUrl;
  }
}

export function createSiteConfig(
  siteUrl?: string,
  allowIndexing = true,
): SiteConfig {
  return {
    baseUrl: resolveProductionUrl(siteUrl),
    siteName: "MedyMatic Business Solutions",
    shortName: "Medymatic",
    defaultTitle: "Medical Billing & RCM Services | Medymatic",
    defaultDescription:
      "Medymatic provides medical billing, coding, credentialing, denial management, and revenue cycle support for healthcare providers and payers.",
    defaultImage: "/og-default.jpg",
    locale: "en_US",
    language: "en",
    organization: {
      name: "Medymatic",
      legalName: "MedyMatic Business Solutions",
      email: "info@medymatic.com",
      logo: "/logo.webp",
    },
    socialProfiles: [],
    allowIndexing,
  };
}

const clientEnv = (import.meta as ImportMeta & {
  env?: Record<string, string | undefined>;
}).env;

export const siteConfig = createSiteConfig(
  clientEnv?.VITE_SITE_URL,
  clientEnv?.VITE_ALLOW_INDEXING !== "false",
);

export const seoRoutes: SeoRoute[] = [
  {
    path: "/",
    title: "Medical Billing & RCM Services",
    description:
      "Improve billing accuracy, reduce denials, and strengthen cash flow with Medymatic medical billing and revenue cycle management services.",
    index: true,
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    path: "/services",
    title: "Medical Billing & RCM Services",
    description:
      "Explore medical billing, coding, AR and denial management, eligibility verification, payment posting, scheduling, and credentialing services.",
    index: true,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/about",
    title: "About Our Healthcare RCM Team",
    description:
      "Learn how Medymatic supports healthcare organizations with accurate, transparent, and scalable revenue cycle management operations.",
    index: true,
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/blog",
    title: "Medical Billing & RCM Insights",
    description:
      "Read practical medical billing, healthcare operations, credentialing, claims, and revenue cycle management insights from Medymatic.",
    index: true,
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/blog/telemedicine",
    title: "Telemedicine Billing & Management Guide",
    description:
      "Learn about telemedicine workflows, telehealth management benefits, billing guidelines, and revenue cycle considerations for virtual care.",
    index: true,
    type: "article",
    publishedTime: "2026-03-12",
    author: "Medymatic Team",
    category: "Healthcare Tech",
    schemaHeadline: "Telemedicine",
    schemaImage: "/telemedicine.webp",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/blog/psychotherapy",
    title: "Psychotherapy Billing Guide: CPT Codes & Claims",
    description:
      "Review psychotherapy billing steps, common CPT codes, claims responsibilities, and frequent reasons behavioral health claims are denied.",
    index: true,
    type: "article",
    publishedTime: "2026-03-08",
    author: "Medymatic Team",
    category: "Wellness",
    schemaHeadline: "Psychotherapy",
    schemaImage: "/psychotherapy.webp",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/blog/new-practice-launch-first-revenue-cycle-success",
    title: "New Practice Revenue Cycle Case Study",
    description:
      "See how Medymatic built the revenue cycle foundation for a new psychiatry practice and helped it receive its first payment within 30 days.",
    index: true,
    type: "article",
    publishedTime: "2025-06-01",
    author: "Medymatic Team",
    category: "Case Study",
    schemaHeadline: "From Zero to First Payment in 30 Days – A New Psychiatry Practice's Journey",
    schemaImage: "/revenue-cycle.webp",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/career",
    title: "Healthcare RCM Careers",
    description:
      "Explore careers at Medymatic and learn about our culture, professional development opportunities, benefits, and application process.",
    index: true,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/client-support",
    title: "Client Support",
    description:
      "Contact the Medymatic client support team for help with medical billing, coding, credentialing, AR, denials, or technical questions.",
    index: true,
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    path: "/contact",
    title: "Contact Medymatic",
    description:
      "Contact Medymatic to discuss medical billing, coding, credentialing, eligibility verification, denial management, and RCM support.",
    index: true,
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "Read the MedyMatic Business Solutions Privacy Policy, including how information is collected, used, shared, secured, and managed.",
    index: true,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/terms",
    title: "Terms of Use",
    description:
      "Read the terms governing use of the Medymatic website and services, including acceptable use, intellectual property, and liability provisions.",
    index: true,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/departments",
    title: "Healthcare Departments",
    description: "Healthcare department listing under development at Medymatic.",
    index: false,
  },
  {
    path: "/doctors",
    title: "Healthcare Professionals",
    description: "Healthcare professional profiles under development at Medymatic.",
    index: false,
  },
  {
    path: "/appointment",
    title: "Appointment Request",
    description: "Appointment request workflow under development at Medymatic.",
    index: false,
  },
];

export const notFoundSeo: SeoRoute = {
  path: "/404",
  title: "Page Not Found",
  description: "The requested Medymatic page could not be found.",
  index: false,
};

export function getSeoRoute(pathname: string) {
  const normalized = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
  return seoRoutes.find((route) => route.path === normalized) ?? notFoundSeo;
}

export function absoluteUrl(path: string, config = siteConfig) {
  return new URL(path, `${config.baseUrl}/`).toString();
}

export function renderTitle(route: SeoRoute, config = siteConfig) {
  return route.path === "/"
    ? config.defaultTitle
    : `${route.title} | ${config.shortName}`;
}
