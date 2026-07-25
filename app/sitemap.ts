import type { MetadataRoute } from "next";
import { absUrl } from "@/lib/site";
import { getAllIdols } from "@/lib/game/players";
import { getAllEras } from "@/lib/game/eras";

/**
 * Sitemap programmatic: home + landings de keyword + hubs + una URL por cada
 * ídolo (`/idolos/[slug]`) y por cada era (`/eras/[slug]`). Estático (SSG), se
 * regenera en cada build.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absUrl("/idolos"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absUrl("/eras"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absUrl("/juego-de-river-plate"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absUrl("/cartas-de-river"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absUrl("/manager-de-river"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const idolRoutes: MetadataRoute.Sitemap = getAllIdols().map((idol) => ({
    url: absUrl(`/idolos/${idol.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const eraRoutes: MetadataRoute.Sitemap = getAllEras().map((era) => ({
    url: absUrl(`/eras/${era.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...idolRoutes, ...eraRoutes];
}
