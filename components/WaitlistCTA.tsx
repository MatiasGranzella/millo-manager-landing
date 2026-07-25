import Image from "next/image";
import { WaitlistForm } from "./WaitlistForm";

export function WaitlistCTA() {
  return (
    <section
      id="waitlist"
      className="mx-auto max-w-[1200px] px-4 pt-16 pb-10 sm:px-8 sm:pt-[84px]"
    >
      <div className="relative overflow-hidden rounded-[24px] border border-[rgba(230,185,78,0.2)] bg-[radial-gradient(120%_140%_at_85%_-20%,#2a2012_0%,#15140f_40%,#0E0F12_100%)] px-5 py-12 text-center text-white sm:rounded-[28px] sm:px-14 sm:py-16">
        <span className="absolute -top-[50px] right-[90px] h-[480px] w-10 skew-x-[-20deg] bg-river opacity-[0.16]" />
        <span className="absolute -top-[50px] right-10 h-[480px] w-[22px] skew-x-[-20deg] bg-river opacity-[0.1]" />
        <div className="relative">
          <Image
            src="/brand/millo-logo-blanco.png"
            alt="Millo Manager"
            width={800}
            height={800}
            className="mx-auto mb-[22px] h-[72px] w-auto object-contain sm:h-[88px]"
          />
          <h2 className="m-0 font-display text-[38px] leading-[0.94] font-extrabold uppercase sm:text-[60px] sm:leading-[0.92]">
            Sumate al juego.
            <br />
            <span className="text-river">Todo River, siempre.</span>
          </h2>
          <p className="mx-auto my-5 mb-7 max-w-[480px] text-[16px] leading-relaxed text-[#C9CED4] sm:mb-8 sm:text-lg">
            Tu historia, tu equipo, tu hinchada. Dejanos tu email y sé de los
            primeros en jugar Millo, gratis, desde el navegador.
          </p>
          <WaitlistForm />
          <p className="mx-auto mt-5 max-w-[440px] text-xs text-[#7C828D]">
            Sin spam. Solo te escribimos cuando el juego esté listo.
          </p>
        </div>
      </div>
    </section>
  );
}
