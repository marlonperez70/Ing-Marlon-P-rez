"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, Loader2, CheckCircle, FileText } from "lucide-react";

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
        { icon: Mail, label: "Email", value: "marlon.perez@unemi.edu.ec", color: "var(--neon-cyan)" },
        { icon: MessageSquare, label: "LinkedIn", value: "linkedin.com/in/marlonperez", color: "var(--neon-violet)" },
        { icon: FileText, label: "CV", value: "Disponible bajo solicitud", color: "var(--neon-green)" },
    ];

    return (
        <section id="contact" className="py-24 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="section-badge">
                        <Mail className="w-3 h-3" />
                        Contacto
                    </span>
                    <h2 className="section-title">
                        Hablemos de <span>Colaborar</span>
                    </h2>
                    <div className="section-divider" />
                    <p className="text-[var(--text-secondary)] max-w-xl font-sans">
                        ¿Tienes un proyecto de ciberseguridad, auditoría IT o investigación? Estoy disponible para colaborar.
                    </p>
                </motion.div>

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
