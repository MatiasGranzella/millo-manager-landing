import Image from "next/image";

const tiers = [
  {
    label: "LEYENDA · ORO",
    className:
      "bg-gradient-to-br from-[#F2D17A] via-gold to-[#B8882E] text-[#26200E]",
  },
  {
    label: "ÍDOLO · PLATA",
    className:
      "bg-gradient-to-br from-[#EBEEF1] via-[#C9CED4] to-[#8E949C] text-[#1c1e23]",
  },
  {
    label: "PLANTEL · BRONCE",
    className:
      "bg-gradient-to-br from-[#E0A877] via-[#C8824B] to-[#8F5A2E] text-[#2a1b0e]",
  },
];

const stats = [
  { value: "+400", label: "cartas", gold: true },
  { value: "6", label: "atributos por jugador", gold: false },
  { value: "3", label: "rarezas", gold: false },
];

export function Cards() {
  return (
    <section
      id="cartas"
      className="relative mt-[84px] overflow-hidden bg-[radial-gradient(120%_120%_at_75%_-10%,#2a2012_0%,#15140f_42%,#0E0F12_100%)] text-white"
    >
      <span className="absolute -top-10 right-[120px] h-[560px] w-9 skew-x-[-20deg] bg-river opacity-[0.13]" />
      <span className="absolute -top-10 right-[70px] h-[560px] w-5 skew-x-[-20deg] bg-river opacity-[0.09]" />
      <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-16 px-8 py-20">
        <div className="relative mx-auto flex-none">
          <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(230,185,78,0.22),transparent_70%)] blur-[10px]" />
          <Image
            src="/assets/shot-card.svg"
            alt="Carta de leyenda de River"
            width={300}
            height={420}
            className="animate-float relative block w-[300px] rounded-[22px] shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
          />
        </div>

        <div className="min-w-[320px] flex-1">
          <div className="mb-3.5 font-mono text-[11px] tracking-[0.16em] text-gold">
            ★ ULTIMATE TEAM
          </div>
          <h2 className="m-0 font-display text-[40px] leading-[0.96] font-extrabold uppercase sm:text-[48px]">
            Coleccioná a las
            <br />
            leyendas de River
          </h2>
          <p className="my-[18px] mb-[26px] max-w-[460px] text-[17px] leading-relaxed text-[#C9CED4]">
            De Francescoli a Quintero. Cada ídolo es una carta con sus atributos
            reales. Ganá matches, desbloqueá cartas y armá la formación más
            temida de la comunidad.
          </p>
          <div className="mb-7 flex flex-wrap gap-2.5">
            {tiers.map((t) => (
              <span
                key={t.label}
                className={`inline-flex items-center gap-2 rounded-full px-[13px] py-2 font-mono text-[11px] font-medium tracking-[0.08em] ${t.className}`}
              >
                {t.label}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-3 justify-start gap-7" style={{ gridTemplateColumns: "repeat(3,auto)" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className={`font-display text-[38px] leading-none font-extrabold ${
                    s.gold ? "text-gold" : "text-white"
                  }`}
                >
                  {s.value}
                </div>
                <div className="mt-0.5 text-[13px] text-[#9AA0A8]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
