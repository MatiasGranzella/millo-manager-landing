"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { TeamKit } from "@/components/game/TeamKit";

/**
 * Simulación de partido animada, en loop — reconstrucción de la transmisión
 * "EN VIVO" del juego (`components/game/MatchBroadcast.tsx`): header con minuto,
 * marcador con escudos (kits reales), barra de minuto y relato de eventos con
 * ídolos reales de River. No es un video: se anima solo y se reinicia. Respeta
 * `prefers-reduced-motion` (muestra el resultado final estático).
 */

type Ev = {
  minute: number;
  side: "home" | "away";
  type: "goal" | "yellow";
  name: string;
};

// Partido guionado (River de local vs. el clásico rival). Nombres reales.
const HOME = { name: "River", slug: "river" };
const AWAY = { name: "Boca", slug: "boca" };

const SCRIPT: Ev[] = [
  { minute: 12, side: "home", type: "goal", name: "Julián Álvarez" },
  { minute: 34, side: "away", type: "yellow", name: "Rival" },
  { minute: 41, side: "home", type: "goal", name: "Francescoli" },
  { minute: 63, side: "away", type: "goal", name: "Rival" },
  { minute: 79, side: "home", type: "goal", name: "Quintero" },
];

const FINAL_GF = SCRIPT.filter((e) => e.type === "goal" && e.side === "home").length;
const FINAL_GA = SCRIPT.filter((e) => e.type === "goal" && e.side === "away").length;

const TICK_MS = 42; // ms por minuto de partido → ~3.8s de "en vivo"
const HOLD_FINAL_MS = 3600; // tiempo mostrando el resumen antes de reiniciar

function eventText(e: Ev): string {
  if (e.type === "goal") return `Gol de ${e.name}`;
  return `Amarilla a ${e.name}`;
}

