import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuban Party - La Fiesta Más Caliente de Montevideo | Próximamente",
  description:
    "La experiencia auténtica de música cubana llega a Montevideo. Salsa, Reggaeton, Timba y Reparto. Eventos exclusivos con música en vivo. ¡Muy pronto!",
  keywords: [
    "Cuban Party",
    "Montevideo",
    "Uruguay",
    "Salsa",
    "Reggaeton",
    "Timba",
    "Reparto",
    "música cubana",
    "fiesta",
    "eventos",
    "baile",
  ],
  authors: [{ name: "Cuban Party" }],
  creator: "Cuban Party",
  publisher: "Cuban Party",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  metadataBase: new URL("https://cubanparty.uy"),
  alternates: {
    canonical: "/",
    languages: {
      "es-UY": "/",
      es: "/",
    },
  },
  openGraph: {
    title: "Cuban Party - La Fiesta Más Caliente de Montevideo",
    description:
      "La experiencia auténtica de música cubana llega a Montevideo. Salsa, Reggaeton, Timba y Reparto. ¡Muy pronto!",
    url: "https://cubanparty.uy",
    siteName: "Cuban Party",
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Cuban Party - Música Cubana en Montevideo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuban Party - La Fiesta Más Caliente de Montevideo",
    description:
      "La experiencia auténtica de música cubana llega a Montevideo. ¡Muy pronto!",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-UY">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
