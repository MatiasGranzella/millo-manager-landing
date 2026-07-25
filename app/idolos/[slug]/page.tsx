import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { PlayerCard, MiniCard } from "@/components/game/PlayerCard";
import { Flag } from "@/components/game/Flag";
import {
  getAllIdols,
  getIdolBySlug,
  getRelatedIdols,
  cardStats,
  STAT_LONG,
  type Idol,
} from "@/lib/game/players";
import { getEraBySlug, eraYears } from "@/lib/game/eras";
import { roleLabel } from "@/lib/game/formations";
import { RARITY } from "@/lib/design/rarity";
import { absUrl } from "@/lib/site";

// Prerender de las 86 fichas en build.
export function generateStaticParams() {
  return getAllIdols().map((idol) => ({ slug: idol.slug }));
}

const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
function fmtBirth(d: string | null): string | null {
  const m = d ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(d) : null;
  return m ? `${Number(m[3])} ${MESES[Number(m[2]) - 1]} ${m[1]}` : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const idol = getIdolBySlug(slug);
  if (!idol) return {};

  const rarityLabel = RARITY[idol.card.rarity].label.toLowerCase();
  const desc = `Carta de ${idol.display_name} en Millo Manager: rating ${idol.card.rating}, rareza ${rarityLabel}, posición ${idol.card.card_position}. ${
    idol.river_appearances ? `${idol.river_appearances} partidos` : ""
  }${idol.river_goals ? ` y ${idol.river_goals} goles` : ""} en River. Estadísticas, palmarés e historia.`;

  return {
    title: `${idol.display_name} en River — carta, estadísticas e historia`,
    description: desc.replace(/\s+/g, " ").trim(),
    alternates: { canonical: `/idolos/${idol.slug}` },
    openGraph: {
      title: `${idol.display_name} — carta ${idol.card.rating} | Millo Manager`,
      description: desc.replace(/\s+/g, " ").trim(),
      url: absUrl(`/idolos/${idol.slug}`),
      images: idol.photoUrl ? [{ url: idol.photoUrl }] : undefined,
    },
  };
}

function BioCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[14px] border border-border-soft bg-surface p-3.5">
      <div className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
        {label}
      </div>
      <div className="font-display text-[20px] font-extrabold uppercase leading-none text-text">
        {children}
      </div>
    </div>
  );
}

function idolJsonLd(idol: Idol) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: idol.full_name,
    alternateName: idol.display_name,
    nationality: idol.nationality ?? undefined,
    birthDate: idol.birth_date ?? undefined,
    jobTitle: "Futbolista",
    affiliation: { "@type": "SportsTeam", name: "Club Atlético River Plate" },
    url: absUrl(`/idolos/${idol.slug}`),
    image: idol.photoUrl ? absUrl(idol.photoUrl) : undefined,
    description: idol.bio ?? undefined,
  };
}

function breadcrumbJsonLd(idol: Idol) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: absUrl("/") },
      { "@type": "ListItem", position: 2, name: "Ídolos", item: absUrl("/idolos") },
      { "@type": "ListItem", position: 3, name: idol.display_name, item: absUrl(`/idolos/${idol.slug}`) },
    ],
  };
}

