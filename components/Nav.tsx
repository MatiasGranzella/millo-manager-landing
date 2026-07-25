import Image from "next/image";
import Link from "next/link";
import { Swords } from "lucide-react";

/**
 * Header del sitio. En la home (`home`) los links de sección son anclas locales
 * (#pilares…); en páginas interiores se prefijan con "/" para volver a la home.
 * Los links de Ídolos y Eras son rutas reales (SEO / interlinking).
 */
export function Nav({ home = true }: { home?: boolean }) {
  const p = home ? "" : "/";
  const sectionLinks = [
    { href: `${p}#pilares`, label: "Qué es" },
    { href: `${p}#cartas`, label: "Cartas" },
    { href: `${p}#como`, label: "Cómo se juega" },
    { href: `${p}#faq`, label: "Preguntas" },
  ];
  const routeLinks = [{ href: "/idolos", label: "Ídolos" }];

  return (
    <header className="sticky top-0 z-[60] border-b border-hairline bg-[var(--nav)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1200px] items-center gap-[30px] px-8 py-3.5">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <Image
            src="/brand/millo-logo-transparent.png"
            alt="Millo Manager"
            width={1024}
            height={1024}
            priority
            className="h-9 w-auto object-contain"
          />
          <span className="text-[21px] font-extrabold tracking-[-0.01em] text-text">
            Millo <span className="text-river">Manager</span>
          </span>
        </Link>

        <nav className="ml-2 hidden items-center gap-1.5 md:flex">
          {sectionLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-[9px] px-3 py-2 text-sm font-semibold text-text-2 no-underline transition-colors hover:bg-chip hover:text-text"
            >
              {l.label}
            </a>
          ))}
          {routeLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-[9px] px-3 py-2 text-sm font-semibold text-text-2 no-underline transition-colors hover:bg-chip hover:text-text"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href={`${p}#waitlist`}
            className="inline-flex cursor-pointer items-center gap-[7px] rounded-xl border-none bg-river px-5 py-3 text-sm font-bold text-white no-underline shadow-[0_6px_16px_rgba(225,50,42,0.32)] transition-colors hover:bg-river-bright"
          >
            <Swords size={17} />
            Sumate a la lista
          </a>
        </div>
      </div>
    </header>
  );
}