export function MatchSim({ className = "" }: { className?: string }) {
  const [clock, setClock] = useState(0);
  const [phase, setPhase] = useState<"live" | "final">("live");
  const rafReset = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detectar reduced-motion (solo cliente).
  const reduced = useRef(false);
  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) {
      setClock(90);
      setPhase("final");
    }
  }, []);

  // Reloj del partido: avanza hasta 90', pasa a "final", espera y reinicia.
  useEffect(() => {
    if (reduced.current) return;
    if (phase !== "live") {
      rafReset.current = setTimeout(() => {
        setClock(0);
        setPhase("live");
      }, HOLD_FINAL_MS);
      return () => {
        if (rafReset.current) clearTimeout(rafReset.current);
      };
    }
    const id = setInterval(() => {
      setClock((c) => {
        if (c >= 90) {
          clearInterval(id);
          setPhase("final");
          return 90;
        }
        return c + 1;
      });
    }, TICK_MS);
    return () => clearInterval(id);
  }, [phase]);

  const isFinal = phase === "final";
  const shown = useMemo(
    () => (isFinal ? SCRIPT : SCRIPT.filter((e) => e.minute <= clock)),
    [clock, isFinal],
  );
  const gf = isFinal ? FINAL_GF : shown.filter((e) => e.type === "goal" && e.side === "home").length;
  const ga = isFinal ? FINAL_GA : shown.filter((e) => e.type === "goal" && e.side === "away").length;
  const minutePct = isFinal ? 100 : Math.round((Math.min(90, clock) / 90) * 100);

  // Relato: evento más reciente arriba + línea de arranque.
  const feed = useMemo(() => {
    const rows = shown
      .map((e) => ({ min: `${e.minute}'`, text: eventText(e), home: e.side === "home", goal: e.type === "goal" }))
      .reverse();
    if (isFinal) rows.unshift({ min: "90'", text: "Final del partido.", home: false, goal: false });
    rows.push({ min: "0'", text: "Arranca el partido en el Monumental.", home: false, goal: false });
    return rows;
  }, [shown, isFinal]);

  return (
    <div
      className={`relative w-full max-w-[420px] overflow-hidden rounded-[26px] border border-gold/25 px-6 py-6 shadow-[0_30px_80px_rgba(0,0,0,.5)] ${className}`}
      style={{ background: "radial-gradient(120% 130% at 50% -10%, #2a2012 0%, #15140f 45%, #0E0F12 100%)" }}
    >
      <span className="millo-band -top-10 left-[48%] h-[520px] w-[26px]" />

      {/* header estado + minuto */}
      <div className="relative flex items-center gap-2.5">
        {isFinal ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.08] px-3 py-[5px] font-mono text-[9px] tracking-[0.12em] text-[#c9ced4]">
            <span className="size-1.5 rounded-full bg-[#c9ced4]" />
            FINAL
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-river px-3 py-[5px] font-mono text-[9px] tracking-[0.12em] text-white">
            <span className="size-1.5 animate-[milloPulse_1.2s_ease-in-out_infinite] rounded-full bg-white" />
            EN VIVO
          </span>
        )}
        <span className="font-mono text-[12px] text-gold">{Math.min(90, clock)}&apos;</span>
      </div>

      {/* marcador */}
      <div className="relative mt-5 flex items-center justify-between gap-3">
        <Crest slug={HOME.slug} name={HOME.name} ring="rgba(230,185,78,.4)" />
        <div className="flex-none whitespace-nowrap text-center font-display text-[52px] font-extrabold leading-[0.9] text-white">
          {/* `key` en el número: al cambiar, React remonta el span y la
              animación de pop se dispara de nuevo */}
          <span
            key={`h${gf}`}
            className="animate-score-pop inline-block"
            style={{ color: gf >= ga ? "#fff" : "#9AA0A8" }}
          >
            {gf}
          </span>
          <span className="mx-2 align-middle text-3xl text-[#3a3e47]">—</span>
          <span
            key={`a${ga}`}
            className="animate-score-pop inline-block"
            style={{ color: ga > gf ? "#fff" : "#9AA0A8" }}
          >
            {ga}
          </span>
        </div>
        <Crest slug={AWAY.slug} name={AWAY.name} ring="rgba(201,206,212,.28)" />
      </div>

      {/* barra de minuto */}
      <div className="relative mt-4 h-1 overflow-hidden rounded-full bg-white/[0.08]">
        <div
          className="h-full rounded-full"
          style={{
            width: `${minutePct}%`,
            background: "linear-gradient(90deg,#E6B94E,#B8882E)",
            transition: "width .12s linear",
          }}
        />
      </div>

      {/* relato */}
      <div className="relative mt-4 flex h-[150px] flex-col gap-2 overflow-hidden border-t border-white/[0.08] pt-3">
        {feed.map((r, i) => (
          <div key={`${r.min}-${i}`} className="flex items-baseline gap-2.5 animate-in">
            <span className="w-[26px] flex-none text-right font-mono text-[10px] text-gold-dark">
              {r.min}
            </span>
            <span
              className="leading-snug"
              style={{
                color: r.goal ? (r.home ? "#F2D17A" : "#ED5249") : "#9AA0A8",
                fontWeight: r.goal ? 800 : 500,
                fontSize: r.goal ? "13.5px" : "12.5px",
              }}
            >
              {r.text}
              {r.goal ? "  ⚽" : ""}
            </span>
          </div>
        ))}
      </div>

      {/* resumen final */}
      {isFinal ? (
        <div className="relative mt-4 border-t border-white/[0.08] pt-4">
          <div className="font-display text-[34px] font-extrabold uppercase leading-[0.9] text-[#3FC07E]">
            ¡Ganaste! {gf}—{ga}
          </div>
          <div className="mt-1 text-[12.5px] text-[#a7acb5]">
            Fecha 7 · Monumental · Liga Millo
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Crest({ slug, name, ring }: { slug: string; name: string; ring: string }) {
  return (
    <div className="flex-1 text-center">
      <div
        className="mx-auto mb-2 size-[52px] overflow-hidden rounded-[14px] bg-[#15171c]"
        style={{ boxShadow: `0 0 0 2px ${ring}` }}
      >
        <TeamKit slug={slug} className="h-full w-full" />
      </div>
      <div className="truncate font-display text-[15px] font-extrabold uppercase text-white">
        {name}
      </div>
    </div>
  );
}
