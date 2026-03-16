"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, User, MessageSquare, Loader2, CheckCircle, FileText, Linkedin, Github, Youtube, Twitter, ExternalLink, Copy, Monitor, Smartphone } from "lucide-react";
import { clsx } from "clsx";

// Custom SVG components for official brand logos
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.32 2.51.69 2.51 2.02 0 .03-.01.06-.01.09.33 0 .66.01.99.01 0 2.3 1.8 4.16 4.03 4.24v3.31c-1.3-.01-2.5-.4-3.5-1.1-.01 3.1-.01 6.2-.01 9.3 0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .6 0 .9.1V11c-3.1.1-5.6 2.6-5.6 5.7 0 3.1 2.5 5.6 5.6 5.6s5.6-2.5 5.6-5.6V0h3.3c0 1.1.9 2 2 2v2c-2.2 0-4-1.8-4-4V.02z" />
    </svg>
);

const RedditIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.051l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.945 0 1.712.767 1.712 1.712 0 .593-.306 1.113-.773 1.415.033.207.051.419.051.632 0 2.335-2.658 4.23-5.94 4.23-3.281 0-5.94-1.895-5.94-4.23 0-.213.018-.425.051-.632a1.702 1.702 0 0 1-.773-1.415c0-.945.767-1.712 1.712-1.712.477 0 .899.182 1.207.491 1.194-.856 2.85-1.419 4.674-1.488l.82-3.818a.125.125 0 0 1 .144-.098l2.811.592c.048-.239.247-.42.496-.42zM8.561 13.14c-.6 0-1.09.49-1.09 1.09 0 .6.49 1.09 1.09 1.09.6 0 1.09-.49 1.09-1.09 0-.6-.49-1.09-1.09-1.09zm6.878 0c-.6 0-1.09.49-1.09 1.09 0 .6.49 1.09 1.09 1.09.6 0 1.09-.49 1.09-1.09 0-.6-.49-1.09-1.09-1.09zm-2.565 3.774a3.847 3.847 0 0 1-2.473-.901.125.125 0 0 0-.164.188c.56.513 1.27.824 2.045.824.775 0 1.485-.311 2.046-.824a.125.125 0 0 0-.164-.188 3.847 3.847 0 0 1-2.474.901z" />
    </svg>
);

const OrcidIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.541 0 .942.452.942.996 0 .52-.39.985-.942.985-.541 0-.941-.465-.941-.985 0-.544.39-.996.941-.996zM5.03 5.646h4.68v12.708H5.03V5.646zm11.646 12.708h-2.016V5.646h2.016v1.844c.281-.609.938-1.219 2.016-1.219 1.328 0 2.344.859 2.344 2.75v9.333h-2.016z" />
    </svg>
);

const socialLinks = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ing-marlon-pérez-06ab32303?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: Linkedin, brandColor: "#0077B5" },
    { label: "GitHub", url: "https://github.com/marlonperez70", icon: Github, brandColor: "#ffffff" },
    { label: "ORCID", url: "https://orcid.org/0009-0001-9166-7497", icon: OrcidIcon, brandColor: "#A6CE39" },
    { label: "YouTube", url: "https://youtube.com/@marlonperez-ing?si=Dcoba3IRyh-3u7Eg", icon: Youtube, brandColor: "#FF0000" },
    { label: "X (Twitter)", url: "https://x.com/IngMarlonPere", icon: Twitter, brandColor: "#ffffff" },
    { label: "Reddit", url: "https://www.reddit.com/u/Commercial_Report276/s/AExrG2IXnP", icon: RedditIcon, brandColor: "#FF4500" },
    { label: "TikTok", url: "https://www.tiktok.com/@ing.marlon.perez?_r=1&_t=ZS-94YLWjKdAjU", icon: TikTokIcon, brandColor: "#ffffff" },
    { 
        label: "Email", 
        url: "#", 
        icon: Mail, 
        brandColor: "#00E5FF", 
        isEmail: true, 
        emailValue: "malmachi@unemi.edu.ec" 
    },
];

