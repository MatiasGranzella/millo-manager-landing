/**
 * Formación 4-3-3 y coordenadas de cancha — portado de `lib/game/formations.ts`
 * del juego real (repo `millo`). La landing solo dibuja una cancha estática con
 * el XI de leyendas, así que alcanza con el 4-3-3 (la formación por defecto del
 * juego) y sus posiciones en %.
 */

export type Line = "gk" | "def" | "mid" | "att";

export const DEFAULT_FORMATION = "4-3-3";

/** Slots del 4-3-3, en orden de despliegue (arquero → delanteros). */
export const FORMATION_433: { code: string; line: Line }[] = [
  { code: "ARQ", line: "gk" },
  { code: "LI", line: "def" },
  { code: "DFC1", line: "def" },
  { code: "DFC2", line: "def" },
  { code: "LD", line: "def" },
  { code: "MCD", line: "mid" },
  { code: "MC", line: "mid" },
  { code: "MCO", line: "mid" },
  { code: "EI", line: "att" },
  { code: "DC", line: "att" },
  { code: "ED", line: "att" },
];

/** Coordenadas (%) de cada slot del 4-3-3 en la cancha (mismas que la app). */
export const PITCH_COORDS_433: Record<string, { x: number; y: number }> = {
  ARQ: { x: 50, y: 90 },
  LI: { x: 18, y: 68 },
  DFC1: { x: 39, y: 71 },
  DFC2: { x: 61, y: 71 },
  LD: { x: 82, y: 68 },
  MCD: { x: 50, y: 56 },
  MC: { x: 28, y: 44 },
  MCO: { x: 72, y: 44 },
  EI: { x: 22, y: 20 },
  DC: { x: 50, y: 15 },
  ED: { x: 78, y: 20 },
};

export type PositionGroup = "ARQ" | "DEF" | "MED" | "DEL";

/** Mapea una card_position (DC, MP, DFC…) a su grupo ARQ/DEF/MED/DEL. */
export function positionGroup(cardPosition: string | null): PositionGroup {
  const p = (cardPosition ?? "").toUpperCase();
  if (p === "ARQ") return "ARQ";
  if (["DFC", "DFI", "DFD", "CAI", "CAD"].includes(p)) return "DEF";
  if (["MC", "MCI", "MCD", "MD", "MI", "MP"].includes(p)) return "MED";
  return "DEL"; // DC, EI, ED
}

export const POSITION_GROUP_LABEL: Record<PositionGroup, string> = {
  ARQ: "ARQUERO",
  DEF: "DEFENSA",
  MED: "MEDIOCAMPO",
  DEL: "DELANTERO",
};

/** Etiqueta de rol legible (ARQUERO/DEFENSA/…) para una card_position. */
export function roleLabel(cardPosition: string | null): string {
  if (!cardPosition) return "JUGADOR";
  return POSITION_GROUP_LABEL[positionGroup(cardPosition)];
}
