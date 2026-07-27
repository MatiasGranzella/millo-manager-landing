import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { SITE_EMAIL, absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos de uso de Millo Manager: un proyecto de fans sin relación oficial con el Club Atlético River Plate, gratuito y en desarrollo activo.",
  alternates: { canonical: "/terminos" },
  openGraph: { url: absUrl("/terminos") },
};

export default function TerminosPage() {
  return (
    <LegalPage title="Términos y condiciones" updated="julio de 2026">
      <LegalSection heading="Qué es esto">
        <p>
          Millo Manager es un juego de fútbol tipo manager hecho por hinchas de
          River Plate. Al usar este sitio o el juego aceptás estos términos. Si
          no estás de acuerdo con alguno, no lo uses.
        </p>
      </LegalSection>

      <LegalSection heading="No somos River Plate">
        <p>
          <strong className="text-text">
            Este es un sitio no oficial de fans.
          </strong>{" "}
          No tenemos ninguna relación, afiliación, patrocinio ni aval del Club
          Atlético River Plate ni de ninguna liga, federación o entidad
          deportiva.
        </p>
        <p>
          Los nombres de clubes, competiciones, jugadores y cualquier otra marca
          que aparezca son propiedad de sus respectivos titulares, y se usan de
          manera descriptiva y referencial en un contexto no comercial. Si sos
          titular de un derecho y querés que retiremos algo, escribinos a{" "}
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="font-semibold text-river no-underline hover:underline"
          >
            {SITE_EMAIL}
          </a>{" "}
          y lo damos de baja.
        </p>
      </LegalSection>

      <LegalSection heading="Juego en desarrollo">
        <p>
          El juego está abierto: creás tu cuenta con email y contraseña o con tu
          cuenta de Google, y jugás gratis.
        </p>
        <p>
          Estamos desarrollando activamente. Las funciones, los datos de tu
          partida y las reglas del juego pueden cambiar, reiniciarse o
          desaparecer. Podemos suspender o discontinuar el servicio en cualquier
          momento.
        </p>
      </LegalSection>

      <LegalSection heading="Gratis, sin dinero real">
        <p>
          Se juega gratis y sin tarjeta. Las monedas, cartas, sobres y cualquier
          otro objeto del juego son parte de la ficción del juego:{" "}
          <strong className="text-text">no tienen valor monetario</strong>, no
          son de tu propiedad, no se pueden canjear por dinero y no las podés
          vender ni transferir fuera del juego.
        </p>
      </LegalSection>

      <LegalSection heading="Tu cuenta y tu conducta">
        <p>
          Sos responsable de lo que pase con tu cuenta y de mantener tu
          contraseña a resguardo. Te pedimos que no intentes vulnerar,
          sobrecargar ni hacer ingeniería inversa del servicio; que no uses bots,
          scripts o exploits para conseguir ventaja; y que no uses el juego para
          nada ilegal.
        </p>
        <p>
          Si hacés algo de eso, podemos suspender o eliminar tu cuenta sin aviso
          previo.
        </p>
      </LegalSection>

      <LegalSection heading="El servicio se ofrece “tal cual”">
        <p>
          Hacemos lo posible para que todo funcione, pero el servicio se presta
          en el estado en el que está, sin garantías de disponibilidad, ausencia
          de errores o conservación de tus datos de juego. En la medida en que lo
          permita la ley, no respondemos por daños indirectos derivados del uso
          del servicio.
        </p>
      </LegalSection>

      <LegalSection heading="Datos personales">
        <p>
          Cómo tratamos tu email está explicado en la{" "}
          <Link
            href="/privacidad"
            className="font-semibold text-river no-underline hover:underline"
          >
            política de privacidad
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Cambios y ley aplicable">
        <p>
          Podemos actualizar estos términos; la fecha de arriba indica la última
          versión. Se rigen por las leyes de la República Argentina, y cualquier
          controversia se somete a los tribunales ordinarios de la Ciudad
          Autónoma de Buenos Aires.
        </p>
        <p>
          Dudas o reclamos:{" "}
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="font-semibold text-river no-underline hover:underline"
          >
            {SITE_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
