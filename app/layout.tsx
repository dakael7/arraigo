import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arraigo · Bienes Raíces en Caracas | Verificación Integral",
  description:
    "Inmuebles en Caracas con documentos, estructura y servicios verificados antes de publicar. Que nadie firme un papel que no entiende.",
  openGraph: {
    title: "Arraigo · Bienes Raíces en Caracas",
    description:
      "Inmuebles con documentos, estructura y servicios verificados antes de publicar en Caracas.",
    locale: "es_VE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F3EBDD] text-[#16201C]">
        {children}
      </body>
    </html>
  );
}
