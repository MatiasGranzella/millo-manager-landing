import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { Pitch } from "@/components/game/Pitch";
import { MatchSim } from "@/components/game/MatchSim";
import { absUrl, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Manager de River — el football manager de River Plate",
  description:
    "Poné el saco de DT de River. Millo Manager es el football manager de River Plate: armá tu XI de todas las épocas, definí formación y química, dirigí los partidos y llevá al club a lo más alto. Gratis y online.",
  alternates: { canonical: "/manager-de-river" },
  openGraph: {
    title: "Manager de River — football manager de River Plate | Millo Manager",
    description: "Dirigí a River: armá tu XI, jugá la liga y subí de división. Gratis, online.",
    url: absUrl("/manager-de-river"),
  },
};

const videoGameJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: absUrl("/manager-de-river"),
  applicationCategory: "Game",
  operatingSystem: "Web",
  gamePlatform: "Navegador web",
  inLanguage: "es-AR",
  genre: ["Football manager", "Deportes"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "ARS" },
};

const steps = [
  {
    n: "01",
    title: "Armá tu plantel",
    body: "Coleccioná cartas de ídolos de todas las épocas y sumalas a tu equipo. Mezclá La Máquina con la era Gallardo.",
  },
  {
    n: "02",
    title: "Definí tu XI",
    body: "Elegí formación (4-3-3, 4-4-2, 3-5-2…), titulares y química. Cada decisión mueve el rating del equipo.",
  },
  {
    n: "03",
    title: "Dirigí los partidos",
    body: "Jugá la liga contra la IA, viví el partido en vivo, ganá monedas y subí de división en el ranking.",
  },
];

export default function ManagerDeRiverPage() {
  return (
    <>
      <Nav home={false} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameJsonLd) }}
      />

      <main>
        <section className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-16 pb-6">
          <div className="flex flex-wrap items-center gap-14">
            <div className="min-w-[320px] flex-1">
              <div className="mb-3 font-mono text-[11px] tracking-[0.16em] text-river">
                FOOTBALL MANAGER DE RIVER PLATE
              </div>
              <h1 className="m-0 font-display text-[44px] leading-[0.95] font-extrabold uppercase text-text sm:text-[58px]">
                Poné el saco
                <br />
                de DT de River
              </h1>
              <p className="mt-5 max-w-[520px] text-[18px] leading-relaxed text-text-2">
                Millo Manager es el manager de River Plate: armá tu XI de todas
                las eras, definí formación y química, dirigí los partidos y llevá
                al club a lo más alto. Gratis, online y desde el navegador.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/#waitlist"
                  className="inline-flex items-center gap-2 rounded-[13px] bg-river px-6 py-4 text-base font-bold text-white no-underline shadow-[0_10px_26px_rgba(225,50,42,0.35)] transition-colors hover:bg-river-bright"
                >
                  <ArrowRight size={19} /> Quiero dirigir a River
                </Link>
                <Link
                  href="/juego-de-river-plate"
                  className="inline-flex items-center gap-2 rounded-[13px] border border-border-strong px-6 py-4 text-base font-bold text-text no-underline transition-colors hover:bg-chip"
                >
                  Sobre el juego
                </Link>
              </div>
            </div>
            <div className="mx-auto min-w-[300px] flex-none">
              <Pitch className="w-[340px]" />
            </div>
          </div>
        </section>

        {/* pasos */}
        <section className="mx-auto max-w-[1200px] px-5 sm:px-8 py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-[18px] border border-border-soft bg-surface p-6">
                <div className="font-display text-[38px] font-extrabold leading-none text-gold">
                  {s.n}
                </div>
                <h2 className="mt-3 font-display text-[22px] font-extrabold uppercase leading-tight text-text">
                  {s.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-text-2">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* partido en vivo */}
        <section className="mx-auto max-w-[1200px] px-5 sm:px-8 py-8">
          <div className="flex flex-wrap items-center gap-14">
            <div className="mx-auto flex-none">
              <MatchSim />
            </div>
            <div className="min-w-[320px] flex-1">
              <div className="mb-3 font-mono text-[11px] tracking-[0.16em] text-river">
                EL DÍA DEL PARTIDO
              </div>
              <h2 className="m-0 font-display text-[34px] leading-none font-extrabold uppercase text-text sm:text-[42px]">
                Tus decisiones,
                <br />
                en la cancha
              </h2>
              <p className="mt-4 max-w-[440px] text-[17px] leading-relaxed text-text-2">
                Armás el equipo y ves el resultado minuto a minuto. Cada ídolo
                que sumás y cada movida táctica se siente en el marcador.
              </p>
              <Link
                href="/idolos"
                className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-river no-underline"
              >
                Elegí a tus ídolos <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <CtaBanner
        title="Dirigí a River"
        subtitle="Creá tu cuenta gratis y poné el saco de DT en Millo Manager."
      />
      <Footer home={false} />
    </>
  );
}
