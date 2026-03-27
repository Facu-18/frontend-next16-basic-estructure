import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Grotesk } from "next/font/google";

import "./globals.css";

const sans = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pulqui | Industria Cultural",
  description:
    "Frontend mock para Pulqui, con landing publica y sistema interno de gestion listo para futura integracion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-neutral-950 font-sans text-orange-50 antialiased">{children}</body>
    </html>
  );
}
