import react from "@vitejs/plugin-react";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { defineConfig, loadEnv, type Plugin } from "vite";
import {
  absoluteUrl,
  createSiteConfig,
  notFoundSeo,
  renderTitle,
  seoRoutes,
  type SeoRoute,
  type SiteConfig,
} from "./src/seo/config";
import { getStructuredData, serializeJsonLd } from "./src/seo/schema";

const seoStart = "<!--seo:start-->";
const seoEnd = "<!--seo:end-->";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeXml(value: string) {
  return escapeHtml(value).replace(/'/g, "&apos;");
}

function renderSeoHead(route: SeoRoute, config: SiteConfig) {
  const title = renderTitle(route, config);
  const canonical = absoluteUrl(route.path, config);
  const image = absoluteUrl(route.image ?? config.defaultImage, config);
  const canIndex = config.allowIndexing && route.index;
  const robots = canIndex
    ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    : "noindex,nofollow";
  const schemas = getStructuredData(route, config)
    .map(
      (schema) =>
        `<script type="application/ld+json">${serializeJsonLd(schema)}</script>`,
    )
    .join("\n    ");

  const head = `${seoStart}
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(route.description)}" />
    <meta name="author" content="${escapeHtml(config.organization.legalName)}" />
    <meta name="creator" content="${escapeHtml(config.organization.name)}" />
    <meta name="publisher" content="${escapeHtml(config.organization.legalName)}" />
    <meta name="robots" content="${robots}" />
    <meta name="googlebot" content="${robots}" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" type="application/rss+xml" title="${escapeHtml(config.shortName)} Insights RSS" href="${absoluteUrl("/rss.xml", config)}" />
    <meta property="og:type" content="${route.type ?? "website"}" />
    <meta property="og:site_name" content="${escapeHtml(config.siteName)}" />
    <meta property="og:locale" content="${config.locale}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(route.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(`${config.shortName} — ${route.title}`)}" />
    ${route.publishedTime ? `<meta property="article:published_time" content="${route.publishedTime}" />` : ""}
    ${route.modifiedTime ? `<meta property="article:modified_time" content="${route.modifiedTime}" />` : ""}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(route.description)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="${escapeHtml(`${config.shortName} — ${route.title}`)}" />
    ${schemas}
    ${seoEnd}`;

  return head.replace(
    /<(title|meta|link|script)\b/g,
    '<$1 data-medymatic-seo="static"',
  );
}

function replaceSeoHead(html: string, route: SeoRoute, config: SiteConfig) {
  const start = html.indexOf(seoStart);
  const end = html.indexOf(seoEnd);
  if (start === -1 || end === -1) return html;
  return `${html.slice(0, start)}${renderSeoHead(route, config)}${html.slice(end + seoEnd.length)}`;
}

function createRobots(config: SiteConfig) {
  if (!config.allowIndexing) {
    return "User-agent: *\nDisallow: /\n";
  }

  return [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${absoluteUrl("/sitemap.xml", config)}`,
    "",
  ].join("\n");
}

function createSitemap(config: SiteConfig) {
  const entries = seoRoutes
    .filter((route) => route.index)
    .map(
      (route) => `  <url>
    <loc>${escapeXml(absoluteUrl(route.path, config))}</loc>${
      route.modifiedTime ?? route.publishedTime
        ? `\n    <lastmod>${route.modifiedTime ?? route.publishedTime}</lastmod>`
        : ""
    }${
      route.changeFrequency
        ? `\n    <changefreq>${route.changeFrequency}</changefreq>`
        : ""
    }${route.priority ? `\n    <priority>${route.priority.toFixed(1)}</priority>` : ""}
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

function createRss(config: SiteConfig) {
  const articles = seoRoutes
    .filter((route) => route.type === "article" && route.index && route.publishedTime)
    .sort((a, b) =>
      String(b.publishedTime).localeCompare(String(a.publishedTime)),
    );
  const items = articles
    .map((article) => {
      const url = absoluteUrl(article.path, config);
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${new Date(`${article.publishedTime}T00:00:00Z`).toUTCString()}</pubDate>${
        article.category
          ? `\n      <category>${escapeXml(article.category)}</category>`
          : ""
      }
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${config.shortName} Insights`)}</title>
    <link>${escapeXml(absoluteUrl("/blog", config))}</link>
    <description>${escapeXml("Medical billing, healthcare operations, and revenue cycle management insights from Medymatic.")}</description>
    <language>${config.language}</language>
    <atom:link href="${escapeXml(absoluteUrl("/rss.xml", config))}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
}

function seoBuildPlugin(config: SiteConfig): Plugin {
  return {
    name: "medymatic-seo",
    transformIndexHtml(html) {
      return replaceSeoHead(html, seoRoutes[0], config);
    },
    generateBundle() {
      this.emitFile({ type: "asset", fileName: "robots.txt", source: createRobots(config) });
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: createSitemap(config) });
      this.emitFile({ type: "asset", fileName: "rss.xml", source: createRss(config) });
    },
    async writeBundle(options) {
      const outputDirectory = options.dir ?? "dist";
      const indexPath = join(outputDirectory, "index.html");
      const indexHtml = await readFile(indexPath, "utf8");

      await Promise.all([
        ...seoRoutes
          .filter((route) => route.path !== "/")
          .map(async (route) => {
            const routePath = join(outputDirectory, route.path.slice(1), "index.html");
            await mkdir(dirname(routePath), { recursive: true });
            await writeFile(routePath, replaceSeoHead(indexHtml, route, config), "utf8");
          }),
        writeFile(
          join(outputDirectory, "404.html"),
          replaceSeoHead(indexHtml, notFoundSeo, config),
          "utf8",
        ),
      ]);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const config = createSiteConfig(
    env.VITE_SITE_URL,
    env.VITE_ALLOW_INDEXING !== "false",
  );

  return {
    plugins: [react(), seoBuildPlugin(config)],
    server: {
      proxy: {
        "/api": "http://localhost:3000",
      },
      watch: {
        ignored: ["**/*.crdownload"],
      },
    },
  };
});
