import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { SITE_EMAIL, absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Qué datos recolecta Millo Manager, para qué se usan y cómo pedir que los borremos. Hoy solo pedimos un email para la lista de espera.",
  alternates: { canonical: "/privacidad" },
  openGraph: { url: absUrl("/privacidad") },
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" updated="julio de 2026">
      <LegalSection heading="En una línea">
        <p>
          Lo único que te pedimos es un email, y lo usamos solo para avisarte
          cuando puedas entrar a jugar. No lo vendemos, no lo compartimos con
          terceros para publicidad y no tenemos rastreadores en el sitio.
        </p>
      </LegalSection>

      <LegalSection heading="Qué datos recolectamos">
        <p>
          <strong className="text-text">Tu dirección de email</strong>, y solo
          si la escribís vos en el formulario de la lista de espera. No pedimos
          nombre, teléfono, fecha de nacimiento ni datos de pago. No hay compras
          en este sitio.
        </p>
        <p>
          No usamos herramientas de analítica ni de publicidad de terceros
          (Google Analytics, píxeles de redes sociales o similares), y no
          instalamos cookies de seguimiento. Nuestro proveedor de hosting genera
          registros técnicos habituales —dirección IP, tipo de navegador, hora
          del pedido— para que el sitio funcione y para prevenir abusos.
        </p>
      </LegalSection>

      <LegalSection heading="Para qué lo usamos">
        <p>
          Para un solo fin: escribirte cuando Millo Manager abra el acceso, y
          eventualmente para mandarte novedades puntuales del lanzamiento. Nada
          más. No hacemos perfilado ni decisiones automatizadas con tus datos.
        </p>
      </LegalSection>

      <LegalSection heading="Dónde se guarda">
        <p>
          Tu email se guarda en la base de datos del juego, alojada en Supabase
          (infraestructura sobre Amazon Web Services). El sitio está publicado en
          Vercel. Ambos son proveedores que pueden almacenar los datos fuera de
          la Argentina.
        </p>
        <p>
          Cuando te anotás, el formulario simplemente da de alta el email en esa
          lista. La respuesta es siempre la misma estés o no anotado de antes:
          así, nadie puede usar el formulario para averiguar si una dirección ya
          figura en la lista.
        </p>
      </LegalSection>

      <LegalSection heading="Cuánto tiempo lo guardamos">
        <p>
          Hasta que el juego abra y te avisemos, o hasta que nos pidas que lo
          borremos —lo que pase primero. Si el proyecto se discontinúa, borramos
          la lista.
        </p>
      </LegalSection>

      <LegalSection heading="Tus derechos">
        <p>
          Podés pedirnos en cualquier momento que te digamos qué tenemos tuyo,
          que lo corrijamos o que lo borremos. Escribinos a{" "}
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="font-semibold text-river no-underline hover:underline"
          >
            {SITE_EMAIL}
          </a>{" "}
          desde la misma dirección que anotaste y lo resolvemos.
        </p>
        <p>
          En Argentina, la Agencia de Acceso a la Información Pública es el
          órgano de control de la Ley 25.326 de Protección de los Datos
          Personales y atiende las denuncias por incumplimiento.
        </p>
      </LegalSection>

      <LegalSection heading="Menores de edad">
        <p>
          El sitio no está dirigido a menores de 13 años y no les pedimos datos a
          sabiendas. Si detectamos que anotamos el email de un menor de esa edad
          sin autorización de sus padres o tutores, lo borramos.
        </p>
      </LegalSection>

      <LegalSection heading="Cambios">
        <p>
          Si cambiamos algo de esta política, actualizamos la fecha de arriba. Si
          el cambio es importante —por ejemplo, si empezamos a recolectar algo
          más que el email— te avisamos por mail antes de aplicarlo.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
