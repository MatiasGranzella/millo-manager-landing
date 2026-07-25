export function StatsStrip() {
  // 466 jugadores con carta en el catálogo completo del juego (repo millo)
  const stats = [
    { value: "+460", label: "cartas para coleccionar", accent: false },
    { value: "8", label: "competiciones", accent: false },
    { value: "Pronto", label: "acceso anticipado", accent: true },
  ];

  return (
    <div className="border-t border-b border-hairline bg-bg-soft">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-8 py-[22px]">
        <div className="font-mono text-[11px] tracking-[0.14em] text-muted">
          UNA CAPA DE JUEGO SOBRE 124 AÑOS DE HISTORIA
        </div>
        <div className="flex flex-wrap items-center gap-10">
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span
                className={`font-display text-[30px] leading-none font-extrabold ${
                  s.accent ? "text-river" : "text-text"
                }`}
              >
                {s.value}
              </span>
              <span className="text-[13px] text-text-2">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
