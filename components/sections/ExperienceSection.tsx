"use client";

import { motion } from "framer-motion";
import { Briefcase, Shield, GraduationCap, Calendar } from "lucide-react";

const experiences = [
    {
        period: "2014 – 2024",
        title: "Analista de Seguridad de la Información",
        company: "Sector Público — Gestión de Seguridad Crítica",
        type: "Gobierno",
        icon: Shield,
        color: "var(--neon-cyan)",
        description:
            "10 años liderando la gestión de información clasificada y procesos de análisis forense digital. Especialista en el resguardo de infraestructuras críticas y cumplimiento de protocolos de seguridad de alto nivel.",
        achievements: [
            "Resguardo y custodia de activos de información sensible",
            "Implementación de controles de seguridad en infraestructuras críticas",
            "Análisis forense digital y respuesta ante incidentes",
            "Auditoría técnica de sistemas y redes institucionales",
            "Coordinación de procesos de inteligencia de datos",
        ],
        badge: "10 años",
    },
    {
        period: "2022 – Presente",
        title: "Estudiante de Ingeniería en TI",
        company: "UNEMI — Universidad Estatal de Milagro",
        type: "Académico",
        icon: GraduationCap,
        color: "var(--neon-violet)",
        description:
            "9no nivel de Ingeniería en Tecnologías de la Información con especialización en ciberseguridad, IA y auditoría de sistemas. Promedio académico destacado: 86.08/100.",
        achievements: [
            "Seguridad de la Información: 100/100",
            "Auditoría de Sistemas IT: 100/100",
            "Inteligencia Artificial Aplicada: 96/100",
            "Computación Móvil: 96/100",
            "Investigación científica activa en IA y ciberseguridad",
        ],
        badge: "86.08/100",
    },
    {
        period: "2024 – Presente",
        title: "Desarrollador & Consultor IT",
        company: "Freelance — Proyectos independientes",
        type: "Freelance",
        icon: Briefcase,
        color: "var(--neon-green)",
        description:
            "Desarrollo de soluciones web full-stack, consultoría en ciberseguridad y auditoría de sistemas para clientes del sector privado.",
        achievements: [
            "Desarrollo de aplicaciones web con Next.js y Supabase",
            "Auditorías de seguridad para PyMEs",
            "Implementación de políticas ISO 27001",
            "Consultoría en cumplimiento normativo",
        ],
        badge: "Activo",
    },
];

export function ExperienceSection() {
    return (
        <section id="experience" className="py-24 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="section-badge">
                        <Briefcase className="w-3 h-3" />
                        Trayectoria
                    </span>
                    <h2 className="section-title">
                        Experiencia <span>Profesional</span>
                    </h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.6 }}
                        >
                            <div className="glass-card rounded-2xl p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-start gap-5">
                                    {/* Icon */}
                                    <div
                                        className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: `${exp.color}14`, border: `1px solid ${exp.color}30` }}
                                    >
                                        <exp.icon className="w-5 h-5" style={{ color: exp.color }} />
                                    </div>

                                    <div className="flex-1">
                                        {/* Header */}
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                            <div>
                                                <h3 className="text-[var(--text-primary)] font-bold text-lg font-sans mb-0.5">
                                                    {exp.title}
                                                </h3>
                                                <p style={{ color: exp.color }} className="text-sm font-medium font-mono">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <span
                                                    className="badge text-xs px-2.5 py-1"
                                                    style={{
                                                        background: `${exp.color}14`,
                                                        color: exp.color,
                                                        border: `1px solid ${exp.color}30`,
                                                    }}
                                                >
                                                    {exp.badge}
                                                </span>
                                                <span className="flex items-center gap-1.5 text-[var(--text-muted)] text-xs font-mono">
                                                    <Calendar className="w-3 h-3" />
                                                    {exp.period}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <ul className="space-y-1.5">
                                            {exp.achievements.map((achievement) => (
                                                <li
                                                    key={achievement}
                                                    className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                                                >
                                                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
