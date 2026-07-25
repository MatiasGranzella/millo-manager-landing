import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy, Users, Swords } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { Pitch } from "@/components/game/Pitch";
import { MatchSim } from "@/components/game/MatchSim";
import { getAllIdols } from "@/lib/game/players";
import { absUrl, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

const idolCount = getAllIdols().length;

export const metadata: Metadata = {
  title: "Juego de River Plate gratis y online — Millo Manager",
  description:
    "El juego de River Plate para jugar gratis y online, sin descargas. Coleccioná las cartas de los ídolos, armá tu XI de todas las épocas y jugá la liga desde el navegador.",
  alternates: { canonical: "/juego-de-river-plate" },
  openGraph: {
    title: "Juego de River Plate gratis y online | Millo Manager",
    description: "Coleccioná ídolos, armá tu XI y competí. Gratis, desde el navegador.",
    url: absUrl("/juego-de-river-plate"),
  },
};

const videoGameJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: absUrl("/juego-de-river-plate"),
  applicationCategory: "Game",
  operatingSystem: "Web",
  gamePlatform: "Navegador web",
  inLanguage: "es-AR",
  genre: ["Football manager", "Cartas coleccionables", "Deportes"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "ARS" },
};

const features = [
  {
    icon: Users,
    title: `${idolCount} ídolos coleccionables`,
    body: "De Francescoli y Labruna a Julián Álvarez y Enzo Fernández. Cada leyenda es una carta con sus atributos reales.",
  },
  {
    icon: Swords,
    title: "Armá tu mejor XI",
    body: "Elegí formación, química y titulares. Mezclá épocas: La Máquina, los 80, los 90 y la era Gallardo en un mismo equipo.",
  },
  {
    icon: Trophy,
    title: "Competí y subí de división",
    body: "Jugá la liga contra la IA, ganá monedas, abrí sobres y subí de división.",
  },
];

export default function JuegoDeRiverPage() {
  return (
    <>
      <Nav home={false} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameJsonLd) }}
      />

      <main>
        {/* hero */}
        <section className="mx-auto max-w-[1200px] px-8 pt-16 pb-6">
          <div className="flex flex-wrap items-center gap-14">
            <div className="min-w-[320px] flex-1">
              <div className="mb-3 font-mono text-[11px] tracking-[0.16em] text-river">
                JUEGO DE RIVER PLATE · GRATIS · SIN DESCARGAS
              </div>
              <h1 className="m-0 font-display text-[44px] leading-[0.95] font-extrabold uppercase text-text sm:text-[58px]">
                El juego de River,
                <br />
                hecho por hinchas
              </h1>
              <p className="mt-5 max-w-[520px] text-[18px] leading-relaxed text-text-2">
                Millo Manager es el juego de River Plate para jugar gratis y
                online. Coleccioná a los ídolos, armá tu XI de todas las épocas y
                jugá la liga. Todo desde el navegador, sin instalar nada.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/#waitlist"
                  className="inline-flex items-center gap-2 rounded-[13px] bg-river px-6 py-4 text-base font-bold text-white no-underline shadow-[0_10px_26px_rgba(225,50,42,0.35)] transition-colors hover:bg-river-bright"
                >
                  <ArrowRight size={19} /> Quiero el acceso anticipado
                </Link>
                <Link
                  href="/idolos"
                  className="inline-flex items-center gap-2 rounded-[13px] border border-border-strong px-6 py-4 text-base font-bold text-text no-underline transition-colors hover:bg-chip"
                >
                  Ver los ídolos
                </Link>
              </div>
            </div>
            <div className="mx-auto min-w-[300px] flex-none">
              <Pitch className="w-[340px]" />
            </div>
          </div>
        </section>

        {/* features */}
        <section className="mx-auto max-w-[1200px] px-8 py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-[18px] border border-border-soft bg-surface p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-[12px] bg-river/12 text-river">
                  <f.icon size={22} />
                </span>
                <h2 className="mt-4 font-display text-[22px] font-extrabold uppercase leading-tight text-text">
                  {f.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-text-2">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* simulación de partido */}
        <section className="mx-auto max-w-[1200px] px-8 py-10">
          <div className="flex flex-wrap items-center gap-14">
            <div className="min-w-[320px] flex-1">
              <div className="mb-3 font-mono text-[11px] tracking-[0.16em] text-river">
                ASÍ SE JUEGA
              </div>
              <h2 className="m-0 font-display text-[34px] leading-none font-extrabold uppercase text-text sm:text-[42px]">
                Viví cada partido
                <br />
                en vivo
              </h2>
              <p className="mt-4 max-w-[440px] text-[17px] leading-relaxed text-text-2">
                Preparás la formación y ves el partido minuto a minuto: goles,
                relato y resultado. Ganás monedas y experiencia para seguir
                armando el equipo más temido.
              </p>
              <Link
                href="/idolos"
                className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-river no-underline"
              >
                Conocé a los ídolos de River <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mx-auto flex-none">
              <MatchSim />
            </div>
          </div>
        </section>
      </main>

      <CtaBanner
        title="Jugá al juego de River"
        subtitle="Sumate a la lista de espera y sé de los primeros en jugar Millo Manager gratis."
      />
      <Footer home={false} />
    </>
  );
}
