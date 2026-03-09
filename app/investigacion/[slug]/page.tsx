import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { ArrowLeft, BarChart3, Calendar, Building2, Target, Tag } from "lucide-react";
import Link from "next/link";

const projectsData = {
    "ia-deteccion-amenazas-ciberseguridad": {
        title: "IA para la Detección de Amenazas en Ciberseguridad",
        area: "Cybersecurity + AI",
        status: "in_progress" as const,
        progress: 60,
        color: "#00E5FF",
        year: 2025,
        institution: "UNEMI",
        description:
            "Investigación sobre la aplicación de modelos de Machine Learning y Redes Neuronales Convolucionales para la detección automática de intrusiones y amenazas en redes corporativas. Se evalúan algoritmos de clasificación supervisada sobre datasets públicos de ciberseguridad (CICIDS2017, KDD Cup 99).",
        objectives: [
            "Evaluar la eficacia de algoritmos ML en detección de intrusiones de red",
            "Comparar modelos CNN vs Random Forest vs SVM en datasets de tráfico de red",
            "Implementar un prototipo funcional de IDS basado en IA",
            "Validar el modelo con tráfico de red real en entorno controlado",
        ],
        methodology: "Se utiliza el enfoque de investigación experimental cuantitativa. Los datasets CICIDS2017 y KDD Cup 99 son preprocesados con técnicas de normalización y balanceo (SMOTE). Se entrenan modelos de clasificación supervisada y se evalúan con métricas de precision, recall, F1-score y AUC-ROC.",
        keywords: ["IDS", "Machine Learning", "Redes Neuronales", "CNN", "Ciberseguridad", "Detección de Intrusiones", "Random Forest", "CICIDS2017"],
    },
    "auditoria-tis-marcos-control": {
        title: "Auditoría de Sistemas TIS con Marcos de Control Internacionales",
        area: "TIS + IT Audit",
        status: "in_progress" as const,
        progress: 40,
        color: "#A855F7",
        year: 2025,
        institution: "UNEMI",
        videoUrl: "https://www.youtube.com/embed/-MjXtWBno-4",
        description:
            "El gobierno de TI no es una función meramente técnica, sino un pilar del gobierno corporativo que consta de liderazgo, estructuras organizacionales y procesos para garantizar que la tecnología sostenga y extienda las estrategias y objetivos organizacionales. Esta investigación se centra en la implementación de marcos de control autorizados (COBIT 5, ISO 27001, NIST CSF) para permitir que la tecnología se gobierne de manera holística en toda la empresa.",
        objectives: [
            "Entrega de Valor (Value Delivery): Asegurar que las inversiones en TI generen el mayor retorno posible para el negocio",
            "Administración de Riesgos (Risk Management): Definir niveles de riesgo aceptables y proteger los activos críticos de información",
            "Sistemas de Control: Implementar marcos de trabajo (COBIT) para armonizar mejores prácticas internacionales",
            "Separación de Gobierno y Gestión: Diferenciar propósitos y actividades bajo el paraguas de COBIT 5",
        ],
        methodology: "Investigación mixta aplicada al sector público ecuatoriano. Se analiza la integración de áreas de negocio con responsabilidades funcionales de TI mediante estructuras como el Comité Estratégico de TI (nivel consejo) y el Comité Directivo de TI (nivel ejecutivo).",
        keywords: ["Gobierno de TI", "COBIT 5", "ISO 27001", "Gestión de Riesgos", "Entrega de Valor", "Cumplimiento Normativo", "COSO", "Auditoría IT"],
    },
};

type Params = { slug: string };

