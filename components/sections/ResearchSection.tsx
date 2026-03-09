"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FlaskConical, ArrowRight, BarChart3, Clock, CheckCircle } from "lucide-react";

const projects = [
    {
        title: "IA para Detección de Amenazas en Ciberseguridad",
        slug: "ia-deteccion-amenazas-ciberseguridad",
        area: "Cybersecurity + AI",
        status: "in_progress",
        progress: 60,
        color: "var(--neon-cyan)",
        description: "Aplicación de ML y Redes Neuronales para detección automática de intrusiones en redes corporativas.",
        keywords: ["IDS", "Machine Learning", "CNN"],
    },
    {
        title: "Auditoría TIS con Marcos de Control Internacionales",
        slug: "auditoria-tis-marcos-control",
        area: "TIS + IT Audit",
        status: "in_progress",
        progress: 40,
        color: "var(--neon-violet)",
        description: "Estudio comparativo de COBIT, ISO 27001 y NIST en organizaciones del sector público ecuatoriano.",
        keywords: ["COBIT", "ISO 27001", "NIST"],
    },
];

const statusConfig = {
    planning: { label: "Planificación", icon: Clock, color: "var(--neon-amber)" },
    in_progress: { label: "En Progreso", icon: BarChart3, color: "var(--neon-cyan)" },
    completed: { label: "Completado", icon: CheckCircle, color: "var(--neon-green)" },
};

export function ResearchSection() {
    return (
        <section id="research" className="py-24 px-4 relative">
            {/* Violet ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--neon-violet)] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="section-badge" style={{ color: "var(--neon-violet)", borderColor: "rgba(168,85,247,0.2)", background: "rgba(168,85,247,0.08)" }}>
                        <FlaskConical className="w-3 h-3" />
                        Investigación Científica
                    </span>
                    <h2 className="section-title">
                        Proyectos de <span style={{ background: "linear-gradient(135deg, var(--neon-violet), var(--neon-cyan))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Investigación</span>
                    </h2>
                    <div className="section-divider" style={{ background: "linear-gradient(90deg, var(--neon-violet), var(--neon-cyan))" }} />
                    <p className="text-[var(--text-secondary)] max-w-xl font-sans">
                        Investigaciones científicas activas en inteligencia artificial, ciberseguridad y tecnologías de la información.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {projects.map((project, index) => {
                        const statusInfo = statusConfig[project.status as keyof typeof statusConfig];
                        return (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12 }}
                            >
                                <Link href={`/investigacion/${project.slug}`} className="block h-full">
                                    <div className="research-card h-full">
                                        {/* Area badge */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span
                                                className="badge text-[10px]"
                                                style={{ background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}28` }}
                                            >
                                                {project.area}
                                            </span>
                                            <div className="flex items-center gap-1.5 text-xs font-mono" style={{ color: statusInfo.color }}>
                                                <statusInfo.icon className="w-3 h-3" />
                                                {statusInfo.label}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-[var(--text-primary)] font-bold text-base mb-2 font-sans leading-snug">
                                            {project.title}
                                        </h3>
                                        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">
                                            {project.description}
                                        </p>

                                        {/* Progress */}
                                        <div className="mb-4">
                                            <div className="flex justify-between text-xs mb-1.5 font-mono">
                                                <span className="text-[var(--text-muted)]">Progreso</span>
                                                <span style={{ color: project.color }}>{project.progress}%</span>
                                            </div>
                                            <div className="progress-track">
                                                <motion.div
                                                    className="progress-fill"
                                                    style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}80)`, boxShadow: `0 0 8px ${project.color}50` }}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${project.progress}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                                />
                                            </div>
                                        </div>

                                        {/* Keywords */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {project.keywords.map((kw) => (
                                                <span key={kw} className="text-[10px] px-2 py-0.5 rounded font-mono" style={{ background: `${project.color}0d`, color: project.color }}>
                                                    {kw}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-1 text-xs font-semibold mt-auto" style={{ color: project.color }}>
                                            Ver detalles <ArrowRight className="w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link href="/investigacion" className="btn-secondary font-sans inline-flex">
                        <FlaskConical className="w-4 h-4" />
                        Ver todos los proyectos
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
