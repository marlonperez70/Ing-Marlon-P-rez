"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, Eye, Download, FileText, ExternalLink, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { PDFModal } from "@/components/ui/PDFModal";

const certifications = [
    {
        issuer: "Cisco Networking Academy",
        title: "Ciberseguridad y Redes",
        category: "Cybersecurity",
        color: "#00B4D8",
        file: "/docs/certifications/Certificado de Cisco ciberseguridad.pdf",
        description: "Validación de competencias en defensa de redes y protocolos de seguridad institucional.",
    },
    {
        issuer: "Google for Education",
        title: "Google Gemini para Educadores",
        category: "Artificial Intelligence",
        color: "#4285F4",
        file: "/docs/certifications/Certificación google gemini para educadores Marlon David Perez Almachi.pdf",
        description: "Implementación de modelos de lenguaje avanzados en entornos académicos y profesionales.",
    },
    {
        issuer: "Google Cloud",
        title: "Cloud Computing Professional",
        category: "Cloud",
        color: "#34A853",
        file: "/docs/certifications/Certificado de cloud computing Marlon Pérez.pdf",
        description: "Gestión de infraestructuras escalables y servicios en la nube de alto rendimiento.",
    },
    {
        issuer: "UNEMI (Hilando Ciencia)",
        title: "Reconocimiento a la Investigación",
        category: "Science",
        color: "#A855F7",
        file: "/docs/certifications/Concurso #HilandoCiencia2025 (1).pdf",
        description: "Primer lugar/Participación destacada en el concurso de divulgación científica #HilandoCiencia2025.",
    },
    {
        issuer: "Python Institute / UNEMI",
        title: "Python Medio-Avanzado",
        category: "Software Development",
        color: "#FFD43B",
        file: "/docs/certifications/Certificado Python medio avanzado Marlon Pérez.pdf",
        description: "Dominio de estructuras de datos complejas, automatización y scripting avanzado.",
    },
    {
        issuer: "UNEMI - Investigación",
        title: "Revisión Sistémica de Literatura",
        category: "Academic Research",
        color: "#EC4899",
        file: "/docs/certifications/Certificado Revision sistemica de la literatura Marlon Pérez Almachi.pdf",
        description: "Metodologías científicas para el análisis y síntesis de evidencia académica.",
    },
    {
        issuer: "UNEMI - Idiomas",
        title: "English Proficiency B1.2",
        category: "Languages",
        color: "#F59E0B",
        file: "/docs/certifications/B1.2 nivel 5 modulo de ingles Marlon Pérez ECALT-2025060872.pdf",
        description: "Competencia comunicativa intermedia-alta bajo el marco común europeo (ECALT).",
    },
    {
        issuer: "Google Professional",
        title: "Certificación de Competencias Google",
        category: "Digital Skills",
        color: "#EA4335",
        file: "/docs/certifications/Certificado de google.pdf",
        description: "Validación integral de herramientas digitales y productividad de alto nivel.",
    },
    {
        issuer: "UNEMI - Académico",
        title: "Estatus de Ingeniería (9no Nivel)",
        category: "Academic Status",
        color: "#00FF88",
        file: "/docs/certifications/Carnet 9no Nivel Marlon Pérez.pdf",
        description: "Validación oficial de estatus académico actual en la carrera de Ingeniería en TI.",
    },
];

export function CertificationsSection() {
    const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

    return (
        <section id="certifications" className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="section-badge" style={{ color: "#A855F7", borderColor: "rgba(168,85,247,0.3)", background: "rgba(168,85,247,0.1)" }}>
                        <Award className="w-3 h-3" />
                        Validación Académica
                    </span>
                    <h2 className="section-title">
                        Certificaciones <span>Profesionales</span>
                    </h2>
                    <div className="section-divider" />
                    <p className="text-[var(--text-secondary)] max-w-xl font-sans mt-4">
                        Credenciales oficiales que avalan mis competencias en Ciberseguridad, IA e Investigación Científica.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group"
                        >
                            <div className="glass-card rounded-[1.5rem] p-6 h-full flex flex-col border border-white/5 hover:border-[var(--neon-cyan)]/30 transition-all duration-500 bg-black/20 backdrop-blur-sm">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-5">
                                    <div 
                                        className="px-3 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest"
                                        style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
                                    >
                                        {cert.issuer}
                                    </div>
                                    <ShieldCheck className="w-4 h-4 text-[var(--neon-green)] opacity-50" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-white font-bold text-base mb-2 font-sans group-hover:text-[var(--neon-cyan)] transition-colors leading-tight">
                                        {cert.title}
                                    </h3>
                                    <p className="text-[var(--text-muted)] text-xs leading-relaxed font-sans line-clamp-2">
                                        {cert.description}
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
                                    <button
                                        onClick={() => setSelectedPdf({ url: cert.file, title: cert.title })}
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[var(--neon-cyan)]/5 border border-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] text-xs font-bold font-sans hover:bg-[var(--neon-cyan)]/10 transition-all"
                                    >
                                        <Eye className="w-3.5 h-3.5" />
                                        VISUALIZAR
                                    </button>
                                    <a
                                        href={cert.file}
                                        download
                                        className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-white hover:border-white/20 transition-all"
                                    >
                                        <Download className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Global PDF Viewer Modal */}
            <PDFModal 
                isOpen={!!selectedPdf} 
                onClose={() => setSelectedPdf(null)} 
                pdfUrl={selectedPdf?.url || ""} 
                title={selectedPdf?.title || ""} 
            />
        </section>
    );
}
