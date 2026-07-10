import {
  absoluteUrl,
  type SeoRoute,
  type SiteConfig,
} from "./config";

type JsonLd = Record<string, unknown>;

function organizationSchema(config: SiteConfig): JsonLd {
  return {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization", config),
    name: config.organization.name,
    legalName: config.organization.legalName,
    url: config.baseUrl,
    logo: absoluteUrl(config.organization.logo, config),
    email: config.organization.email,
    ...(config.socialProfiles.length > 0
      ? { sameAs: config.socialProfiles }
      : {}),
  };
}

function breadcrumbSchema(route: SeoRoute, config: SiteConfig): JsonLd {
  const isArticle = route.type === "article";
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/", config),
    },
    ...(isArticle
      ? [
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: absoluteUrl("/blog", config),
          },
        ]
      : []),
    {
      "@type": "ListItem",
      position: isArticle ? 3 : 2,
      name: route.title,
      item: absoluteUrl(route.path, config),
    },
  ];

  return { "@type": "BreadcrumbList", itemListElement: items };
}

export function getStructuredData(
  route: SeoRoute,
  config: SiteConfig,
): JsonLd[] {
  if (!route.index) return [];

  if (route.path === "/") {
    return [
      {
        "@context": "https://schema.org",
        "@graph": [
          organizationSchema(config),
          {
            "@type": "WebSite",
            "@id": absoluteUrl("/#website", config),
            url: config.baseUrl,
            name: config.siteName,
            description: config.defaultDescription,
            publisher: { "@id": absoluteUrl("/#organization", config) },
            inLanguage: config.language,
          },
        ],
      },
    ];
  }

  const breadcrumb = breadcrumbSchema(route, config);

  if (route.type === "article") {
    return [
      {
        "@context": "https://schema.org",
        "@graph": [
          organizationSchema(config),
          breadcrumb,
          {
            "@type": "BlogPosting",
            headline: route.schemaHeadline ?? route.title,
            description: route.description,
            image: absoluteUrl(route.schemaImage ?? route.image ?? config.defaultImage, config),
            datePublished: route.publishedTime,
            ...(route.modifiedTime ? { dateModified: route.modifiedTime } : {}),
            author: {
              "@type": "Organization",
              name: route.author ?? config.organization.name,
              url: config.baseUrl,
            },
            publisher: { "@id": absoluteUrl("/#organization", config) },
            mainEntityOfPage: absoluteUrl(route.path, config),
            articleSection: route.category,
            inLanguage: config.language,
          },
        ],
      },
    ];
  }

  return [
    {
      "@context": "https://schema.org",
      "@graph": [
        ...(route.path === "/services" ? [organizationSchema(config)] : []),
        breadcrumb,
        {
          "@type": route.path === "/services" ? "Service" : "WebPage",
          "@id": absoluteUrl(`${route.path}#webpage`, config),
          url: absoluteUrl(route.path, config),
          name: route.title,
          description: route.description,
          inLanguage: config.language,
          ...(route.path === "/services"
            ? {
                serviceType: "Medical billing and revenue cycle management",
                provider: { "@id": absoluteUrl("/#organization", config) },
              }
            : {}),
        },
      ],
    },
  ];
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
