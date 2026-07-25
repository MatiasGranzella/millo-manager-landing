import Image from "next/image";
import Link from "next/link";

/**
 * Footer del sitio. Igual que el Nav, alterna anclas locales/absolutas según
 * `home`, y suma links a las secciones de Ídolos y Eras (interlinking SEO).
 */
export function Footer({ home = true }: { home?: boolean }) {
  const p = home ? "" : "/";
  const links = [
    { href: "/idolos", label: "Ídolos", route: true },
    { href: `${p}#cartas`, label: "Cartas", route: false },
    { href: `${p}#faq`, label: "Preguntas", route: false },
    { href: `${p}#waitlist`, label: "Lista de espera", route: false },
  ];

  return (
    <footer className="border-t border-hairline bg-bg-soft">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 px-5 py-10 text-center sm:px-8 md:flex-row md:flex-wrap md:justify-between md:gap-6 md:text-left">
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
        <div className="text-xs text-muted">
          Hecho por hinchas, para hinchas · © 2026 Millo · Sitio no oficial de
          fans
        </div>
      </div>
    </footer>
  );
}
