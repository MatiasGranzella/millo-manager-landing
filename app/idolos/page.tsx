import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { MiniCard } from "@/components/game/PlayerCard";
import { getAllIdols } from "@/lib/game/players";
import { absUrl } from "@/lib/site";

const idols = getAllIdols();

export const metadata: Metadata = {
  title: "Ídolos de River — todas las cartas y estadísticas",
  description: `Las cartas de los ${idols.length} ídolos de River Plate en Millo Manager: de Francescoli a Julián Álvarez, con rating, rareza y atributos reales de cada leyenda. De todas las épocas del club.`,
  alternates: { canonical: "/idolos" },
  openGraph: {
    title: "Ídolos de River — todas las cartas | Millo Manager",
    description: "Todas las cartas de los ídolos de River, de todas las épocas, con sus atributos reales.",
    url: absUrl("/idolos"),
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Ídolos de River — Millo Manager",
  url: absUrl("/idolos"),
  inLanguage: "es-AR",
  hasPart: {
    "@type": "ItemList",
    numberOfItems: idols.length,
    itemListElement: idols.slice(0, 30).map((idol, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: idol.display_name,
      url: absUrl(`/idolos/${idol.slug}`),
    })),
  },
};

export default function IdolosPage() {
  return (
    <>
      <Nav home={false} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-14 pb-6">
        <div className="mb-2 font-mono text-[11px] tracking-[0.16em] text-gold">
          ★ {idols.length} ÍDOLOS DE TODAS LAS ÉPOCAS
        </div>
        <h1 className="m-0 max-w-[760px] font-display text-[40px] leading-[0.98] font-extrabold uppercase text-text sm:text-[52px]">
          Los ídolos de River, hechos carta
        </h1>
        <p className="mt-4 max-w-[640px] text-[17px] leading-relaxed text-text-2">
          Cada leyenda de River Plate es una carta coleccionable con sus
          atributos reales. Elegí un ídolo para ver su ficha completa: rating,
          rareza, estadísticas, palmarés e historia en el club. De La Máquina a
          la era Gallardo.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {idols.map((idol) => (
            <Link
              key={idol.slug}
              href={`/idolos/${idol.slug}`}
              className="group no-underline"
              aria-label={`Ver la carta de ${idol.display_name}`}
            >
              <MiniCard idol={idol} />
              <div className="mt-2 text-center text-[13px] font-semibold text-text">
                {idol.display_name}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <CtaBanner />
      <Footer home={false} />
    </>
  );
}
