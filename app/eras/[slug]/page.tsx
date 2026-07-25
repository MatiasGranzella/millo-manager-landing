import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { MiniCard } from "@/components/game/PlayerCard";
import { getAllEras, getEraBySlug, eraYears, type Era } from "@/lib/game/eras";
import { getIdolsByEra } from "@/lib/game/players";
import { absUrl } from "@/lib/site";

export function generateStaticParams() {
  return getAllEras().map((era) => ({ slug: era.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const era = getEraBySlug(slug);
  if (!era) return {};
  return {
    title: `${era.title} (${eraYears(era)}) — ídolos de River`,
    description: `${era.summary} Conocé a los ídolos de esta era de River Plate y sus cartas en Millo Manager.`,
    alternates: { canonical: `/eras/${era.slug}` },
    openGraph: {
      title: `${era.title} | Millo Manager`,
      description: era.summary,
      url: absUrl(`/eras/${era.slug}`),
    },
  };
}

function breadcrumbJsonLd(era: Era) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: absUrl("/") },
      { "@type": "ListItem", position: 2, name: "Eras", item: absUrl("/eras") },
      { "@type": "ListItem", position: 3, name: era.title, item: absUrl(`/eras/${era.slug}`) },
    ],
  };
}

export default async function EraPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const era = getEraBySlug(slug);
  if (!era) notFound();

  const idols = getIdolsByEra(era.slug);

  return (
    <>
      <Nav home={false} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(era)) }}
      />
      <main className="mx-auto max-w-[1100px] px-8 pt-10 pb-6">
        <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-[13px] text-text-2">
          <Link href="/" className="no-underline hover:text-text">Inicio</Link>
          <span className="text-muted">/</span>
          <Link href="/eras" className="no-underline hover:text-text">Eras</Link>
          <span className="text-muted">/</span>
          <span className="text-text">{era.title}</span>
        </nav>

        <div className="mb-2 font-mono text-[11px] tracking-[0.16em] text-gold">
          ERA · {eraYears(era)}
        </div>
        <h1 className="m-0 max-w-[820px] font-display text-[38px] leading-[0.98] font-extrabold uppercase text-text sm:text-[50px]">
          {era.title}
        </h1>
        <p className="mt-4 max-w-[680px] text-[17px] leading-relaxed text-text-2">
          {era.summary}
        </p>

        {idols.length > 0 ? (
          <section className="mt-10">
            <h2 className="m-0 font-display text-[24px] font-extrabold uppercase text-text">
              Ídolos de esta era
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {idols.map((idol) => (
                <Link key={idol.slug} href={`/idolos/${idol.slug}`} className="group no-underline">
                  <MiniCard idol={idol} />
                  <div className="mt-2 text-center text-[13px] font-semibold text-text">
                    {idol.display_name}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <p className="mt-8 text-[15px] text-text-2">
            Pronto vas a poder ver las cartas de los ídolos de esta era.
          </p>
        )}
      </main>
      <CtaBanner />
      <Footer home={false} />
    </>
  );
}