export function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [copied, setCopied] = useState(false);
    const [showEmailHUD, setShowEmailHUD] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("malmachi@unemi.edu.ec");
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
            setShowEmailHUD(false);
        }, 2000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Error al enviar");
            setStatus("success");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Error desconocido");
        }
    };

    const contactInfo = [
        { icon: Mail, label: "Email Institucional", value: "malmachi@unemi.edu.ec", color: "var(--neon-cyan)" },
        { icon: MessageSquare, label: "LinkedIn", value: "Ing. Marlon Pérez", color: "var(--neon-violet)" },
        { icon: FileText, label: "Portafolio v2.0", value: "Investigación & Ciberseguridad", color: "var(--neon-green)" },
    ];

    return (
        <section id="contact" className="py-20 md:py-24 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto relative">
                {/* Email Choice HUD */}
                <AnimatePresence>
                    {showEmailHUD && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                            onClick={() => setShowEmailHUD(false)}
                        >
                            <motion.div 
                                className="glass-card p-6 max-w-sm w-full border-[var(--neon-cyan)]/30 space-y-4"
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-[var(--neon-cyan)]/10 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-[var(--neon-cyan)]" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Opciones de Contacto</h4>
                                        <p className="text-[10px] font-mono text-[var(--neon-cyan)]">PROTOCOL: SECURE_MAIL_TRANSFER</p>
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <a 
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=malmachi@unemi.edu.ec" 
                                        target="_blank"
                                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--neon-cyan)] transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Monitor className="w-4 h-4 text-[var(--neon-cyan)]" />
                                            <span className="text-sm">Gmail (Navegador)</span>
                                        </div>
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>

                                    <a 
                                        href="mailto:malmachi@unemi.edu.ec"
                                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--neon-violet)] transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Smartphone className="w-4 h-4 text-[var(--neon-violet)]" />
                                            <span className="text-sm">Abrir App de Correo</span>
                                        </div>
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>

                                    <button 
                                        onClick={handleCopyEmail}
                                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--neon-green)] transition-all group w-full"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Copy className="w-4 h-4 text-[var(--neon-green)]" />
                                            <span className="text-sm">{copied ? "¡Copiado!" : "Copiar Dirección"}</span>
                                        </div>
                                        <CheckCircle className={clsx("w-3 h-3 transition-opacity", copied ? "opacity-100" : "opacity-0")} />
                                    </button>
                                </div>

                                <button 
                                    onClick={() => setShowEmailHUD(false)}
                                    className="w-full py-2 text-[10px] font-mono text-[var(--text-muted)] hover:text-white transition-colors"
                                >
                                    [ CERRAR_MENU ]
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center md:text-left"
                >
                    <span className="section-badge mx-auto md:mx-0">
                        <Mail className="w-3 h-3" />
                        Contacto
                    </span>
                    <h2 className="section-title">
                        Conectemos en <span>Redes Sociales</span>
                    </h2>
                    <div className="section-divider mx-auto md:mx-0" />
                    <p className="text-[var(--text-secondary)] max-w-xl font-sans">
                        Sigue mis avances en investigación científica, ciberseguridad y auditoría IT a través de mis canales oficiales.
                    </p>
                </motion.div>

                {/* Social links grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.isEmail ? undefined : social.url}
                            onClick={social.isEmail ? (e) => { e.preventDefault(); setShowEmailHUD(true); } : undefined}
                            target={social.isEmail ? undefined : "_blank"}
                            rel={social.isEmail ? undefined : "noopener noreferrer"}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center gap-3 text-[var(--text-muted)] transition-all group text-sm hover:text-[var(--text-primary)] cursor-pointer"
                        >
                            <div 
                                className="w-10 h-10 rounded-lg border border-[var(--border-subtle)] flex items-center justify-center transition-all duration-300 group-hover:border-current relative shrink-0"
                                style={{ color: social.brandColor }}
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-sm rounded-lg" style={{ background: social.brandColor }} />
                                <social.icon className="w-4 h-4 relative z-10" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-mono font-medium group-hover:text-[var(--text-primary)] transition-colors">
                                    {social.label}
                                </span>
                                <span className="text-[10px] text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                    {social.isEmail ? "Ver opciones" : "Seguir"} <ExternalLink className="w-2 h-2" />
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    {/* ... (resto del componente igual) */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 space-y-4"
                    >
                        {contactInfo.map((info) => (
                            <div key={info.label} className="glass-card rounded-xl p-4 flex items-center gap-4">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                    style={{ background: `${info.color}14`, border: `1px solid ${info.color}28` }}
                                >
                                    <info.icon className="w-4 h-4" style={{ color: info.color }} />
                                </div>
                                <div>
                                    <p className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-wider">{info.label}</p>
                                    <p className="text-[var(--text-primary)] text-sm font-medium">{info.value}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-3"
                    >
                        <div className="glass-card rounded-2xl p-5 sm:p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    <div>
                                        <label className="form-label">Nombre</label>
                                        <input className="form-input" placeholder="Tu nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                                    </div>
                                    <div>
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-input" placeholder="tu@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                                    </div>
                                </div>
                                <div>
                                    <label className="form-label">Asunto</label>
                                    <input className="form-input" placeholder="¿En qué puedo ayudarte?" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                                </div>
                                <div>
                                    <label className="form-label">Mensaje</label>
                                    <textarea className="form-input resize-none" rows={5} placeholder="Describe tu proyecto..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                                </div>
                                <button type="submit" disabled={status === "loading"} className="btn-primary w-full font-sans justify-center">
                                    {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
