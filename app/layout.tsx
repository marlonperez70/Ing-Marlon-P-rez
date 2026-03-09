import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ing. Marlon Pérez | Cybersecurity & IT Audit Specialist",
  description:
    "Ingeniero en TI especializado en Ciberseguridad, Auditoría IT e Inteligencia Artificial. 10 años de experiencia en Policía Judicial del Ecuador. Investigador científico en IA y sistemas de detección.",
  keywords: [
    "Ciberseguridad", "IT Audit", "Seguridad Informática", "Ecuador", "IA", "Machine Learning",
    "COBIT", "ISO 27001", "Auditoría TI", "Computación Forense", "UNEMI",
  ],
  authors: [{ name: "Ing. Marlon David Pérez Almachi" }],
  openGraph: {
    title: "Ing. Marlon Pérez | Cybersecurity & AI Researcher",
    description: "Security-focused engineer · IT Auditor · AI Researcher · 10+ years in law enforcement",
    type: "website",
    locale: "es_EC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ing. Marlon Pérez | Cybersecurity Specialist",
    description: "Ingeniero TI · Ciberseguridad · Auditoría IT · Investigador IA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
