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

/**
 * Contacto para bajas y pedidos de borrado (lo exige la página de privacidad).
 * TODO: confirmar que esta casilla existe y se lee; hoy es la única vía de
 * contacto publicada en el sitio.
 */
export const SITE_EMAIL = "hola@millomanager.com.ar";

/** Fundación del Club Atlético River Plate. */
export const RIVER_FOUNDED = 1901;

/** URL absoluta a partir de un path relativo ("/idolos" → "https://…/idolos"). */
export function absUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

/**
 * Años de historia del club. Se evalúa en build (las páginas son estáticas), así
 * que se actualiza solo en cada deploy en vez de quedar hardcodeado.
 */
export function yearsOfHistory(): number {
  return new Date().getFullYear() - RIVER_FOUNDED;
}
