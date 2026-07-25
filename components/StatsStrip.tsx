export function StatsStrip() {
  // 466 jugadores con carta en el catálogo completo del juego (repo millo)
  const stats = [
    { value: "+460", label: "cartas para coleccionar", accent: false },
    { value: "8", label: "competiciones", accent: false },
    { value: "Pronto", label: "acceso anticipado", accent: true },
  ];

  return (
    <div className="border-t border-b border-hairline bg-bg-soft">
      <div className="mx-auto max-w-[1200px] px-5 py-6 sm:px-8 md:flex md:items-center md:justify-between md:gap-6 md:py-[22px]">
        <div className="text-center font-mono text-[10px] tracking-[0.14em] text-muted md:text-left md:text-[11px]">
          UNA CAPA DE JUEGO SOBRE 124 AÑOS DE HISTORIA
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 md:mt-0 md:flex md:items-center md:gap-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center md:flex md:items-baseline md:gap-2 md:text-left"
            >
              <span
                className={`block font-display text-[26px] leading-none font-extrabold sm:text-[30px] ${
                  s.accent ? "text-river" : "text-text"
                }`}
              >
                {s.value}
              </span>
              <span className="mt-1 block text-[11px] leading-tight text-text-2 md:mt-0 md:text-[13px]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
