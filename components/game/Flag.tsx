import { flagSrc } from "@/lib/game/flags";

/**
 * Banderita circular de nacionalidad (SVG en public/flags). Igual que la carta
 * del juego. null si no hay nacionalidad.
 */
export function Flag({
  nationality,
  size = 16,
}: {
  nationality: string | null;
  size?: number;
}) {
  const src = flagSrc(nationality);
  if (!src) return null;
  return (
    // SVG estático servido desde /public — <img> es lo correcto acá.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={nationality ?? ""}
      width={size}
      height={size}
      className="inline-block shrink-0 rounded-full"
      style={{ width: size, height: size }}
    />
  );
}
