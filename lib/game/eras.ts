/**
 * Eras históricas de River — datos reales portados del juego (`data/eras.json`).
 * Alimentan los hubs `/eras` y `/eras/[slug]`, que agrupan a los ídolos por época.
 */

import erasRaw from "@/data/eras.json";

export type Era = {
  slug: string;
  title: string;
  from_year: number;
  to_year: number;
  summary: string;
  sort_order: number;
};

const ERAS: Era[] = (erasRaw as unknown as Era[])
  .slice()
  .sort((a, b) => a.sort_order - b.sort_order);

const ERA_BY_SLUG = new Map<string, Era>(ERAS.map((e) => [e.slug, e]));

export function getAllEras(): Era[] {
  return ERAS;
}

export function getEraBySlug(slug: string): Era | undefined {
  return ERA_BY_SLUG.get(slug);
}

/** Rango de años legible ("1940–1949"). */
export function eraYears(era: Era): string {
  return `${era.from_year}–${era.to_year}`;
}
