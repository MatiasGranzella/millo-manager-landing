/**
 * Retratos al óleo de los ídolos. El arte lo genera y versiona el juego (repo
 * `millo`), que lo guarda en **Supabase Storage**, bucket público `photos`, con
 * la convención `players/<slug>.png` — ver `millo/lib/photos.ts`.
 *
 * Antes la landing tenía una copia local de 28 archivos (48MB en el repo),
 * sacada de `millo/public/photos/players/_bkp` cuando el arte todavía vivía en
 * disco. Esa copia quedó congelada: 54 ídolos que sí tenían retrato en el
 * bucket acá se veían con el placeholder rayado. Ahora se apunta al bucket, así
 * que la landing acompaña al juego sin sumar peso ni pasos de sincronización.
 *
 * El proyecto se puede override con `NEXT_PUBLIC_SUPABASE_PHOTOS_URL`; el
 * default es el de producción del juego. Todas las páginas que muestran cartas
 * son SSG, así que la URL se resuelve en build. Si cambiás esta variable,
 * actualizá también `images.remotePatterns` en `next.config.ts`.
 */

export const PHOTOS_BASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_PHOTOS_URL ??
  "https://kafuiiqeujzhgccjmixn.supabase.co";

/**
 * Ídolos sin arte en el bucket: piden un 400 y romperían el <Image>. Se listan
 * a mano porque no hay forma de consultar el bucket en build sin credenciales.
 * Para revalidar la lista:
 *
 *   curl -o /dev/null -w '%{http_code}\n' \
 *     "$BASE/storage/v1/object/public/photos/players/<slug>.png"
 *
 * Último chequeo de los 86 slugs: 2026-07-26 — 82 con retrato, estos 4 sin.
 */
const SIN_RETRATO = new Set([
  "enzo-diaz",
  "augusto-batalla",
  "santiago-simon",
  "celso-ayala",
]);

/** URL del retrato en el bucket, o null si ese ídolo todavía no tiene arte. */
export function photoUrlFor(slug: string): string | null {
  if (SIN_RETRATO.has(slug)) return null;
  return `${PHOTOS_BASE_URL}/storage/v1/object/public/photos/players/${slug}.png`;
}
