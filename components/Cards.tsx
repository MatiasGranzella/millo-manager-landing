import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RarityCarousel } from "@/components/game/RarityCarousel";
import { getRarityShowcase, getAllIdols } from "@/lib/game/players";
import { RARITY, type Rarity } from "@/lib/design/rarity";

const RARITY_TIERS: Rarity[] = ["leyenda", "platino", "oro", "plata", "bronce"];

export function Cards() {
  const showcase = getRarityShowcase();
  const total = getAllIdols().length;

  const stats = [
    { value: `${total}`, label: "jugadores", gold: true },
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
      <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-16 px-8 py-20">
        <div className="relative mx-auto flex-none">
          <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(230,185,78,0.22),transparent_70%)] blur-[10px]" />
          <div className="relative">
            <RarityCarousel idols={showcase} />
          </div>
        </div>

        <div className="min-w-[320px] flex-1">
          <div className="mb-3.5 font-mono text-[11px] tracking-[0.16em] text-gold">
            ★ ULTIMATE TEAM
          </div>
          <h2 className="m-0 font-display text-[40px] leading-[0.96] font-extrabold uppercase sm:text-[48px]">
            Coleccioná a las
            <br />
            leyendas de River
          </h2>
          <p className="my-[18px] mb-[26px] max-w-[460px] text-[17px] leading-relaxed text-[#C9CED4]">
            De Francescoli a Quintero. Cada jugador es una carta con sus
            atributos reales, en cinco niveles de rareza: leyenda, platino, oro,
            plata y bronce. Ganá partidos, desbloqueá cartas y armá tu equipo
            ideal.
          </p>
          <div className="mb-7 flex flex-wrap gap-2.5">
            {RARITY_TIERS.map((r) => (
              <span
                key={r}
                className="inline-flex items-center rounded-full px-[13px] py-2 font-mono text-[11px] font-bold tracking-[0.08em] text-[#1c1e23]"
                style={{ background: RARITY[r].gradient }}
              >
                {RARITY[r].label}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-3 justify-start gap-7" style={{ gridTemplateColumns: "repeat(3,auto)" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className={`font-display text-[38px] leading-none font-extrabold ${
                    s.gold ? "text-gold" : "text-white"
                  }`}
                >
                  {s.value}
                </div>
                <div className="mt-0.5 text-[13px] text-[#9AA0A8]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/idolos"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-gold no-underline transition-colors hover:text-white"
            >
              Explorá algunas cartas <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
