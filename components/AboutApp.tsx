import Link from "next/link";
import { Gamepad2, LogIn, ShieldCheck } from "lucide-react";

/**
 * Bloque "Qué es Millo Manager": explica en texto plano qué hace la aplicación,
 * quién la hace y cómo se entra.
 *
 * Existe por un motivo concreto: la verificación de la pantalla de
 * consentimiento de OAuth de Google rechazó el proyecto con "your home page
 * does not explain the purpose of your app". El revisor entra a la home y tiene
 * que poder responder, sin buscar, qué es la app, que se llama Millo Manager
 * —igual que el cliente OAuth—, qué datos pide el login con Google y dónde está
 * la política de privacidad. Si se reescribe esta sección, hay que conservar
 * esas cuatro cosas.
 *
 * A propósito no nombra la URL del juego: la landing no publica el subdominio.
 */
export function AboutApp() {
  const bullets = [
    {
      icon: Gamepad2,
      title: "Qué hace la aplicación",
      text: "Millo Manager es un juego de navegador donde dirigís a River Plate: coleccionás cartas de los ídolos del club, armás tu plantel y tu XI, definís la táctica y jugás la liga y las copas contra la IA. No hay descargas ni costo: se juega gratis desde el celular o la computadora.",
    },
    {
      icon: LogIn,
      title: "Cómo se entra",
      text: "Para jugar necesitás una cuenta: la creás con tu email y una contraseña, o entrás con tu cuenta de Google. Si elegís Google, la aplicación solo recibe tu nombre, tu dirección de email y tu foto de perfil, y los usa únicamente para crear e identificar tu cuenta de DT. No pedimos acceso a Gmail, Drive, contactos ni a ningún otro dato de tu cuenta.",
    },
    {
      icon: ShieldCheck,
      title: "Quiénes somos",
      text: "Millo Manager es un proyecto independiente hecho por hinchas. Es un juego no oficial de fans, sin relación ni respaldo del Club Atlético River Plate. No vendemos ni compartimos tus datos con terceros.",
    },
  ];

  return (
    <section
      id="que-es"
      className="mx-auto max-w-[1200px] px-5 pt-16 pb-2 sm:px-8 sm:pt-[84px]"
    >
      <div className="max-w-[720px]">
        <div className="mb-3.5 font-mono text-[10px] tracking-[0.16em] text-river sm:text-[11px]">
          ★ SOBRE LA APLICACIÓN
        </div>
        <h2 className="m-0 font-display text-[32px] leading-[1.02] font-extrabold uppercase text-text sm:text-[46px] sm:leading-none">
          Qué es Millo Manager
        </h2>
        <p className="mt-3.5 text-[15px] leading-relaxed text-text-2 sm:mt-[18px] sm:text-[17px]">
          Millo Manager es un juego web gratuito de fútbol manager dedicado a la
          historia del Club Atlético River Plate: se juega desde el navegador,
          sin descargas y sin costo. Esta página es el sitio oficial del
          proyecto.
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:mt-11 sm:gap-[18px] lg:grid-cols-3">
        {bullets.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="h-full rounded-[18px] border border-border-soft bg-surface p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:rounded-[20px] sm:p-6"
          >
            <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-[12px] bg-[rgba(225,50,42,0.12)] text-river sm:mb-[18px] sm:h-12 sm:w-12 sm:rounded-[14px]">
              <Icon size={22} />
            </span>
            <div className="font-display text-[19px] leading-none font-bold uppercase text-text sm:text-[23px]">
              {title}
            </div>
            <p className="mt-2 text-[14px] leading-[1.55] text-text-2 sm:mt-2.5 sm:text-[15px]">
              {text}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[13px] leading-relaxed text-muted">
        Cómo tratamos tus datos está detallado en nuestra{" "}
        <Link
          href="/privacidad"
          className="font-semibold text-text-2 no-underline hover:underline"
        >
          política de privacidad
        </Link>{" "}
        y en los{" "}
        <Link
          href="/terminos"
          className="font-semibold text-text-2 no-underline hover:underline"
        >
          términos de uso
        </Link>
        .
      </p>
    </section>
  );
}
