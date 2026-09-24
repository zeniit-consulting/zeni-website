import type { APIRoute } from "astro";
import { caseStudies } from "../data/caseStudies";
import { helpCategories } from "../data/helpCenter";
import { blogs as fallbackBlogs } from "../data/blogs";
import { projects as fallbackProjects } from "../data/projects";
import { getBlogs, getServices } from "../lib/api";
import { slugify } from "../lib/utils";

export const prerender = false;

interface SitemapItem {
  url: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = (site?.toString() || "https://zeniconsulting.com").replace(/\/$/, "");
  const now = new Date().toISOString().split("T")[0];

  const items: SitemapItem[] = [
    // Core Pages
    { url: `${baseUrl}/`, changefreq: "weekly", priority: 1.0, lastmod: now },
    { url: `${baseUrl}/about`, changefreq: "monthly", priority: 0.8, lastmod: now },
    { url: `${baseUrl}/services`, changefreq: "weekly", priority: 0.9, lastmod: now },
    { url: `${baseUrl}/portfolio`, changefreq: "weekly", priority: 0.8, lastmod: now },
    { url: `${baseUrl}/projects`, changefreq: "weekly", priority: 0.8, lastmod: now },
    { url: `${baseUrl}/case-studies`, changefreq: "weekly", priority: 0.8, lastmod: now },
    { url: `${baseUrl}/customer-service`, changefreq: "monthly", priority: 0.8, lastmod: now },
    { url: `${baseUrl}/industri-logistik`, changefreq: "monthly", priority: 0.8, lastmod: now },
    { url: `${baseUrl}/blog`, changefreq: "daily", priority: 0.8, lastmod: now },
    { url: `${baseUrl}/help-center`, changefreq: "monthly", priority: 0.7, lastmod: now },
    { url: `${baseUrl}/contact`, changefreq: "monthly", priority: 0.8, lastmod: now },

    // Services Pages
    { url: `${baseUrl}/services/web-development`, changefreq: "monthly", priority: 0.8, lastmod: now },
    { url: `${baseUrl}/services/mobile-development`, changefreq: "monthly", priority: 0.8, lastmod: now },
    { url: `${baseUrl}/services/development`, changefreq: "monthly", priority: 0.8, lastmod: now },
    { url: `${baseUrl}/services/consulting`, changefreq: "monthly", priority: 0.8, lastmod: now },
    { url: `${baseUrl}/services/automation`, changefreq: "monthly", priority: 0.8, lastmod: now },
    { url: `${baseUrl}/services/audit`, changefreq: "monthly", priority: 0.7, lastmod: now },
    { url: `${baseUrl}/services/strategy`, changefreq: "monthly", priority: 0.7, lastmod: now },
    { url: `${baseUrl}/services/hardware`, changefreq: "monthly", priority: 0.7, lastmod: now },
    { url: `${baseUrl}/services/web-app-development`, changefreq: "monthly", priority: 0.8, lastmod: now },
  ];

  // Case Studies
  for (const study of caseStudies) {
    if (study.slug) {
      items.push({
        url: `${baseUrl}/case-studies/${study.slug}`,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: now,
      });
    }
  }

  // Help Center Categories
  for (const cat of helpCategories) {
    if (cat.slug) {
      items.push({
        url: `${baseUrl}/help-center/${cat.slug}`,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: now,
      });
    }
  }

  // Projects (from API or local fallback)
  const projectSlugs = new Set<string>();
  try {
    const servicesResponse = await getServices();
    if (servicesResponse?.data?.length) {
      for (const s of servicesResponse.data) {
        if (s.slug) projectSlugs.add(s.slug);
      }
    }
  } catch (e) {
    // API not reachable, fallback to static projects
  }
  for (const p of fallbackProjects) {
    if (p.slug) projectSlugs.add(p.slug);
  }
  for (const slug of projectSlugs) {
    items.push({
      url: `${baseUrl}/projects/${slug}`,
      changefreq: "monthly",
      priority: 0.7,
      lastmod: now,
    });
  }

  // Blogs & Categories (from API or local fallback)
  const blogSlugs = new Set<string>();
  const categories = new Set<string>();

  try {
    const blogsResponse = await getBlogs();
    if (blogsResponse?.data?.length) {
      for (const b of blogsResponse.data) {
        if (b.is_published && b.slug) {
          blogSlugs.add(b.slug);
          items.push({
            url: `${baseUrl}/blog/${b.slug}`,
            changefreq: "monthly",
            priority: 0.7,
            lastmod: b.updated_at ? b.updated_at.split("T")[0] : now,
          });
          if (b.category) {
            categories.add(slugify(b.category));
          }
        }
      }
    }
  } catch (e) {
    // API not reachable, fallback to static blogs
  }

  for (const fb of fallbackBlogs) {
    if (!blogSlugs.has(fb.slug)) {
      items.push({
        url: `${baseUrl}/blog/${fb.slug}`,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: now,
      });
    }
    if (fb.category) {
      categories.add(slugify(fb.category));
    }
  }

  // Blog categories
  for (const cat of categories) {
    items.push({
      url: `${baseUrl}/blog/category/${cat}`,
      changefreq: "weekly",
      priority: 0.6,
      lastmod: now,
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${items
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    ${item.lastmod ? `<lastmod>${item.lastmod}</lastmod>` : ""}
    ${item.changefreq ? `<changefreq>${item.changefreq}</changefreq>` : ""}
    ${item.priority ? `<priority>${item.priority.toFixed(1)}</priority>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
};
