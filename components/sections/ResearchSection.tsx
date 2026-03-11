"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FlaskConical, ArrowRight, BarChart3, Clock, CheckCircle, Video, Play } from "lucide-react";
import { clsx } from "clsx";

const projects = [
    {
        title: "IA para Detección de Amenazas en Ciberseguridad",
        slug: "ia-deteccion-amenazas-ciberseguridad",
        area: "Cybersecurity + AI",
        status: "in_progress",
        progress: 60,
        color: "#00E5FF",
        videoUrl: "https://www.tiktok.com/player/v1/7408300734292184325",
        videoType: "tiktok",
        description: "Análisis ético y técnico sobre el comportamiento emergente en agentes de IA como Sakana AI.",
        keywords: ["Ethics", "IDS", "Machine Learning"],
    },
    {
        title: "Auditoría TIS con Marcos de Control Internacionales",
        slug: "auditoria-tis-marcos-control",
        area: "TIS + IT Audit",
        status: "in_progress",
        progress: 40,
        color: "#A855F7",
        videoUrl: "https://www.youtube.com/embed/-MjXtWBno-4?autoplay=1&mute=1&loop=1&playlist=-MjXtWBno-4&controls=0&modestbranding=1",
        videoType: "youtube",
        description: "Masterclass sobre Gobierno de TI enfocado en la entrega de valor y gestión de riesgos estratégicos.",
        keywords: ["COBIT 5", "ISO 27001", "Governance"],
    },
];

const statusConfig = {
    planning: { label: "Planificación", icon: Clock, color: "#F59E0B" },
    in_progress: { label: "En Progreso", icon: BarChart3, color: "#00E5FF" },
    completed: { label: "Completado", icon: CheckCircle, color: "#00FF88" },
};

export function ResearchSection() {
    return (
        <section id="research" className="py-24 px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--neon-violet)] opacity-[0.02] blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--neon-cyan)] opacity-[0.02] blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <span className="section-badge mx-auto md:mx-0" style={{ color: "#A855F7", borderColor: "rgba(168,85,247,0.3)", background: "rgba(168,85,247,0.1)" }}>
                        <FlaskConical className="w-3 h-3" />
                        Investigación Científica
                    </span>
                    <h2 className="section-title">
                        Proyectos en <span className="gradient-text">Multimedia</span>
                    </h2>
                    <div className="section-divider mx-auto md:mx-0" />
                    <p className="text-[var(--text-secondary)] max-w-xl font-sans mt-4">
                        Explora mis últimas contribuciones científicas y análisis técnicos a través de experiencias inmersivas de video.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const statusInfo = statusConfig[project.status as keyof typeof statusConfig];
                        return (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="group relative"
                            >
                                <div className="glass-card rounded-[2rem] overflow-hidden border border-white/5 hover:border-[var(--neon-cyan)]/30 transition-all duration-500 bg-black/40 backdrop-blur-md h-full flex flex-col">
                                    {/* Video / Player Container */}
                                    <div className="relative w-full overflow-hidden bg-black/80 aspect-video flex items-center justify-center">
                                        <div className={clsx(
                                            "w-full h-full relative transition-transform duration-700 group-hover:scale-105",
                                            project.videoType === "tiktok" ? "max-w-[180px] aspect-[9/16]" : "w-full h-full"
                                        )}>
                                            <iframe
                                                src={project.videoUrl}
                                                title={project.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                                            />
                                        </div>
                                        
                                        {/* Status Badge Overlay */}
                                        <div className="absolute top-4 right-4 z-20">
                                            <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center gap-2">
                                                <statusInfo.icon className="w-3 h-3" style={{ color: statusInfo.color }} />
                                                <span className="text-[9px] font-mono font-bold text-white uppercase tracking-tighter">{statusInfo.label}</span>
                                            </div>
                                        </div>

                                        {/* Play Icon Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors z-10">
                                            <div className="w-12 h-12 rounded-full bg-[var(--neon-cyan)]/20 backdrop-blur-md border border-[var(--neon-cyan)]/40 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                                                <Play className="w-5 h-5 text-[var(--neon-cyan)] fill-[var(--neon-cyan)]" />
                                            </div>
                                        </div>

                                        {/* Link Overlay */}
                                        <Link href={`/investigacion/${project.slug}`} className="absolute inset-0 z-30" />
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 rounded-lg bg-[var(--neon-cyan)]/10 flex items-center justify-center">
                                                <Video className="w-4 h-4 text-[var(--neon-cyan)]" />
                                            </div>
                                            <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest">{project.area}</span>
                                        </div>

                                        <h3 className="text-[var(--text-primary)] font-bold text-xl mb-4 font-sans leading-tight group-hover:text-[var(--neon-cyan)] transition-colors">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-[var(--text-muted)] text-sm mb-8 leading-relaxed line-clamp-2 font-sans">
                                            {project.description}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                            <div className="flex gap-2">
                                                {project.keywords.slice(0, 2).map(kw => (
                                                    <span key={kw} className="text-[9px] font-mono text-[var(--neon-cyan)] px-2.5 py-1 rounded-full bg-[var(--neon-cyan)]/5 border border-[var(--neon-cyan)]/10 uppercase">
                                                        {kw}
                                                    </span>
                                                ))}
                                            </div>
                                            <Link 
                                                href={`/investigacion/${project.slug}`}
                                                className="flex items-center gap-2 text-xs font-bold text-white hover:text-[var(--neon-cyan)] transition-colors group/link"
                                            >
                                                DETALLES <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <Link href="/investigacion" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--neon-violet)]/50 transition-all duration-300 group font-sans text-sm font-semibold">
                        <FlaskConical className="w-4 h-4 text-[var(--neon-violet)]" />
                        Ver Repositorio Científico Completo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
