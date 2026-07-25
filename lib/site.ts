/**
 * Config de sitio compartida (SEO). Fuente única de la URL base y de datos de
 * marca, usada por metadata, sitemap, robots, manifest y JSON-LD.
 */

export const SITE_URL = "https://www.millomanager.com.ar";
export const SITE_NAME = "Millo Manager";
export const SITE_TAGLINE = "Todo River, siempre";
export const SITE_DESCRIPTION =
  "El football manager gratis y sin descargas dedicado a River Plate. Coleccioná las cartas de los ídolos de todas las épocas, armá tu mejor XI y jugá la liga para subir de división.";
export const SITE_LOCALE = "es_AR";

/** URL absoluta a partir de un path relativo ("/idolos" → "https://…/idolos"). */
export function absUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}
