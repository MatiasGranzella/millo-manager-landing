import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { SITE_EMAIL, absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Qué datos recolecta Millo Manager, para qué se usan, qué recibimos si entrás con tu cuenta de Google y cómo pedir que los borremos.",
  alternates: { canonical: "/privacidad" },
  openGraph: { url: absUrl("/privacidad") },
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" updated="julio de 2026">
      <LegalSection heading="En una línea">
        <p>
          Millo Manager te pide lo mínimo para que tengas una cuenta y podamos
          guardar tu partida: tu email y, si entrás con Google, tu nombre y tu
          foto de perfil. No vendemos tus datos, no los compartimos con terceros
          para publicidad y no tenemos rastreadores publicitarios.
        </p>
      </LegalSection>

      <LegalSection heading="Qué datos recolectamos">
        <p>
          <strong className="text-text">Datos de tu cuenta.</strong> Si te
          registrás con email y contraseña, guardamos tu dirección de email (la
          contraseña la administra nuestro proveedor de autenticación en forma
          cifrada; nosotros no la vemos). Si entrás con tu cuenta de Google,
          recibimos de Google tu nombre, tu dirección de email y tu foto de
          perfil.
        </p>
        <p>
          <strong className="text-text">Datos de tu partida.</strong> Lo que
          generás jugando: tu nombre de DT, tu plantel, tus formaciones, los
          resultados de tus partidos, tus monedas y tu progreso. Sirven para que
          tu partida siga donde la dejaste.
        </p>
        <p>
          <strong className="text-text">Tu email en la lista de novedades</strong>
          , y solo si lo escribís vos en el formulario del sitio.
        </p>
        <p>
          No pedimos teléfono, fecha de nacimiento ni datos de pago. No hay
          compras ni suscripciones: el juego es gratis.
        </p>
        <p>
          Usamos Vercel Web Analytics para medir visitas de forma agregada y
          anónima: no instala cookies ni arma un perfil tuyo entre sitios. No
          usamos Google Analytics, píxeles de redes sociales ni redes
          publicitarias. Nuestros proveedores de hosting generan además los
          registros técnicos habituales —dirección IP, tipo de navegador, hora
          del pedido— para que el servicio funcione y para prevenir abusos.
        </p>
      </LegalSection>

      <LegalSection heading="Para qué lo usamos">
        <p>
          Para crear e identificar tu cuenta, guardar y mostrar tu progreso en el
          juego, responderte si nos escribís y avisarte novedades si te anotaste
          para eso. Nada más. No hacemos perfilado publicitario ni decisiones
          automatizadas con tus datos.
        </p>
      </LegalSection>

      <LegalSection heading="Si entrás con tu cuenta de Google">
        <p>
          El acceso con Google es opcional: podés usar el juego con email y
          contraseña. Si lo elegís, Millo Manager pide únicamente los permisos
          básicos de identificación (<em>openid</em>, <em>email</em> y{" "}
          <em>profile</em>), que nos devuelven tu nombre, tu dirección de email y
          tu foto de perfil.
        </p>
        <p>
          Usamos esos datos con un solo fin: crear tu cuenta, reconocerte cuando
          volvés y mostrar tu nombre y tu foto dentro del juego.{" "}
          <strong className="text-text">
            No accedemos a Gmail, Drive, Calendar, contactos ni a ningún otro
            dato de tu cuenta de Google
          </strong>
          , no los transferimos a terceros, no los usamos para publicidad ni para
          entrenar modelos de inteligencia artificial, y ninguna persona los lee
          salvo que sea imprescindible para resolver un problema técnico que nos
          reportes, por seguridad o por obligación legal.
        </p>
        <p>
          Podés cortar el acceso cuando quieras desde{" "}
          <a
            href="https://myaccount.google.com/permissions"
            className="font-semibold text-river no-underline hover:underline"
          >
            los permisos de tu cuenta de Google
          </a>
          . Si además querés que borremos tu cuenta del juego, escribinos.
        </p>
      </LegalSection>

      <LegalSection heading="Dónde se guarda">
        <p>
          Tu cuenta, tu partida y tu email se guardan en la base de datos del
          juego, alojada en Supabase (infraestructura sobre Amazon Web Services),
          que también maneja la autenticación. El sitio y el juego están
          publicados en Vercel. Ambos son proveedores que pueden almacenar los
          datos fuera de la Argentina, y actúan solo por cuenta nuestra: no usan
          tus datos para fines propios.
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
          Los datos de tu cuenta y de tu partida, mientras la cuenta exista. Si
          nos pedís que la borremos, la eliminamos junto con tu progreso dentro
          de los 30 días. El email de la lista de novedades, hasta que nos pidas
          la baja. Si el proyecto se discontinúa, borramos todo.
        </p>
      </LegalSection>

      <LegalSection heading="Tus derechos">
        <p>
          Podés pedirnos en cualquier momento que te digamos qué tenemos tuyo,
          que lo corrijamos, que te lo entreguemos o que lo borremos —incluida tu
          cuenta completa. Escribinos a{" "}
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="font-semibold text-river no-underline hover:underline"
          >
            {SITE_EMAIL}
          </a>{" "}
          desde la misma dirección con la que te registraste y lo resolvemos.
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
          el cambio es importante —por ejemplo, si empezamos a recolectar datos
          nuevos o a pedir permisos adicionales de tu cuenta de Google— te
          avisamos por mail antes de aplicarlo.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
