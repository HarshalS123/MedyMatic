import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  absoluteUrl,
  getSeoRoute,
  renderTitle,
  siteConfig,
} from "../seo/config";
import { getStructuredData, serializeJsonLd } from "../seo/schema";

const managedSelector = "[data-medymatic-seo]";

function addMeta(attribute: "name" | "property", key: string, content: string) {
  const element = document.createElement("meta");
  element.setAttribute(attribute, key);
  element.content = content;
  element.dataset.medymaticSeo = "true";
  document.head.appendChild(element);
}

export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.head.querySelectorAll(managedSelector).forEach((node) => node.remove());

    const route = getSeoRoute(pathname);
    const title = renderTitle(route);
    const canonical = absoluteUrl(route.path === "/404" ? pathname : route.path);
    const image = absoluteUrl(route.image ?? siteConfig.defaultImage);
    const canIndex = siteConfig.allowIndexing && route.index;
    const robots = canIndex
      ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      : "noindex,nofollow";

    document.title = title;
    document.documentElement.lang = siteConfig.language;

    addMeta("name", "description", route.description);
    addMeta("name", "author", siteConfig.organization.legalName);
    addMeta("name", "robots", robots);
    addMeta("name", "googlebot", robots);
    addMeta("property", "og:type", route.type ?? "website");
    addMeta("property", "og:site_name", siteConfig.siteName);
    addMeta("property", "og:locale", siteConfig.locale);
    addMeta("property", "og:title", title);
    addMeta("property", "og:description", route.description);
    addMeta("property", "og:url", canonical);
    addMeta("property", "og:image", image);
    addMeta("property", "og:image:width", "1200");
    addMeta("property", "og:image:height", "630");
    addMeta("property", "og:image:alt", `${siteConfig.shortName} — ${route.title}`);
    if (route.publishedTime) {
      addMeta("property", "article:published_time", route.publishedTime);
    }
    if (route.modifiedTime) {
      addMeta("property", "article:modified_time", route.modifiedTime);
    }
    addMeta("name", "twitter:card", "summary_large_image");
    addMeta("name", "twitter:title", title);
    addMeta("name", "twitter:description", route.description);
    addMeta("name", "twitter:image", image);
    addMeta("name", "twitter:image:alt", `${siteConfig.shortName} — ${route.title}`);

    const canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    canonicalLink.href = canonical;
    canonicalLink.dataset.medymaticSeo = "true";
    document.head.appendChild(canonicalLink);

    const feedLink = document.createElement("link");
    feedLink.rel = "alternate";
    feedLink.type = "application/rss+xml";
    feedLink.title = `${siteConfig.shortName} Insights RSS`;
    feedLink.href = absoluteUrl("/rss.xml");
    feedLink.dataset.medymaticSeo = "true";
    document.head.appendChild(feedLink);

    getStructuredData(route, siteConfig).forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = serializeJsonLd(schema);
      script.dataset.medymaticSeo = "true";
      script.dataset.schemaIndex = String(index);
      document.head.appendChild(script);
    });
  }, [pathname]);

  return null;
}
