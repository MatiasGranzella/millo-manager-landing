/**
 * Rarezas de las cartas — portado de `lib/design/tokens.ts` del juego real
 * (repo `millo`). Los degradés viven en `app/globals.css` (@theme) para que la
 * carta de la landing se vea idéntica a la de la app. Regla del diseño:
 * "rojo = acción/marca · metales = rarezas/ranking".
 */

export type Rarity = "bronce" | "plata" | "oro" | "platino" | "leyenda";

export const RARITY = {
  bronce: {
    label: "BRONCE",
    gradient: "var(--grad-bronze)",
    color: "#c8824b",
    colorLight: "#e0a877",
    colorInk: "#8f5a2e",
  },
  plata: {
    label: "PLATA",
    gradient: "var(--grad-silver)",
    color: "#c9ced4",
    colorLight: "#ebeef1",
    colorInk: "#7c828d",
  },
  oro: {
    label: "ORO",
    gradient: "var(--grad-gold)",
    color: "#e6b94e",
    colorLight: "#f2d17a",
    colorInk: "#a8791f",
  },
  platino: {
    label: "PLATINO",
    gradient: "var(--grad-platino)",
    color: "#cfe0e8",
    colorLight: "#eaf3f7",
    colorInk: "#5f7a88",
  },
  leyenda: {
    label: "LEYENDA",
    gradient: "var(--grad-leyenda)",
    color: "#ffcf5b",
    colorLight: "#ffe08a",
    colorInk: "#b07a1e",
  },
} as const satisfies Record<
  Rarity,
  {
    label: string;
    gradient: string;
    color: string;
    colorLight: string;
    colorInk: string;
  }
>;

/** Etiqueta legible del sistema de rarezas, para textos de SEO. */
export const RARITY_ORDER: Rarity[] = ["leyenda", "oro", "plata", "bronce", "platino"];
