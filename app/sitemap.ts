export const dynamic = "force-static";

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cmbuddy.pk";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/features`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/use-cases/ecommerce`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/use-cases/healthcare`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/use-cases/education`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/coexistence`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/omnichannel`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 }
  ];
}