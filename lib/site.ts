/**
 * Config de sitio compartida (SEO). Fuente única de la URL base y de datos de
 * marca, usada por metadata, sitemap, robots, manifest y JSON-LD.
 */

/**
 * Host canónico: el apex, SIN www. Es el que Vercel sirve con 200; `www`
 * redirige acá con un 307. Si esto apunta a `www`, el canonical, el og:url y
 * las ~100 URLs del sitemap señalan un host que redirige, Google descarta el
 * canónico declarado y elige el suyo. Cambiar solo si además se invierte el
 * redirect en Vercel.
 */
export const SITE_URL = "https://millomanager.com.ar";
export const SITE_NAME = "Millo Manager";
export const SITE_TAGLINE = "Todo River, siempre";
export const SITE_DESCRIPTION =
  "El football manager gratis y sin descargas dedicado a River Plate. Coleccioná las cartas de los ídolos de todas las épocas, armá tu mejor XI y jugá la liga para subir de división.";
export const SITE_LOCALE = "es_AR";

/**
 * Dónde vive el juego en sí (repo `millo`). La landing es solo la vitrina: el
 * login —con cuenta de Google o email— y la partida pasan acá.
 *
 * Google exige, para verificar la pantalla de consentimiento de OAuth, que la
 * home explique qué hace la app y que se llame igual que el cliente OAuth
 * ("Millo Manager"). Por eso el nombre y este link aparecen explícitos en el
 * Hero, en `AboutApp` y en la FAQ: si el revisor no puede llegar al login desde
 * la home, la verificación vuelve rechazada.
 */
export const APP_URL = "https://app.millomanager.com.ar";

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
