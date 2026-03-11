"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FlaskConical, ArrowRight, BarChart3, Clock, CheckCircle, Video, Play, X, Maximize2 } from "lucide-react";
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
        videoUrl: "https://www.youtube.com/embed/-MjXtWBno-4?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=-MjXtWBno-4&controls=1",
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
    const [playingVideo, setPlayingVideo] = useState<string | null>(null);
    const [isFloating, setIsSticky] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Intersection Observer to handle "Floating" state
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If section is not visible and a video is playing, make it float
                if (!entry.isIntersecting && playingVideo) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [playingVideo]);

    const activeProject = projects.find(p => p.slug === playingVideo);

    return (
        <section id="research" ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
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
                        Haz clic en los videos para reproducirlos aquí mismo. Si sigues navegando, el video te acompañará.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const statusInfo = statusConfig[project.status as keyof typeof statusConfig];
                        const isThisPlaying = playingVideo === project.slug;

                        return (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="group relative"
                            >
                                <div className={clsx(
                                    "glass-card rounded-[2rem] overflow-hidden border transition-all duration-500 bg-black/40 backdrop-blur-md h-full flex flex-col",
                                    isThisPlaying ? "border-[var(--neon-cyan)] shadow-[0_0_30px_rgba(0,229,255,0.2)]" : "border-white/5 hover:border-[var(--neon-cyan)]/30 shadow-2xl"
                                )}>
                                    {/* Video / Player Container */}
                                    <div className="relative w-full overflow-hidden bg-black/80 aspect-video flex items-center justify-center">
                                        {/* If not playing, show preview with Play button */}
                                        {!isThisPlaying ? (
                                            <>
                                                <div className={clsx(
                                                    "w-full h-full relative opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700",
                                                    project.videoType === "tiktok" ? "max-w-[180px] aspect-[9/16]" : "w-full h-full"
                                                )}>
                                                    <iframe
                                                        src={project.videoUrl.replace("autoplay=1", "autoplay=0")}
                                                        title={project.title}
                                                        className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                                                    />
                                                </div>
                                                <button 
                                                    onClick={() => setPlayingVideo(project.slug)}
                                                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors"
                                                >
                                                    <div className="w-16 h-16 rounded-full bg-[var(--neon-cyan)]/20 backdrop-blur-md border border-[var(--neon-cyan)]/40 flex items-center justify-center scale-90 group-hover:scale-110 transition-transform duration-300">
                                                        <Play className="w-6 h-6 text-[var(--neon-cyan)] fill-[var(--neon-cyan)]" />
                                                    </div>
                                                </button>
                                            </>
                                        ) : (
                                            /* Active Player */
                                            <div className={clsx(
                                                "w-full h-full relative animate-in fade-in duration-500",
                                                project.videoType === "tiktok" ? "max-w-[180px] aspect-[9/16]" : "w-full h-full"
                                            )}>
                                                <iframe
                                                    src={project.videoUrl}
                                                    title={project.title}
                                                    allow="autoplay; fullscreen; picture-in-picture"
                                                    className="absolute inset-0 w-full h-full border-0"
                                                />
                                                <button 
                                                    onClick={() => setPlayingVideo(null)}
                                                    className="absolute top-4 left-4 z-30 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-red-500/20 hover:border-red-500/40 transition-all"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        )}
                                        
                                        {/* Status Badge */}
                                        <div className="absolute top-4 right-4 z-20 pointer-events-none">
                                            <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center gap-2">
                                                <statusInfo.icon className="w-3 h-3" style={{ color: statusInfo.color }} />
                                                <span className="text-[9px] font-mono font-bold text-white uppercase tracking-tighter">{statusInfo.label}</span>
                                            </div>
                                        </div>
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

                {/* Floating Mini Player (Sticky) */}
                <AnimatePresence>
                    {isFloating && activeProject && (
                        <motion.div
                            initial={{ opacity: 0, x: 100, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 100, scale: 0.8 }}
                            className="fixed bottom-24 right-6 z-[100] w-72 md:w-80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        >
                            <div className="glass-card rounded-2xl overflow-hidden border border-[var(--neon-cyan)]/40 bg-black/90 backdrop-blur-xl">
                                <div className="flex items-center justify-between p-3 border-b border-white/5 bg-white/5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[var(--neon-green)] animate-pulse" />
                                        <span className="text-[10px] font-mono text-white truncate max-w-[180px] uppercase tracking-tighter">
                                            Viendo: {activeProject.title}
                                        </span>
                                    </div>
                                    <button onClick={() => setPlayingVideo(null)} className="p-1 hover:text-red-400 transition-colors">
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className={clsx(
                                    "relative w-full bg-black flex items-center justify-center",
                                    activeProject.videoType === "tiktok" ? "aspect-square p-2" : "aspect-video"
                                )}>
                                    <iframe
                                        src={activeProject.videoUrl}
                                        title={activeProject.title}
                                        allow="autoplay"
                                        className={clsx(
                                            "w-full h-full border-0",
                                            activeProject.videoType === "tiktok" ? "max-w-[120px] aspect-[9/16]" : ""
                                        )}
                                    />
                                </div>
                                <div className="p-3 bg-[var(--neon-cyan)]/5 flex justify-center">
                                    <Link href={`/investigacion/${activeProject.slug}`} className="text-[10px] font-bold text-[var(--neon-cyan)] flex items-center gap-1 hover:underline">
                                        <Maximize2 className="w-3 h-3" /> AMPLIAR INVESTIGACIÓN
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

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
