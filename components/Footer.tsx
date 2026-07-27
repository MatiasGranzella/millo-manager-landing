import Image from "next/image";
import Link from "next/link";
import { APP_URL } from "@/lib/site";

/**
 * Footer del sitio. Igual que el Nav, alterna anclas locales/absolutas según
 * `home`, y suma links a las secciones de Ídolos y Eras (interlinking SEO).
 * La fila de abajo es la legal (privacidad, términos, aclaración de fan site).
 *
 * Acá viven los únicos links internos a las landings de SEO
 * (/cartas-de-river, /manager-de-river, /juego-de-river-plate): estaban en el
 * sitemap pero ninguna página del sitio apuntaba a ellas.
 */
export function Footer({ home = true }: { home?: boolean }) {
  const p = home ? "" : "/";
  const links = [
    // Externo al juego en sí: `route: false` lo saca del <Link> de Next, que es
    // para navegación interna.
    { href: APP_URL, label: "Jugar", route: false },
    { href: `${p}#que-es`, label: "Qué es", route: false },
    { href: "/idolos", label: "Ídolos", route: true },
    { href: "/eras", label: "Eras", route: true },
    { href: "/cartas-de-river", label: "Cartas", route: true },
    { href: "/manager-de-river", label: "Manager", route: true },
    { href: "/juego-de-river-plate", label: "El juego", route: true },
    { href: `${p}#faq`, label: "Preguntas", route: false },
    { href: `${p}#waitlist`, label: "Novedades", route: false },
  ];

  const legalLinks = [
    { href: "/privacidad", label: "Privacidad" },
    { href: "/terminos", label: "Términos" },
  ];

  return (
    <footer className="border-t border-hairline bg-bg-soft">
      <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:flex-wrap md:justify-between md:gap-6 md:text-left">
          <Link href="/" className="flex items-center gap-[11px] no-underline">
            <Image
              src="/brand/millo-logo-transparent.png"
              alt="Millo Manager"
              width={1024}
              height={1024}
              className="h-11 w-auto object-contain"
            />
            <div className="text-lg leading-none font-extrabold text-text">
              Millo <span className="text-river">Manager</span>
            </div>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-x-[22px] gap-y-2">
            {links.map((l) =>
              l.route ? (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-semibold text-text-2 no-underline transition-colors hover:text-text"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-semibold text-text-2 no-underline transition-colors hover:text-text"
                >
                  {l.label}
                </a>
              ),
            )}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-hairline pt-5 text-center md:flex-row md:justify-between md:gap-6 md:text-left">
          <div className="text-xs text-muted">
            Hecho por hinchas, para hinchas · © 2026 Millo · Sitio no oficial de
            fans, sin relación con el Club Atlético River Plate
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-muted no-underline transition-colors hover:text-text"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
