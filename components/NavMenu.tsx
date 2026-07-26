"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Menú de navegación para pantallas chicas (< xl). Abajo de ese ancho los links
 * del header no entran —se partían en dos líneas y truncaban el logo—, así que
 * arriba se ocultan y se muestran acá dentro de un panel desplegable.
 *
 * Recibe los mismos links que el Nav para no duplicar la fuente de verdad.
 */
export function NavMenu({
  sectionLinks,
  routeLinks,
}: {
  sectionLinks: { href: string; label: string }[];
  routeLinks: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  // Cerrar con Escape: el panel tapa parte de la página y con teclado no hay
  // otra salida obvia.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const itemClass =
    "rounded-[10px] px-3 py-2.5 text-[15px] font-semibold text-text-2 no-underline transition-colors hover:bg-chip hover:text-text";

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="millo-nav-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="inline-flex size-10 cursor-pointer items-center justify-center rounded-xl border border-hairline bg-transparent text-text transition-colors hover:bg-chip"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open ? (
        <div
          id="millo-nav-menu"
          // Fondo opaco, no `--nav`: esa variable es translúcida para el blur
          // del header y acá dejaba pasar el hero por atrás de los links.
          className="absolute inset-x-0 top-full border-b border-hairline bg-bg shadow-[0_18px_40px_rgba(0,0,0,.10)]"
        >
          <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-3 sm:px-8">
            {sectionLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={itemClass}
              >
                {l.label}
              </a>
            ))}
            {routeLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={itemClass}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
