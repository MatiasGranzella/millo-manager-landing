import { getKit, type Kit, type KitPattern } from "@/lib/game/kits";

/**
 * "Camiseta" de un club como recuadro de color (color de fondo + patrón),
 * data-driven desde `lib/game/kits`. Portado del juego real. La usa el marcador
 * de la simulación de partido para los escudos. La clave es el slug del club
 * ("river" para el equipo del usuario).
 */
export function TeamKit({
  slug,
  size,
  className,
}: {
  slug: string | null | undefined;
  size?: number;
  className?: string;
}) {
  const kit = getKit(slug);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className ?? (size ? undefined : "h-full w-full")}
      role="img"
      aria-label={`Camiseta de ${slug ?? "equipo"}`}
    >
      <rect x="0" y="0" width="100" height="100" fill={kit.primary} />
      <Pattern kit={kit} />
      <rect
        x="0.9"
        y="0.9"
        width="98.2"
        height="98.2"
        fill="none"
        stroke="rgba(0,0,0,.18)"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function Pattern({ kit }: { kit: Kit }) {
  const s = kit.secondary;
  switch (kit.pattern as KitPattern) {
    case "solid":
      return null;
    case "band":
      return <rect x="0" y="40" width="100" height="20" fill={s} />;
    case "vband":
      return <rect x="40" y="0" width="20" height="100" fill={s} />;
    case "halves":
      return <rect x="50" y="0" width="50" height="100" fill={s} />;
    case "sash": // banda diagonal estilo River
      return <polygon points="60,0 100,0 40,100 0,100" fill={s} />;
    case "hoops":
      return (
        <>
          {[14, 38, 62, 86].map((y) => (
            <rect key={y} x="0" y={y} width="100" height="12" fill={s} />
          ))}
        </>
      );
    case "stripes":
      return (
        <>
          {[14.3, 42.9, 71.4].map((x) => (
            <rect key={x} x={x} y="0" width="14.3" height="100" fill={s} />
          ))}
        </>
      );
    default:
      return null;
  }
}
