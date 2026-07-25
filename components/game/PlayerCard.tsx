import Image from "next/image";
import { RARITY } from "@/lib/design/rarity";
import { cardStats, STAT_LABEL, type Idol } from "@/lib/game/players";
import { Flag } from "@/components/game/Flag";

/**
 * Carta de jugador estilo FIFA — reconstrucción fiel de la cara de carta del
 * juego real (`components/game/PlayerFicha.tsx`, bloque `left`), presentacional
 * y autocontenida. Marco con degradé de rareza, rating, badge, foto óleo real
 * (o placeholder rayado como en la app) y grilla de 6 atributos reales.
 */

// Color del valor de un atributo según su nivel. A diferencia del juego, acá
// no se marcan en rojo los valores bajos: en la landing la carta es vidriera.
function statColor(v: number): string {
  if (v >= 90) return "#b8882e";
  if (v >= 80) return "#3a3e47";
  return "#565b66";
}

function yr(n: number): string {
  return `'${String(n).slice(-2)}`;
}

function lastName(name: string): string {
  return name.split(" ").slice(-1)[0];
}

function yearsLabel(idol: Idol): string | null {
  const { debut_year, last_year } = idol;
  if (debut_year && last_year && last_year !== debut_year) {
    return `${yr(debut_year)}–${yr(last_year)}`;
  }
  return debut_year ? `Debut ${debut_year}` : null;
}

/** Foto óleo real, o placeholder rayado (idéntico a la app) si no hay retrato. */
function CardPhoto({ idol, ring }: { idol: Idol; ring: string }) {
  return (
    <div
      className="mx-auto my-4 flex size-[184px] items-end justify-center overflow-hidden rounded-full millo-stripes-light"
      style={{ boxShadow: `0 0 0 3px ${ring}` }}
    >
      {idol.photoUrl ? (
        <Image
          src={idol.photoUrl}
          alt={`${idol.display_name}, carta de Millo Manager`}
          width={184}
          height={184}
          className="size-full object-cover"
        />
      ) : null}
    </div>
  );
}

export function PlayerCard({ idol, className = "" }: { idol: Idol; className?: string }) {
  const r = RARITY[idol.card.rarity];
  const years = yearsLabel(idol);
  const stats = cardStats(idol.card);

  return (
    <div
      className={`rounded-[24px] p-[3px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] ${className}`}
      style={{ background: r.gradient }}
    >
      <div
        className="relative overflow-hidden rounded-[21px] px-5 pb-5 pt-5"
        style={{ background: "var(--card-face)" }}
      >
        <span className="millo-band -top-5 right-7 h-[200px] w-3.5 opacity-10" />

        {/* rating + posición + badge de rareza */}
        <div className="flex items-start justify-between">
          <div>
            <div
              className="font-display text-[58px] font-extrabold leading-[0.78]"
              style={{ color: r.colorInk }}
            >
              {idol.card.rating}
            </div>
            <div
              className="font-display text-[17px] font-bold uppercase leading-tight"
              style={{ color: r.colorInk }}
            >
              {idol.card.card_position}
            </div>
            {idol.card.alt_positions && idol.card.alt_positions.length > 0 ? (
              <div
                className="font-display text-[11px] font-bold uppercase leading-tight opacity-70"
                style={{ color: r.colorInk }}
              >
                {idol.card.alt_positions.join(" · ")}
              </div>
            ) : null}
          </div>
          <span
            className="rounded-[7px] px-2 py-1 font-mono text-[9px] font-bold tracking-[0.06em]"
            style={{ background: r.colorInk, color: "#fff" }}
          >
            {r.label}
          </span>
        </div>

        <CardPhoto idol={idol} ring={r.color} />

        {/* apellido + años */}
        <div
          className="text-center font-display text-[28px] font-extrabold uppercase leading-none"
          style={{ color: "var(--card-ink)" }}
        >
          {lastName(idol.display_name)}
        </div>
        {years ? (
          <div
            className="mt-1.5 text-center font-mono text-[10px] tracking-[0.1em]"
            style={{ color: r.colorInk }}
          >
            {years}
          </div>
        ) : null}

        {/* grilla de 6 atributos reales */}
        <div className="mt-4 grid grid-cols-3 gap-y-3 border-t border-black/[0.08] pt-4">
          {stats.map((s) => (
            <div key={s.key} className="text-center">
              <div
                className="font-display text-xl font-extrabold leading-none"
                style={{ color: statColor(s.value) }}
              >
                {s.value}
              </div>
              <div
                className="mt-1 font-mono text-[8px] tracking-[0.08em]"
                style={{ color: "var(--card-ink-4)" }}
              >
                {STAT_LABEL[s.key]}
              </div>
            </div>
          ))}
        </div>

        {idol.nationality ? (
          <div
            className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[9px] tracking-[0.08em]"
            style={{ color: "var(--card-ink-4)" }}
          >
            <Flag nationality={idol.nationality} size={14} />
            {idol.nationality.toUpperCase()}
          </div>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Carta compacta para grids (`/idolos`, secciones de era): marco de rareza,
 * rating, foto/placeholder, apellido y posición. Igual criterio visual que el
 * `MiniCard` del juego.
 */
export function MiniCard({ idol }: { idol: Idol }) {
  const r = RARITY[idol.card.rarity];
  return (
    <div
      className="rounded-[16px] p-[2px] shadow-[0_10px_26px_rgba(0,0,0,0.3)] transition-transform duration-200 group-hover:-translate-y-1"
      style={{ background: r.gradient }}
    >
      <div
        className="relative overflow-hidden rounded-[14px] px-3 pb-3 pt-2.5"
        style={{ background: "var(--card-face)" }}
      >
        <div className="flex items-start justify-between">
          <div
            className="font-display text-[30px] font-extrabold leading-none"
            style={{ color: r.colorInk }}
          >
            {idol.card.rating}
          </div>
          <div
            className="font-display text-[12px] font-bold uppercase leading-tight"
            style={{ color: r.colorInk }}
          >
            {idol.card.card_position}
          </div>
        </div>
        <div
          className="mx-auto my-2 flex size-[92px] items-end justify-center overflow-hidden rounded-full millo-stripes-light"
          style={{ boxShadow: `0 0 0 2px ${r.color}` }}
        >
          {idol.photoUrl ? (
            <Image
              src={idol.photoUrl}
              alt={`${idol.display_name}, carta de Millo Manager`}
              width={92}
              height={92}
              className="size-full object-cover"
            />
          ) : null}
        </div>
        <div
          className="truncate text-center font-display text-[15px] font-extrabold uppercase leading-none"
          style={{ color: "var(--card-ink)" }}
        >
          {lastName(idol.display_name)}
        </div>
        <div className="mt-1 flex items-center justify-center gap-1">
          <Flag nationality={idol.nationality} size={11} />
          <span
            className="font-mono text-[8px] tracking-[0.08em]"
            style={{ color: "var(--card-ink-4)" }}
          >
            {r.label}
          </span>
        </div>
      </div>
    </div>
  );
}
