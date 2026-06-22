import Image from "next/image";
import Link from "next/link";
import { Swords } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#pilares", label: "Qué es" },
  { href: "#cartas", label: "Cartas" },
  { href: "#como", label: "Cómo se juega" },
  { href: "#web", label: "La web" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-[60] border-b border-hairline bg-[var(--nav)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1200px] items-center gap-[30px] px-8 py-3.5">
        <Link href="#top" className="flex items-center gap-2.5 no-underline">
          <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[10px] bg-gradient-to-br from-river to-[#7E1413] shadow-[0_4px_12px_rgba(225,50,42,0.35)]">
            <Image
              src="/assets/millo-mark-white.svg"
              alt="Millo"
              width={17}
              height={17}
              className="h-[17px] w-[17px] object-contain"
            />
          </span>
          <span className="text-[21px] font-extrabold tracking-[-0.01em] text-text">
            millo
          </span>
        </Link>

        <nav className="ml-2 hidden items-center gap-1.5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-[9px] px-3 py-2 text-sm font-semibold text-text-2 no-underline transition-colors hover:bg-chip hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#waitlist"
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
