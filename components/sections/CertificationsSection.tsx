"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, Eye, Download, ShieldCheck, Loader2, RefreshCcw } from "lucide-react";
import { useState, useEffect } from "react";
import { PDFModal } from "@/components/ui/PDFModal";
import { supabase } from "@/lib/supabase";

interface Certification {
    id: string;
    title: string;
    issuer: string;
    category: string;
    color: string;
    file_path: string;
    description: string;
}

export function CertificationsSection() {
    const [certifications, setCertifications] = useState<Certification[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

    useEffect(() => {
        const fetchCerts = async () => {
            try {
                const { data, error } = await supabase
                    .from("certifications")
                    .select("*")
                    .order("created_at", { ascending: false });

                if (error) throw error;
                if (data) setCertifications(data);
            } catch (err) {
                console.error("Error fetching certifications:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCerts();
    }, []);

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
                        Bóveda de Credenciales
                    </span>
                    <h2 className="section-title">
                        Certificaciones <span>Verificadas</span>
                    </h2>
                    <div className="section-divider" />
                    <p className="text-[var(--text-secondary)] max-w-xl font-sans mt-4">
                        Sincronización en tiempo real con mi repositorio de credenciales en la nube.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <Loader2 className="w-10 h-10 text-[var(--neon-cyan)] animate-spin" />
                        <p className="font-mono text-xs text-[var(--neon-cyan)] animate-pulse">Consultando Supabase Database...</p>
                    </div>
                ) : certifications.length === 0 ? (
                    <div className="glass-card rounded-2xl p-10 text-center border-dashed border-white/10">
                        <RefreshCcw className="w-8 h-8 text-[var(--text-muted)] mx-auto mb-4" />
                        <p className="text-[var(--text-muted)] font-mono text-sm">Esperando sincronización de documentos...</p>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group"
                            >
                                <div className="glass-card rounded-[1.5rem] p-6 h-full flex flex-col border border-white/5 hover:border-[var(--neon-cyan)]/30 transition-all duration-500 bg-black/20 backdrop-blur-sm">
                                    <div className="flex items-center justify-between mb-5">
                                        <div 
                                            className="px-3 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest"
                                            style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
                                        >
                                            {cert.issuer}
                                        </div>
                                        <ShieldCheck className="w-4 h-4 text-[var(--neon-green)] opacity-50" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-white font-bold text-base mb-2 font-sans group-hover:text-[var(--neon-cyan)] transition-colors leading-tight">
                                            {cert.title}
                                        </h3>
                                        <p className="text-[var(--text-muted)] text-xs leading-relaxed font-sans line-clamp-2">
                                            {cert.description}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
                                        <button
                                            onClick={() => setSelectedPdf({ url: cert.file_path, title: cert.title })}
                                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[var(--neon-cyan)]/5 border border-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] text-xs font-bold font-sans hover:bg-[var(--neon-cyan)]/10 transition-all"
                                        >
                                            <Eye className="w-3.5 h-3.5" />
                                            VISUALIZAR
                                        </button>
                                        <a
                                            href={cert.file_path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-white hover:border-white/20 transition-all"
                                        >
                                            <Download className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            <PDFModal 
                isOpen={!!selectedPdf} 
                onClose={() => setSelectedPdf(null)} 
                pdfUrl={selectedPdf?.url || ""} 
                title={selectedPdf?.title || ""} 
            />
        </section>
    );
}
