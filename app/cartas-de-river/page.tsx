import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { PlayerCard, MiniCard } from "@/components/game/PlayerCard";
import { getIdolBySlug, getTopIdols, getAllIdols } from "@/lib/game/players";
import { RARITY } from "@/lib/design/rarity";
import { absUrl } from "@/lib/site";

const featured =
  getIdolBySlug("enzo-francescoli") ?? getTopIdols(1)[0];
const showcase = getAllIdols()
  .filter((i) => i.photoUrl)
  .slice(0, 12);
const total = getAllIdols().length;

export const metadata: Metadata = {
  title: "Cartas de River — colección de jugadores por rareza",
  description:
    "Las cartas de River Plate en Millo Manager: cada jugador es una carta con rating, cinco niveles de rareza (leyenda, platino, oro, plata y bronce) y seis atributos. Coleccioná a las leyendas de todas las épocas.",
  alternates: { canonical: "/cartas-de-river" },
  openGraph: {
    title: "Cartas de River — colección de ídolos | Millo Manager",
    description: "Cartas coleccionables de los ídolos de River, por rareza y con atributos reales.",
    url: absUrl("/cartas-de-river"),
  },
};

const rarezas: { key: keyof typeof RARITY; desc: string }[] = [
  { key: "leyenda", desc: "Los más grandes de la historia de River." },
  { key: "platino", desc: "Cracks de nivel top de cada época." },
  { key: "oro", desc: "Ídolos y grandes figuras del club." },
  { key: "plata", desc: "Referentes importantes del plantel." },
  { key: "bronce", desc: "Jugadores de plantel para completar el equipo." },
];

export default function CartasDeRiverPage() {
  return (
    <>
      <Nav home={false} />
      <main>
        <section className="mx-auto max-w-[1200px] px-8 pt-16 pb-6">
          <div className="flex flex-wrap items-center gap-14">
            <div className="min-w-[320px] flex-1">
              <div className="mb-3 font-mono text-[11px] tracking-[0.16em] text-gold">
                ★ ULTIMATE TEAM · {total} CARTAS
              </div>
              <h1 className="m-0 font-display text-[44px] leading-[0.95] font-extrabold uppercase text-text sm:text-[56px]">
                Las cartas de
                <br />
                los ídolos de River
              </h1>
              <p className="mt-5 max-w-[520px] text-[18px] leading-relaxed text-text-2">
                Cada leyenda de River es una carta coleccionable con su rating,
                su rareza y seis atributos reales. De Francescoli a Quintero:
                juntalas todas y armá la formación más temida de todas las épocas.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/idolos"
                  className="inline-flex items-center gap-2 rounded-[13px] bg-river px-6 py-4 text-base font-bold text-white no-underline shadow-[0_10px_26px_rgba(225,50,42,0.35)] transition-colors hover:bg-river-bright"
                >
                  Ver todas las cartas <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="mx-auto w-[300px] flex-none">
              {featured ? <PlayerCard idol={featured} /> : null}
            </div>
          </div>
        </section>

        {/* rarezas */}
        <section className="mx-auto max-w-[1200px] px-8 py-14">
          <h2 className="m-0 font-display text-[30px] font-extrabold uppercase text-text">
            Rarezas de las cartas
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {rarezas.map(({ key, desc }) => (
              <div key={key} className="rounded-[16px] border border-border-soft bg-surface p-5">
                <span
                  className="inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-bold tracking-[0.06em] text-[#26200e]"
                  style={{ background: RARITY[key].gradient }}
                >
                  {RARITY[key].label}
                </span>
                <p className="mt-3 text-[14px] leading-relaxed text-text-2">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* showcase */}
        <section className="mx-auto max-w-[1200px] px-8 py-8">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <h2 className="m-0 font-display text-[30px] font-extrabold uppercase text-text">
              Cartas destacadas
            </h2>
            <Link href="/idolos" className="text-[15px] font-semibold text-river no-underline">
              Ver las {total} →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {showcase.map((idol) => (
              <Link key={idol.slug} href={`/idolos/${idol.slug}`} className="group no-underline">
                <MiniCard idol={idol} />
                <div className="mt-1.5 text-center text-[12px] font-semibold text-text">
                  {idol.display_name}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <CtaBanner
        title="Empezá tu colección"
        subtitle="Sumate a la lista de espera y arrancá a juntar las cartas de los ídolos de River."
      />
      <Footer home={false} />
    </>
  );
}
