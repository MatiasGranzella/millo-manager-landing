import Image from "next/image";

const links = [
  { href: "#pilares", label: "Qué es" },
  { href: "#cartas", label: "Cartas" },
  { href: "#como", label: "Cómo se juega" },
  { href: "#waitlist", label: "Lista de espera" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-bg-soft">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-8 py-10">
        <div className="flex items-center gap-[11px]">
          <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[10px] bg-gradient-to-br from-river to-[#7E1413]">
            <Image
              src="/assets/millo-mark-white.svg"
              alt="Millo"
              width={17}
              height={17}
              className="h-[17px] w-[17px] object-contain"
            />
          </span>
          <div>
            <div className="text-lg leading-none font-extrabold text-text">
              millo
            </div>
            <div className="mt-[3px] font-mono text-[10px] tracking-[0.12em] text-muted">
              TODO RIVER, SIEMPRE
            </div>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-[22px]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-text-2 no-underline transition-colors hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="text-xs text-muted">
          Hecho por hinchas, para hinchas · © 2026 Millo · Sitio no oficial de
          fans
        </div>
      </div>
    </footer>
  );
}
