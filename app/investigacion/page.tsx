import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { FlaskConical, ArrowRight, BarChart3, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

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
        description:
            "Investigación sobre la aplicación de modelos de Machine Learning y Redes Neuronales para la detección automática de intrusiones y amenazas en redes corporativas. Se evalúan algoritmos de clasificación supervisada sobre datasets públicos de ciberseguridad.",
        keywords: ["IDS", "Machine Learning", "Redes Neuronales", "Ciberseguridad", "Detección de Intrusiones"],
        objectives: [
            "Evaluar la eficacia de algoritmos ML en detección de intrusiones",
            "Comparar modelos CNN vs Random Forest en datasets de tráfico de red",
            "Implementar un prototipo de IDS basado en IA",
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
        description:
            "Estudio comparativo de marcos de control para auditoría de Tecnologías de la Información (COBIT, ISO 27001, NIST) aplicados a organizaciones del sector público en Ecuador. Se propone un modelo híbrido adaptado al contexto latinoamericano.",
        keywords: ["Auditoría TI", "COBIT", "ISO 27001", "NIST", "Sector Público", "Ecuador"],
        objectives: [
            "Comparar marcos de control IT en organizaciones públicas ecuatorianas",
            "Identificar brechas de cumplimiento normativo",
            "Proponer un modelo híbrido de auditoría adaptado al contexto local",
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

                    {/* Stats bar */}
                    <div className="grid grid-cols-3 gap-4 mb-12">
                        {[
                            { value: projects.length.toString(), label: "Proyectos activos" },
                            { value: "UNEMI", label: "Institución" },
                            { value: "2025", label: "Año académico" },
                        ].map((stat) => (
                            <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                                <p className="text-xl font-bold gradient-text font-mono">{stat.value}</p>
                                <p className="text-xs text-[var(--text-muted)] mt-1 font-sans">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Projects list */}
                    <div className="space-y-6">
                        {projects.map((project) => {
                            const statusInfo = statusConfig[project.status];
                            return (
                                <div key={project.slug} className="glass-card rounded-2xl p-6 md:p-8 hover:border-[rgba(168,85,247,0.3)] transition-all duration-300">
                                    {/* Header row */}
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <span
                                                    className="badge text-[10px]"
                                                    style={{ background: `${project.color}14`, color: project.color, border: `1px solid ${project.color}28` }}
                                                >
                                                    {project.area}
                                                </span>
                                                <span className="badge badge-violet text-[10px]">{project.institution}</span>
                                                <span className="text-[var(--text-muted)] text-xs font-mono">{project.year}</span>
                                            </div>
                                            <h2 className="text-[var(--text-primary)] font-bold text-xl font-sans leading-snug">
                                                {project.title}
                                            </h2>
                                        </div>
                                        <div className="flex items-center gap-2 shrink-0 font-mono text-xs" style={{ color: statusInfo.color }}>
                                            <statusInfo.Icon className="w-3.5 h-3.5" />
                                            {statusInfo.label}
                                        </div>
                                    </div>

                                    {/* Progress */}
                                    <div className="mb-5">
                                        <div className="flex justify-between text-xs mb-2 font-mono">
                                            <span className="text-[var(--text-muted)]">Progreso de investigación</span>
                                            <span style={{ color: project.color }}>{project.progress}%</span>
                                        </div>
                                        <div className="progress-track">
                                            <div
                                                className="progress-fill"
                                                style={{
                                                    width: `${project.progress}%`,
                                                    background: `linear-gradient(90deg, ${project.color}, ${project.color}80)`,
                                                    boxShadow: `0 0 8px ${project.color}50`,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
                                        {project.description}
                                    </p>

                                    {/* Objectives */}
                                    <div className="mb-5">
                                        <p className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-wider mb-2">Objetivos</p>
                                        <ul className="space-y-1.5">
                                            {project.objectives.map((obj) => (
                                                <li key={obj} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                                    <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: project.color }} />
                                                    {obj}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Keywords */}
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.keywords.map((kw) => (
                                            <span key={kw} className="text-[10px] px-2 py-0.5 rounded font-mono" style={{ background: `${project.color}0d`, color: project.color }}>
                                                {kw}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View detail link */}
                                    <Link
                                        href={`/investigacion/${project.slug}`}
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                                        style={{ color: project.color }}
                                    >
                                        Ver detalle completo
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
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
