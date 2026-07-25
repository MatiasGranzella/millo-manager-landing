/**
 * Nacionalidad (como viene en data/players) → código ISO alpha-2. Las banderas
 * circulares viven en `public/flags/{code}.svg` (set circle-flags, MIT).
 * Portado de `lib/design/flags.ts` del juego.
 */
const CODE_BY_COUNTRY: Record<string, string> = {
  Argentina: "ar",
  Uruguay: "uy",
  Colombia: "co",
  Paraguay: "py",
  Italia: "it",
  Chile: "cl",
  México: "mx",
  España: "es",
  Venezuela: "ve",
  Polonia: "pl",
  Francia: "fr",
  Brasil: "br",
};

/** Ruta del SVG de bandera circular; null si no hay nacionalidad. */
export function flagSrc(nationality: string | null | undefined): string | null {
  if (!nationality) return null;
  const code = CODE_BY_COUNTRY[nationality] ?? "xx";
  return `/flags/${code}.svg`;
}
