import Image from "next/image";
import { RARITY } from "@/lib/design/rarity";
import { getAllIdols, type Idol } from "@/lib/game/players";
import {
  FORMATION_433,
  PITCH_COORDS_433,
  positionGroup,
  type Line,
  type PositionGroup,
} from "@/lib/game/formations";

/**
 * Cancha + formación 4-3-3 con el XI de leyendas — reconstrucción de la vista de
 * equipo del juego (`components/game/LineupEditor.tsx`). Arma el once real
 * eligiendo, por cada línea, a los ídolos de mayor rating que encajan, y muestra
 * el rating promedio del equipo. Todo con datos y arte reales.
 */

const LINE_GROUP: Record<Line, PositionGroup> = {
  gk: "ARQ",
  def: "DEF",
  mid: "MED",
  att: "DEL",
};

/** Arma un XI real: por cada slot toma el mejor ídolo libre que encaje en su línea. */
function buildLineup(): { slot: string; idol: Idol }[] {
  const pool = [...getAllIdols()]; // ya viene ordenado por rating desc
  const used = new Set<string>();
  const pick = (group: PositionGroup): Idol | undefined => {
    const found = pool.find(
      (p) => !used.has(p.slug) && positionGroup(p.card.card_position) === group,
    );
    if (found) used.add(found.slug);
    return found;
  };
  return FORMATION_433.map((slot) => {
    const group = LINE_GROUP[slot.line];
    // encaja por línea; si se agota la línea, cae al mejor ídolo libre restante
    const idol = pick(group) ?? pool.find((p) => !used.has(p.slug))!;
    used.add(idol.slug);
    return { slot: slot.code, idol };
  });
}

function PitchNode({ idol, x, y }: { idol: Idol; x: number; y: number }) {
  const r = RARITY[idol.card.rarity];
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="relative">
        <div
          className="flex size-[clamp(34px,9vw,52px)] items-end justify-center overflow-hidden rounded-full millo-stripes-dark"
          style={{ boxShadow: `0 0 0 2px ${r.color}` }}
        >
          {idol.photoUrl ? (
            <Image
              src={idol.photoUrl}
              alt={idol.display_name}
              width={52}
              height={52}
              className="size-full object-cover"
            />
          ) : null}
        </div>
        <span
          className="absolute -right-1.5 -top-1.5 flex min-w-[18px] items-center justify-center rounded-full px-1 font-display text-[10px] font-extrabold text-white shadow"
          style={{ background: r.colorInk }}
        >
          {idol.card.rating}
        </span>
      </div>
      <span className="mt-1 max-w-[64px] truncate rounded bg-black/45 px-1 font-display text-[9px] font-bold uppercase leading-tight text-white">
        {idol.display_name.split(" ").slice(-1)[0]}
      </span>
    </div>
  );
}

export function Pitch({ className = "" }: { className?: string }) {
  const lineup = buildLineup();
  const teamRating = Math.round(
    lineup.reduce((sum, { idol }) => sum + idol.card.rating, 0) / lineup.length,
  );

  return (
    <div
      className={`overflow-hidden rounded-[22px] border border-white/10 p-4 ${className}`}
      style={{ background: "var(--grad-game-card)" }}
    >
      {/* panel rating del equipo */}
      <div className="mb-3 flex items-end justify-between">
        <div>
          <div className="font-mono text-[9px] tracking-[0.16em] text-gold">
            RATING DEL EQUIPO · 4-3-3
          </div>
          <div className="font-display text-[52px] font-extrabold leading-[0.85] text-gold">
            {teamRating}
          </div>
        </div>
        <div className="text-right font-mono text-[10px] leading-relaxed text-white/50">
          XI DE
          <br />
          LEYENDAS
        </div>
      </div>

      {/* cancha */}
      <div
        className="relative w-full overflow-hidden rounded-[16px]"
        style={{
          aspectRatio: "4 / 5",
          background: "radial-gradient(120% 100% at 50% 0%, #19311f, #0d1a12)",
        }}
      >
        {/* líneas de la cancha */}
        <div className="pointer-events-none absolute inset-3 rounded-[10px] border border-white/15" />
        <div className="pointer-events-none absolute left-3 right-3 top-1/2 h-px -translate-y-1/2 bg-white/15" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
        <div className="pointer-events-none absolute bottom-3 left-1/2 h-[14%] w-[44%] -translate-x-1/2 border border-t-0 border-white/15" />
        <div className="pointer-events-none absolute left-1/2 top-3 h-[14%] w-[44%] -translate-x-1/2 border border-b-0 border-white/15" />

        {lineup.map(({ slot, idol }) => {
          const pos = PITCH_COORDS_433[slot];
          return <PitchNode key={slot} idol={idol} x={pos.x} y={pos.y} />;
        })}
      </div>
    </div>
  );
}
