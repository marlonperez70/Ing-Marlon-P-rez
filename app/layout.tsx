import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ing. Marlon Pérez | Cybersecurity & IT Audit",
  description: "Ingeniero en Tecnologías de la Información especializado en Ciberseguridad, Auditoría de TI e Inteligencia Artificial. 10 años de experiencia en gestión de información sensible.",
  keywords: ["Ciberseguridad", "IT Audit", "Seguridad Informática", "Ecuador", "Desarrollador", "IA"],
  authors: [{ name: "Ing Marlon Pérez" }],
  openGraph: {
    title: "Ing. Marlon Pérez | Cybersecurity Specialist",
    description: "Security-focused engineer with 10+ years in law enforcement. Specialized in IT audit, forensic computing, and AI implementation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${firaCode.variable} font-mono antialiased bg-[#0a0a0a] text-[#c0c0c0] scanlines`}
      >
        <div className="matrix-bg min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
