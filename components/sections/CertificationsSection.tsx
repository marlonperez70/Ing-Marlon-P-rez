"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
    {
        issuer: "Cisco",
        title: "Networking Essentials",
        category: "Redes",
        color: "var(--neon-cyan)",
        description: "Fundamentos de redes TCP/IP, protocolos y arquitecturas de red.",
        verified: true,
    },
    {
        issuer: "Cisco",
        title: "Cybersecurity Essentials",
        category: "Ciberseguridad",
        color: "var(--neon-cyan)",
        description: "Conceptos de ciberseguridad, amenazas, vulnerabilidades y defensas.",
        verified: true,
    },
    {
        issuer: "Google",
        title: "Fundamentos del Marketing Digital",
        category: "Digital",
        color: "var(--neon-amber)",
        description: "Estrategias digitales, análisis de datos y marketing en línea.",
        verified: true,
    },
    {
        issuer: "UNEMI",
        title: "Seguridad Informática Avanzada",
        category: "Ciberseguridad",
        color: "var(--neon-violet)",
        description: "Seguridad de sistemas, criptografía, IDS/IPS y políticas de seguridad.",
        verified: true,
    },
    {
        issuer: "UNEMI",
        title: "Auditoría de Sistemas TI",
        category: "Auditoría",
        color: "var(--neon-violet)",
        description: "Marcos de control COBIT, ISO 27001, evaluación de riesgos y cumplimiento.",
        verified: true,
    },
    {
        issuer: "UNEMI",
        title: "Inteligencia Artificial Aplicada",
        category: "IA",
        color: "var(--neon-green)",
        description: "Machine Learning, redes neuronales, visión computacional y NLP.",
        verified: true,
    },
];

export function CertificationsSection() {
    return (
        <section id="certifications" className="py-24 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="section-badge">
                        <Award className="w-3 h-3" />
                        Certificaciones
                    </span>
                    <h2 className="section-title">
                        Credenciales <span>Verificadas</span>
                    </h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <div className="glass-card rounded-2xl p-5 h-full flex flex-col group">
                                {/* Issuer + badge */}
                                <div className="flex items-center justify-between mb-3">
                                    <span
                                        className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg"
                                        style={{
                                            background: `${cert.color}14`,
                                            color: cert.color,
                                            border: `1px solid ${cert.color}28`,
                                        }}
                                    >
                                        {cert.issuer}
                                    </span>
                                    <span
                                        className="text-[10px] font-mono px-2 py-0.5 rounded-md"
                                        style={{ background: `${cert.color}0e`, color: cert.color }}
                                    >
                                        {cert.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-[var(--text-primary)] font-semibold text-sm mb-2 font-sans leading-snug">
                                    {cert.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[var(--text-muted)] text-xs leading-relaxed flex-1">
                                    {cert.description}
                                </p>

                                {/* Footer */}
                                <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--neon-green)]" />
                                    <span className="text-xs text-[var(--neon-green)] font-mono">Verificado</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
