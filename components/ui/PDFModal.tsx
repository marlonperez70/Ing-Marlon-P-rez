"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Maximize2, FileText, ExternalLink, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

interface PDFModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
    title: string;
}

export function PDFModal({ isOpen, onClose, pdfUrl, title }: PDFModalProps) {
    const [isLoading, setIsLoading] = useState(true);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-5xl h-full bg-[var(--bg-void)] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5 backdrop-blur-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[var(--neon-violet)]/10 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-[var(--neon-violet)]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm md:text-base truncate max-w-[200px] md:max-w-md font-sans">
                                        {title}
                                    </h3>
                                    <p className="text-[var(--text-muted)] text-[10px] font-mono uppercase tracking-widest">Documento Verificado</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <a 
                                    href={pdfUrl} 
                                    download 
                                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-white hover:border-white/20 transition-all"
                                    title="Descargar PDF"
                                >
                                    <Download className="w-5 h-5" />
                                </a>
                                <button 
                                    onClick={onClose}
                                    className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer Body */}
                        <div className="flex-1 bg-black/40 relative overflow-hidden">
                            {isLoading && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                                    <Loader2 className="w-8 h-8 text-[var(--neon-cyan)] animate-spin" />
                                    <p className="font-mono text-xs text-[var(--neon-cyan)] animate-pulse">Cargando visualizador seguro...</p>
                                </div>
                            )}
                            
                            {/* Desktop: Native Iframe | Mobile: Google Docs Viewer Fallback */}
                            <iframe
                                src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
                                className="w-full h-full border-0"
                                onLoad={() => setIsLoading(false)}
                                title={title}
                            />

                            {/* Mobile Overlay: In case Google Viewer is blocked or slow, provide a direct action */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 md:hidden">
                                <a 
                                    href={pdfUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-xl bg-[var(--neon-cyan)] text-black font-bold text-xs shadow-[0_0_20px_rgba(0,229,255,0.4)] flex items-center gap-2"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    ABRIR DOCUMENTO COMPLETO
                                </a>
                            </div>
                        </div>

                        {/* Footer Info */}
                        <div className="p-3 bg-white/5 border-t border-white/5 flex justify-center items-center gap-6">
                            <div className="flex items-center gap-2 text-[10px] font-mono text-[var(--text-muted)]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] animate-pulse" />
                                SSL SECURE ENCRYPTION
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-mono text-[var(--text-muted)]">
                                <Maximize2 className="w-3 h-3" />
                                NATIVE RENDERING
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
