/**
 * Loader de ídolos de River — datos REALES portados del juego (`repo millo`,
 * `data/players.json` + `data/palmares.json`). Cada ídolo trae su carta real
 * (rating, rareza, atributos), bio, palmarés y era. Es la fuente de verdad tanto
 * de los componentes visuales (PlayerCard, Pitch) como de las páginas SEO
 * programmatic (`/idolos/[slug]`, `/eras/[slug]`).
 */

import playersRaw from "@/data/players.json";
import palmaresRaw from "@/data/palmares.json";
import type { Rarity } from "@/lib/design/rarity";
import { photoUrlFor } from "@/lib/game/photos";

export type StatKey = "rit" | "tir" | "pas" | "reg" | "def" | "fis";

export const STAT_LABEL: Record<StatKey, string> = {
  rit: "RIT",
  tir: "TIR",
  pas: "PAS",
  reg: "REG",
  def: "DEF",
  fis: "FÍS",
};

export const STAT_LONG: Record<StatKey, string> = {
  rit: "Ritmo",
  tir: "Tiro",
  pas: "Pase",
  reg: "Regate",
  def: "Defensa",
  fis: "Físico",
};

type PlayerCard = {
  rating: number;
  rarity: Rarity;
  card_position: string;
  rit: number;
  tir: number;
  pas: number;
  reg: number;
  def: number;
  fis: number;
  alt_positions?: string[];
};

type RawPlayer = {
  slug: string;
  full_name: string;
  display_name: string;
  position: string;
  nationality: string | null;
  birth_date: string | null;
  debut_year: number | null;
  last_year: number | null;
  river_appearances: number | null;
  river_goals: number | null;
  bio: string | null;
  is_idol: boolean;
  is_homegrown: boolean;
  era_slug: string | null;
  card?: PlayerCard;
};

export type Palmares = { competencia: string; count: number; seasons: string[] };
export type Stint = { from: number; to: number };

type RawPalmares = {
  slug: string;
  total_titulos: number;
  palmares: Palmares[];
  stints?: Stint[];
};

/** Ídolo listo para render: jugador con carta + palmarés fusionado por slug. */
export type Idol = Omit<RawPlayer, "card"> & {
  card: PlayerCard;
  total_titulos: number;
  palmares: Palmares[];
  stints: Stint[];
  photoUrl: string | null;
};

// El retrato sale del bucket del juego; ver `lib/game/photos.ts`.

// Índice de palmarés por slug (se arma una vez al cargar el módulo).
const PALMARES_BY_SLUG = new Map<string, RawPalmares>(
  (palmaresRaw as unknown as RawPalmares[]).map((p) => [p.slug, p]),
);

// Todos los ídolos con carta, ordenados por rating (desc) y luego por nombre.
const IDOLS: Idol[] = (playersRaw as unknown as RawPlayer[])
  .filter((p): p is RawPlayer & { card: PlayerCard } => Boolean(p.card))
  .map((p) => {
    const pal = PALMARES_BY_SLUG.get(p.slug);
    return {
      ...p,
      total_titulos: pal?.total_titulos ?? 0,
      palmares: pal?.palmares ?? [],
      stints: pal?.stints ?? [],
      photoUrl: photoUrlFor(p.slug),
    };
  })
  .sort((a, b) => b.card.rating - a.card.rating || a.display_name.localeCompare(b.display_name, "es"));

const IDOL_BY_SLUG = new Map<string, Idol>(IDOLS.map((i) => [i.slug, i]));

/**
 * Cuántos ídolos hay y cuántos tienen retrato local. El copy del sitio los usa
 * en vez de números escritos a mano: no todos tienen arte, y afirmar lo
 * contrario era falso apenas se miraba la grilla de /idolos.
 */
export const IDOL_COUNT = IDOLS.length;
export const IDOL_WITH_PHOTO_COUNT = IDOLS.filter((i) => i.photoUrl).length;

/** Todos los ídolos con carta (ordenados por rating desc). */
export function getAllIdols(): Idol[] {
  return IDOLS;
}

/** Un ídolo por slug, o undefined si no existe / no tiene carta. */
export function getIdolBySlug(slug: string): Idol | undefined {
  return IDOL_BY_SLUG.get(slug);
}

/** Ídolos de una era, ordenados por rating desc. */
export function getIdolsByEra(eraSlug: string): Idol[] {
  return IDOLS.filter((i) => i.era_slug === eraSlug);
}

/** Ídolos relacionados: misma era o mismo grupo de posición, excluyendo `slug`. */
export function getRelatedIdols(idol: Idol, limit = 6): Idol[] {
  const sameEra = IDOLS.filter((i) => i.slug !== idol.slug && i.era_slug === idol.era_slug);
  const rest = IDOLS.filter(
    (i) => i.slug !== idol.slug && i.era_slug !== idol.era_slug,
  );
  return [...sameEra, ...rest].slice(0, limit);
}

/** Los N ídolos de mayor rating (para grids destacados / XI de leyendas). */
export function getTopIdols(n: number): Idol[] {
  return IDOLS.slice(0, n);
}

/**
 * Un ídolo representativo por rareza, en orden leyenda→platino→oro→plata→bronce.
 * Prefiere el de mayor rating que tenga retrato local; si en una rareza ninguno
 * tiene foto, cae al de mayor rating (se muestra con el placeholder rayado, igual
 * que la app). Para el carrusel de cartas que muestra los 5 niveles.
 */
export function getRarityShowcase(): Idol[] {
  const order: Rarity[] = ["leyenda", "platino", "oro", "plata", "bronce"];
  return order
    .map((rarity) => {
      const inRarity = IDOLS.filter((i) => i.card.rarity === rarity);
      return inRarity.find((i) => i.photoUrl) ?? inRarity[0];
    })
    .filter((i): i is Idol => Boolean(i));
}

/** Las 6 stats de una carta como pares tipados, en orden de la app. */
export function cardStats(card: PlayerCard): { key: StatKey; value: number }[] {
  return (["rit", "tir", "pas", "reg", "def", "fis"] as StatKey[]).map((key) => ({
    key,
    value: card[key],
  }));
}
