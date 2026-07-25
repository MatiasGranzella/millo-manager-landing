import Image from "next/image";
import { WaitlistForm } from "./WaitlistForm";

export function WaitlistCTA() {
  return (
    <section id="waitlist" className="mx-auto max-w-[1200px] px-8 pt-[84px] pb-10">
      <div className="relative overflow-hidden rounded-[28px] border border-[rgba(230,185,78,0.2)] bg-[radial-gradient(120%_140%_at_85%_-20%,#2a2012_0%,#15140f_40%,#0E0F12_100%)] px-8 py-16 text-center text-white sm:px-14">
        <span className="absolute -top-[50px] right-[90px] h-[480px] w-10 skew-x-[-20deg] bg-river opacity-[0.16]" />
        <span className="absolute -top-[50px] right-10 h-[480px] w-[22px] skew-x-[-20deg] bg-river opacity-[0.1]" />
        <div className="relative">
          <Image
            src="/brand/millo-logo-transparent.png"
            alt="Millo Manager"
            width={1024}
            height={1024}
            className="mx-auto mb-[22px] h-[80px] w-auto object-contain"
          />
          <h2 className="m-0 font-display text-[44px] leading-[0.92] font-extrabold uppercase sm:text-[60px]">
            Sumate al juego.
            <br />
            <span className="text-river">Todo River, siempre.</span>
          </h2>
          <p className="mx-auto my-5 mb-8 max-w-[480px] text-lg leading-relaxed text-[#C9CED4]">
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