export default async function IdoloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idol = getIdolBySlug(slug);
  if (!idol) notFound();

  const era = idol.era_slug ? getEraBySlug(idol.era_slug) : undefined;
  const stats = cardStats(idol.card);
  const birth = fmtBirth(idol.birth_date);
  const related = getRelatedIdols(idol);

  return (
    <>
      <Nav home={false} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(idolJsonLd(idol)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(idol)) }}
      />

      <main className="mx-auto max-w-[1100px] px-8 pt-10 pb-6">
        {/* breadcrumb */}
        <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-[13px] text-text-2">
          <Link href="/" className="no-underline hover:text-text">Inicio</Link>
          <span className="text-muted">/</span>
          <Link href="/idolos" className="no-underline hover:text-text">Ídolos</Link>
          <span className="text-muted">/</span>
          <span className="text-text">{idol.display_name}</span>
        </nav>

        <div className="flex flex-wrap items-start gap-12">
          {/* carta real */}
          <div className="mx-auto w-[300px] flex-none">
            <PlayerCard idol={idol} />
          </div>

          {/* detalle */}
          <div className="min-w-[320px] flex-1">
            <div className="mb-2 font-mono text-[11px] tracking-[0.16em] text-gold">
              ★ {RARITY[idol.card.rarity].label} · {roleLabel(idol.card.card_position)}
            </div>
            <h1 className="m-0 font-display text-[44px] leading-[0.92] font-extrabold uppercase text-text sm:text-[54px]">
              {idol.display_name}
            </h1>
            {idol.bio ? (
              <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-text-2">
                {idol.bio}
              </p>
            ) : null}

            {/* ficha bio */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {idol.nationality ? (
                <BioCard label="Nacionalidad">
                  <span className="inline-flex items-center gap-2">
                    <Flag nationality={idol.nationality} size={18} />
                    {idol.nationality}
                  </span>
                </BioCard>
              ) : null}
              {birth ? <BioCard label="Nacimiento">{birth}</BioCard> : null}
              {idol.debut_year ? <BioCard label="Debut en River">{idol.debut_year}</BioCard> : null}
              {idol.river_appearances != null ? (
                <BioCard label="Partidos">{idol.river_appearances}</BioCard>
              ) : null}
              {idol.river_goals != null ? (
                <BioCard label="Goles">{idol.river_goals}</BioCard>
              ) : null}
              {idol.total_titulos ? <BioCard label="Títulos">{idol.total_titulos}</BioCard> : null}
            </div>

            {/* atributos */}
            <div className="mt-8">
              <div className="mb-3 font-mono text-[11px] tracking-[0.14em] text-text-2">
                ATRIBUTOS DE LA CARTA
              </div>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {stats.map((s) => (
                  <div
                    key={s.key}
                    className="flex items-center justify-between rounded-[12px] border border-border-soft bg-surface px-3.5 py-2.5"
                  >
                    <span className="text-[13px] text-text-2">{STAT_LONG[s.key]}</span>
                    <span className="font-display text-[22px] font-extrabold leading-none text-text">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* palmarés */}
        {idol.palmares.length > 0 ? (
          <section className="mt-14">
            <h2 className="m-0 font-display text-[26px] font-extrabold uppercase text-text">
              Palmarés en River
            </h2>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {idol.palmares.map((p) => (
                <div
                  key={p.competencia}
                  className="flex items-center justify-between gap-3 rounded-[12px] border border-border-soft bg-surface px-4 py-3"
                >
                  <span className="text-[15px] font-semibold text-text">{p.competencia}</span>
                  <span className="flex-none font-mono text-[12px] text-gold">×{p.count}</span>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* era */}
        {era ? (
          <section className="mt-12">
            <Link
              href={`/eras/${era.slug}`}
              className="flex flex-wrap items-center justify-between gap-3 rounded-[16px] border border-border-soft bg-surface px-6 py-5 no-underline transition-colors hover:border-border-strong"
            >
              <div>
                <div className="font-mono text-[10px] tracking-[0.14em] text-gold">
                  ERA · {eraYears(era)}
                </div>
                <div className="mt-1 font-display text-[22px] font-extrabold uppercase text-text">
                  {era.title}
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-river">
                Ver la era <ArrowRight size={16} />
              </span>
            </Link>
          </section>
        ) : null}

        {/* relacionados */}
        {related.length > 0 ? (
          <section className="mt-14">
            <h2 className="m-0 font-display text-[26px] font-extrabold uppercase text-text">
              Otros ídolos
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/idolos/${r.slug}`} className="group no-underline">
                  <MiniCard idol={r} />
                  <div className="mt-1.5 text-center text-[12px] font-semibold text-text">
                    {r.display_name}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>

      <CtaBanner
        title={`Sumá a ${idol.display_name.split(" ").slice(-1)[0]} a tu XI`}
        subtitle="Coleccioná a los ídolos de River, armá tu formación y competí. Gratis, desde el navegador."
      />
      <Footer home={false} />
    </>
  );
}
