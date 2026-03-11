import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { FlaskConical, ArrowRight, BarChart3, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

export const metadata: Metadata = {
    title: "Proyectos de Investigación Científica | Ing. Marlon Pérez",
    description:
        "Investigaciones científicas activas en Inteligencia Artificial, Ciberseguridad y Auditoría de Sistemas TIS. Universidad UNEMI — Ecuador.",
};

const projects = [
    {
        title: "IA para la Detección de Amenazas en Ciberseguridad",
        slug: "ia-deteccion-amenazas-ciberseguridad",
        area: "Cybersecurity + AI",
        status: "in_progress" as const,
        progress: 60,
        color: "#00E5FF",
        year: 2025,
        institution: "UNEMI",
        videoUrl: "https://www.tiktok.com/player/v1/7408300734292184325",
        videoType: "tiktok" as const,
        description:
            "Investigación sobre la aplicación de modelos de Machine Learning y Redes Neuronales para la detección automática de intrusiones y amenazas en redes corporativas.",
        keywords: ["IDS", "IA Ética", "Ciberseguridad"],
        objectives: [
            "Evaluar eficacia de algoritmos ML en detección de intrusiones",
            "Análisis Ético: Caso Sakana IA (The Scientist)",
            "Implementar prototipo de IDS basado en IA",
        ],
    },
    {
        title: "Auditoría de Sistemas TIS con Marcos de Control Internacionales",
        slug: "auditoria-tis-marcos-control",
        area: "TIS + IT Audit",
        status: "in_progress" as const,
        progress: 40,
        color: "#A855F7",
        year: 2025,
        institution: "UNEMI",
        videoUrl: "https://www.youtube.com/embed/-MjXtWBno-4",
        videoType: "youtube" as const,
        description:
            "Estudio comparativo de marcos de control (COBIT, ISO 27001, NIST) aplicados a organizaciones del sector público en Ecuador. Se enfoca en Entrega de Valor y Gestión de Riesgos.",
        keywords: ["Auditoría TI", "COBIT", "Gestión de Riesgos"],
        objectives: [
            "Comparar marcos de control IT en organizaciones públicas",
            "Identificar brechas de cumplimiento normativo",
            "Proponer modelo híbrido de auditoría estratégica",
        ],
    },
];

const statusConfig = {
    planning: { label: "Planificación", Icon: Clock, color: "#F59E0B" },
    in_progress: { label: "En Progreso", Icon: BarChart3, color: "#00E5FF" },
    completed: { label: "Completado", Icon: CheckCircle, color: "#00FF88" },
};

export default function InvestigacionPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 pb-16 px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Page header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-2 mb-4">
                            <Link href="/" className="text-sm text-[var(--text-muted)] hover:text-[var(--neon-cyan)] font-mono transition-colors">
                                inicio
                            </Link>
                            <span className="text-[var(--text-muted)]">/</span>
                            <span className="text-sm text-[var(--neon-violet)] font-mono">investigación</span>
                        </div>

                        <span
                            className="section-badge mb-4"
                            style={{ color: "var(--neon-violet)", borderColor: "rgba(168,85,247,0.2)", background: "rgba(168,85,247,0.08)" }}
                        >
                            <FlaskConical className="w-3 h-3" />
                            Investigación Científica
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4 leading-tight">
                            Proyectos de{" "}
                            <span style={{ background: "linear-gradient(135deg, #A855F7, #00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                                Investigación
                            </span>
                        </h1>
                        <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed font-sans">
                            Investigaciones científicas activas en Inteligencia Artificial, Ciberseguridad y Auditoría de Sistemas TIS — Universidad UNEMI, Ecuador.
                        </p>
                    </div>

                    {/* Projects list */}
                    <div className="space-y-10">
                        {projects.map((project) => {
                            const statusInfo = statusConfig[project.status];
                            return (
                                <div key={project.slug} className="glass-card rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.05)] hover:border-[rgba(168,85,247,0.2)] transition-all duration-500 shadow-2xl">
                                    <div className="grid lg:grid-cols-5 gap-0">
                                        {/* Multimedia Section */}
                                        <div className="lg:col-span-2 bg-black/40 flex items-center justify-center p-4 border-b lg:border-b-0 lg:border-r border-[rgba(255,255,255,0.05)]">
                                            <div className={clsx(
                                                "w-full relative shadow-2xl overflow-hidden rounded-2xl",
                                                project.videoType === "tiktok" ? "aspect-[9/16] max-w-[240px] mx-auto" : "aspect-video"
                                            )}>
                                                <iframe
                                                    src={project.videoUrl}
                                                    title={project.title}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="absolute inset-0 w-full h-full border-0"
                                                />
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="lg:col-span-3 p-6 md:p-8 flex flex-col">
                                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span
                                                        className="badge text-[10px]"
                                                        style={{ background: `${project.color}14`, color: project.color, border: `1px solid ${project.color}28` }}
                                                    >
                                                        {project.area}
                                                    </span>
                                                    <span className="badge badge-violet text-[10px]">{project.institution}</span>
                                                </div>
                                                <div className="flex items-center gap-2 font-mono text-xs" style={{ color: statusInfo.color }}>
                                                    <statusInfo.Icon className="w-3.5 h-3.5" />
                                                    {statusInfo.label}
                                                </div>
                                            </div>

                                            <h2 className="text-[var(--text-primary)] font-bold text-2xl font-sans leading-snug mb-4">
                                                {project.title}
                                            </h2>

                                            {/* Progress */}
                                            <div className="mb-6">
                                                <div className="flex justify-between text-xs mb-2 font-mono">
                                                    <span className="text-[var(--text-muted)]">Progreso</span>
                                                    <span style={{ color: project.color }}>{project.progress}%</span>
                                                </div>
                                                <div className="progress-track h-1.5">
                                                    <div
                                                        className="progress-fill h-full"
                                                        style={{
                                                            width: `${project.progress}%`,
                                                            background: `linear-gradient(90deg, ${project.color}, ${project.color}80)`,
                                                            boxShadow: `0 0 10px ${project.color}40`,
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-sans">
                                                {project.description}
                                            </p>

                                            <div className="mt-auto pt-6 border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {project.keywords.slice(0, 3).map((kw) => (
                                                        <span key={kw} className="text-[9px] px-2 py-0.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[var(--text-muted)] font-mono">
                                                            {kw}
                                                        </span>
                                                    ))}
                                                </div>
                                                <Link
                                                    href={`/investigacion/${project.slug}`}
                                                    className="inline-flex items-center gap-1.5 text-sm font-bold hover:gap-2.5 transition-all"
                                                    style={{ color: project.color }}
                                                >
                                                    Explorar proyecto
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
            <ChatWidget />
        </>
    );
}
