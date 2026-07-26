import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RarityCarousel } from "@/components/game/RarityCarousel";
import {
  getRarityShowcase,
  IDOL_COUNT as total,
  IDOL_WITH_PHOTO_COUNT as conRetrato,
} from "@/lib/game/players";
import { RARITY, type Rarity } from "@/lib/design/rarity";

const RARITY_TIERS: Rarity[] = ["leyenda", "platino", "oro", "plata", "bronce"];

export function Cards() {
  const showcase = getRarityShowcase();

  // 552 jugadores con carta en el catálogo completo del juego (repo millo,
  // data/players/lahistoriariver.json) — acá viven los 86 curados, no todos
  // con retrato local
  const stats = [
    { value: "+550", label: "cartas", gold: true },
    { value: "6", label: "atributos por carta", gold: false },
    { value: "5", label: "rarezas", gold: false },
  ];

  return (
    <section
      id="cartas"
      className="relative mt-[84px] overflow-hidden bg-[radial-gradient(120%_120%_at_75%_-10%,#2a2012_0%,#15140f_42%,#0E0F12_100%)] text-white"
    >
      <span className="absolute -top-10 right-[120px] h-[560px] w-9 skew-x-[-20deg] bg-river opacity-[0.13]" />
      <span className="absolute -top-10 right-[70px] h-[560px] w-5 skew-x-[-20deg] bg-river opacity-[0.09]" />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
        <div className="relative order-2 mx-auto flex-none lg:order-1">
          <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(230,185,78,0.22),transparent_70%)] blur-[10px]" />
          <div className="relative">
            <RarityCarousel idols={showcase} />
          </div>
        </div>

        <div className="order-1 min-w-0 flex-1 lg:order-2">
          <div className="mb-3.5 font-mono text-[10px] tracking-[0.16em] text-gold sm:text-[11px]">
            ★ JUGADORES DE TODAS LAS ÉPOCAS
          </div>
          <h2 className="m-0 font-display text-[36px] leading-[0.98] font-extrabold uppercase sm:text-[48px] sm:leading-[0.96]">
            Coleccioná a las
            <br />
            leyendas de River
          </h2>
          <p className="my-[18px] mb-[22px] max-w-[460px] text-[15px] leading-relaxed text-[#C9CED4] sm:mb-[26px] sm:text-[17px]">
            De Francescoli a Quintero. Cada jugador es una carta con sus
            atributos reales, en cinco niveles de rareza: leyenda, platino, oro,
            plata y bronce. Ganá partidos, desbloqueá cartas y armá tu equipo
            ideal.
          </p>
          <div className="mb-6 flex flex-wrap gap-2 sm:mb-7 sm:gap-2.5">
            {RARITY_TIERS.map((r) => (
              <span
                key={r}
                className="inline-flex items-center rounded-full px-[11px] py-1.5 font-mono text-[10px] font-bold tracking-[0.08em] text-[#1c1e23] sm:px-[13px] sm:py-2 sm:text-[11px]"
                style={{ background: RARITY[r].gradient }}
              >
                {RARITY[r].label}
              </span>
            ))}
          </div>
          <div className="flex items-start justify-between gap-4 sm:justify-start sm:gap-7">
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className={`font-display text-[32px] leading-none font-extrabold sm:text-[38px] ${
                    s.gold ? "text-gold" : "text-white"
                  }`}
                >
                  {s.value}
                </div>
                <div className="mt-0.5 text-[12px] text-[#9AA0A8] sm:text-[13px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 sm:mt-8">
            <Link
              href="/idolos"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-gold no-underline transition-colors hover:text-white"
            >
              Explorá algunas cartas <ArrowRight size={16} />
            </Link>
            <p className="mt-2 max-w-[430px] text-[12px] leading-[1.5] text-[#7C828D]">
              En este sitio podés ver la ficha de {total} ídolos, {conRetrato} ya
              con su retrato al óleo. El resto del catálogo se desbloquea jugando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