export async function generateStaticParams() {
    return Object.keys(projectsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projectsData[slug as keyof typeof projectsData];
    if (!project) return {};
    return {
        title: `${project.title} | Investigación · Marlon Pérez`,
        description: project.description.slice(0, 160),
    };
}

export default async function ResearchDetailPage({ params }: { params: Promise<Params> }) {
    const { slug } = await params;
    const project = projectsData[slug as keyof typeof projectsData];
    if (!project) notFound();

    const statusLabel = { planning: "Planificación", in_progress: "En Progreso", completed: "Completado" }[project.status];

    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 pb-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 mb-8 font-mono text-sm">
                        <Link href="/" className="text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors">inicio</Link>
                        <span className="text-[var(--text-muted)]">/</span>
                        <Link href="/investigacion" className="text-[var(--text-muted)] hover:text-[var(--neon-violet)] transition-colors">investigación</Link>
                        <span className="text-[var(--text-muted)]">/</span>
                        <span style={{ color: project.color }} className="truncate max-w-48">{slug}</span>
                    </div>

                    {/* Back link */}
                    <Link href="/investigacion" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors mb-8 font-sans">
                        <ArrowLeft className="w-4 h-4" />
                        Volver a proyectos
                    </Link>

                    {/* Video Section (if exists) */}
                    {project.videoUrl && (
                        <div className="mb-8 glass-card rounded-2xl overflow-hidden border-[var(--border-subtle)]">
                            <div className="aspect-video w-full">
                                <iframe
                                    src={project.videoUrl}
                                    title={project.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full border-0"
                                />
                            </div>
                            <div className="p-4 bg-[rgba(168,85,247,0.05)] border-t border-[var(--border-subtle)] flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[var(--neon-violet)]/10 flex items-center justify-center">
                                    <FlaskConical className="w-4 h-4 text-[var(--neon-violet)]" />
                                </div>
                                <p className="text-xs font-mono text-[var(--neon-violet)]">
                                    MASTERCLASS DESTACADA: {project.title}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Main card */}
                    <div className="glass-card rounded-2xl p-6 md:p-10 mb-6">
                        {/* Tags row */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="badge text-[10px]" style={{ background: `${project.color}14`, color: project.color, border: `1px solid ${project.color}28` }}>
                                {project.area}
                            </span>
                            <span className="badge badge-violet text-[10px]">{project.institution}</span>
                            <span className="flex items-center gap-1 text-xs text-[var(--text-muted)] font-mono">
                                <Calendar className="w-3 h-3" />
                                {project.year}
                            </span>
                            <span className="flex items-center gap-1 text-xs font-mono" style={{ color: project.color }}>
                                <BarChart3 className="w-3 h-3" />
                                {statusLabel}
                            </span>
                        </div>

                        <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] mb-6 leading-snug font-sans">
                            {project.title}
                        </h1>

                        {/* Progress */}
                        <div className="mb-8">
                            <div className="flex justify-between text-xs mb-2 font-mono">
                                <span className="text-[var(--text-muted)]">Progreso de investigación</span>
                                <span style={{ color: project.color }}>{project.progress}%</span>
                            </div>
                            <div className="progress-track h-2">
                                <div className="progress-fill h-2" style={{ width: `${project.progress}%`, background: `linear-gradient(90deg, ${project.color}, ${project.color}80)`, boxShadow: `0 0 10px ${project.color}50` }} />
                            </div>
                        </div>

                        {/* Description */}
                        <section className="mb-8">
                            <h2 className="text-[var(--text-primary)] font-semibold mb-3 flex items-center gap-2 font-sans">
                                <Building2 className="w-4 h-4" style={{ color: project.color }} />
                                Resumen
                            </h2>
                            <p className="text-[var(--text-secondary)] leading-relaxed">{project.description}</p>
                        </section>

                        {/* Objectives */}
                        <section className="mb-8">
                            <h2 className="text-[var(--text-primary)] font-semibold mb-3 flex items-center gap-2 font-sans">
                                <Target className="w-4 h-4" style={{ color: project.color }} />
                                Objetivos
                            </h2>
                            <ul className="space-y-2">
                                {project.objectives.map((obj, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                                        <span className="mt-2 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] shrink-0 font-mono font-bold" style={{ borderColor: `${project.color}40`, color: project.color }}>
                                            {i + 1}
                                        </span>
                                        {obj}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Methodology */}
                        <section className="mb-8">
                            <h2 className="text-[var(--text-primary)] font-semibold mb-3 font-sans">Metodología</h2>
                            <div className="bg-[rgba(255,255,255,0.03)] border border-[var(--border-subtle)] rounded-xl p-4">
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{project.methodology}</p>
                            </div>
                        </section>

                        {/* Keywords */}
                        <section>
                            <h2 className="text-[var(--text-primary)] font-semibold mb-3 flex items-center gap-2 font-sans">
                                <Tag className="w-4 h-4" style={{ color: project.color }} />
                                Palabras clave
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.keywords.map((kw) => (
                                    <span key={kw} className="text-xs px-3 py-1 rounded-full font-mono" style={{ background: `${project.color}0d`, color: project.color, border: `1px solid ${project.color}25` }}>
                                        {kw}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Documents section placeholder */}
                    <div className="glass-card rounded-2xl p-6">
                        <h2 className="text-[var(--text-primary)] font-semibold mb-2 font-sans">Documentos del Proyecto</h2>
                        <p className="text-[var(--text-muted)] text-sm font-mono">
                            {/* Los documentos PDF serán cargados próximamente en Supabase Storage */}
                            Documentos próximamente disponibles en Supabase Storage.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
            <ChatWidget />
        </>
    );
}
