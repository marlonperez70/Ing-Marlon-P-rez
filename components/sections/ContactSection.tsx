"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, Loader2, CheckCircle, FileText, Linkedin, Github, Youtube, Twitter, Share2 } from "lucide-react";

// Custom SVG components for official brand logos
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.32 2.51.69 2.51 2.02 0 .03-.01.06-.01.09.33 0 .66.01.99.01 0 2.3 1.8 4.16 4.03 4.24v3.31c-1.3-.01-2.5-.4-3.5-1.1-.01 3.1-.01 6.2-.01 9.3 0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .6 0 .9.1V11c-3.1.1-5.6 2.6-5.6 5.7 0 3.1 2.5 5.6 5.6 5.6s5.6-2.5 5.6-5.6V0h3.3c0 1.1.9 2 2 2v2c-2.2 0-4-1.8-4-4V.02z" />
    </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.7 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.87.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.87.076.076 0 0 0-.041.106c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

const TwitchIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
    </svg>
);

const RedditIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.051l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.945 0 1.712.767 1.712 1.712 0 .593-.306 1.113-.773 1.415.033.207.051.419.051.632 0 2.335-2.658 4.23-5.94 4.23-3.281 0-5.94-1.895-5.94-4.23 0-.213.018-.425.051-.632a1.702 1.702 0 0 1-.773-1.415c0-.945.767-1.712 1.712-1.712.477 0 .899.182 1.207.491 1.194-.856 2.85-1.419 4.674-1.488l.82-3.818a.125.125 0 0 1 .144-.098l2.811.592c.048-.239.247-.42.496-.42zM8.561 13.14c-.6 0-1.09.49-1.09 1.09 0 .6.49 1.09 1.09 1.09.6 0 1.09-.49 1.09-1.09 0-.6-.49-1.09-1.09-1.09zm6.878 0c-.6 0-1.09.49-1.09 1.09 0 .6.49 1.09 1.09 1.09.6 0 1.09-.49 1.09-1.09 0-.6-.49-1.09-1.09-1.09zm-2.565 3.774a3.847 3.847 0 0 1-2.473-.901.125.125 0 0 0-.164.188c.56.513 1.27.824 2.045.824.775 0 1.485-.311 2.046-.824a.125.125 0 0 0-.164-.188 3.847 3.847 0 0 1-2.474.901z" />
    </svg>
);

const OrcidIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.541 0 .942.452.942.996 0 .52-.39.985-.942.985-.541 0-.941-.465-.941-.985 0-.544.39-.996.941-.996zM5.03 5.646h4.68v12.708H5.03V5.646zm11.646 12.708h-2.016V5.646h2.016v1.844c.281-.609.938-1.219 2.016-1.219 1.328 0 2.344.859 2.344 2.75v9.333z" />
    </svg>
);

const socialLinks = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ing-marlon-pérez-06ab32303?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: Linkedin, color: "#0066ff" },
    { label: "GitHub", url: "https://github.com/marlonperez70", icon: Github, color: "#c0c0c0" },
    { label: "ORCID", url: "https://orcid.org/0009-0001-9166-7497", icon: OrcidIcon, color: "#A6CE39" },
    { label: "YouTube", url: "https://youtube.com/@marlonperez-ing?si=Dcoba3IRyh-3u7Eg", icon: Youtube, color: "#FF0000" },
    { label: "X (Twitter)", url: "https://x.com/IngMarlonPere", icon: Twitter, color: "#ffffff" },
    { label: "Reddit", url: "https://www.reddit.com/u/Commercial_Report276/s/AExrG2IXnP", icon: RedditIcon, color: "#FF4500" },
    { label: "Discord", url: "https://discord.gg/P985BWeB", icon: DiscordIcon, color: "#5865F2" },
    { label: "TikTok", url: "https://www.tiktok.com/@ing.marlon.perez?_r=1&_t=ZS-94YLWjKdAjU", icon: TikTokIcon, color: "#ffffff" },
    { label: "Twitch", url: "https://www.twitch.tv/ingmarlonperez2026", icon: TwitchIcon, color: "#9146FF" },
    { label: "Gmail", url: "mailto:malmachi@unemi.edu.ec", icon: Mail, color: "#EA4335" },
];

export function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

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
        <section id="contact" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
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

                {/* Social links grid - Reorganized 5 columns on desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-[var(--neon-cyan)] transition-all group hover:bg-[rgba(255,255,255,0.02)]"
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg"
                                style={{ 
                                    background: `${social.color}20`, 
                                    border: `1px solid ${social.color}40`,
                                    boxShadow: `0 0 15px ${social.color}15`
                                }}
                            >
                                <social.icon className="w-6 h-6" style={{ color: social.color }} />
                            </div>
                            <span className="text-xs font-mono font-medium text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors">
                                {social.label}
                            </span>
                        </motion.a>
                    ))}
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    {/* Contact info */}
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

                        <div className="glass-card rounded-xl p-5 mt-4">
                            <p className="font-mono text-xs text-[var(--text-muted)] mb-2">Áreas de colaboración:</p>
                            <div className="space-y-2">
                                {["Ciberseguridad & Pentesting", "Auditoría IT & Compliance", "Investigación científica IA", "Desarrollo web seguro"].map((area) => (
                                    <div key={area} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)]" />
                                        {area}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-3"
                    >
                        <div className="glass-card rounded-2xl p-6 md:p-8">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-10 text-center gap-4"
                                >
                                    <div className="w-16 h-16 rounded-full bg-[rgba(0,255,136,0.12)] border border-[rgba(0,255,136,0.3)] flex items-center justify-center">
                                        <CheckCircle className="w-8 h-8 text-[var(--neon-green)]" />
                                    </div>
                                    <h3 className="text-[var(--text-primary)] font-bold text-lg font-sans">¡Mensaje enviado!</h3>
                                    <p className="text-[var(--text-secondary)] text-sm">Te responderé a la brevedad posible.</p>
                                    <button onClick={() => setStatus("idle")} className="btn-secondary font-sans text-sm">
                                        Enviar otro mensaje
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="form-label">
                                                <User className="w-3 h-3 inline mr-1" />
                                                Nombre
                                            </label>
                                            <input
                                                className="form-input"
                                                placeholder="Tu nombre"
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="form-label">
                                                <Mail className="w-3 h-3 inline mr-1" />
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-input"
                                                placeholder="tu@email.com"
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="form-label">Asunto</label>
                                        <input
                                            className="form-input"
                                            placeholder="¿En qué puedo ayudarte?"
                                            value={form.subject}
                                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="form-label">Mensaje</label>
                                        <textarea
                                            className="form-input resize-none"
                                            rows={5}
                                            placeholder="Describe tu proyecto o consulta..."
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            required
                                        />
                                    </div>

                                    {status === "error" && (
                                        <p className="text-[var(--neon-red)] text-sm font-mono">{errorMsg}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="btn-primary w-full font-sans justify-center"
                                    >
                                        {status === "loading" ? (
                                            <><Loader2 className="w-4 h-4 animate-spin" />Enviando...</>
                                        ) : (
                                            <><Send className="w-4 h-4" />Enviar Mensaje</>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
