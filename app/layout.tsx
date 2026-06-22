import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://www.millomanager.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Millo Manager — Todo River, siempre",
  description:
    "El football manager exclusivo de River. Revisá la historia, armá tu mejor XI de todas las eras y competí contra la comunidad. Sumate a la lista de espera.",
  keywords: [
    "River Plate",
    "Millo Manager",
    "football manager",
    "juego River",
    "ultimate team River",
    "cartas River",
  ],
  authors: [{ name: "Millo Manager" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Millo Manager",
    title: "Millo Manager — Todo River, siempre",
    description:
      "El football manager exclusivo de River. Armá tu mejor XI de todas las eras y competí contra la comunidad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Millo Manager — Todo River, siempre",
    description:
      "El football manager exclusivo de River. Armá tu mejor XI de todas las eras y competí contra la comunidad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${barlow.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="theme-transition min-h-screen">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
