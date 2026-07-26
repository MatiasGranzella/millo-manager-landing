import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { getAllEras, eraYears } from "@/lib/game/eras";
import { getIdolsByEra } from "@/lib/game/players";
import { absUrl, yearsOfHistory } from "@/lib/site";

const eras = getAllEras();

export const metadata: Metadata = {
  title: "Las eras de River — de La Máquina a Gallardo",
  description:
    "Recorré la historia de River Plate por sus eras: La Máquina, los 70 y 80 de Passarella, los 90 de Francescoli y la era Gallardo. Cada época con sus ídolos y sus cartas en Millo Manager.",
  alternates: { canonical: "/eras" },
  openGraph: {
    title: "Las eras de River | Millo Manager",
    description: "La historia de River por épocas, con los ídolos de cada era.",
    url: absUrl("/eras"),
  },
};

export default function ErasPage() {
  return (
    <>
      <Nav home={false} />
      <main className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-14 pb-6">
        <div className="mb-2 font-mono text-[11px] tracking-[0.16em] text-gold">
          ★ {yearsOfHistory()} AÑOS DE HISTORIA
        </div>
        <h1 className="m-0 max-w-[760px] font-display text-[40px] leading-[0.98] font-extrabold uppercase text-text sm:text-[52px]">
          La historia de River, por eras
        </h1>
        <p className="mt-4 max-w-[640px] text-[17px] leading-relaxed text-text-2">
          Cada época del club tiene sus ídolos y sus cartas. Elegí una era para
          conocer a sus leyendas y su historia.
        </p>

        <div className="mt-10 grid gap-4">
          {eras.map((era) => {
            const count = getIdolsByEra(era.slug).length;
            return (
              <Link
                key={era.slug}
                href={`/eras/${era.slug}`}
                className="group flex flex-wrap items-center justify-between gap-4 rounded-[18px] border border-border-soft bg-surface px-6 py-6 no-underline transition-colors hover:border-border-strong"
              >
                <div className="max-w-[680px]">
                  <div className="font-mono text-[10px] tracking-[0.14em] text-gold">
                    {eraYears(era)} · {count} ídolos
                  </div>
                  <div className="mt-1 font-display text-[26px] font-extrabold uppercase leading-tight text-text">
                    {era.title}
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-text-2">{era.summary}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-river">
                  Ver ídolos <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </main>
      <CtaBanner />
      <Footer home={false} />
    </>
  );
}
