"use client";

import { motion } from "framer-motion";
import { User, Cpu, Globe, Shield, GraduationCap, Star } from "lucide-react";

const profileData = [
    { icon: User, label: "Identidad", value: "Marlon David Pérez Almachi", color: "text-[var(--neon-cyan)]" },
    { icon: GraduationCap, label: "Formación", value: "Estudiante de Ingeniería en TI (9no Nivel) · UNEMI", color: "text-[var(--neon-violet)]" },
    { icon: Shield, label: "Experiencia", value: "10 años en Seguridad Crítica y Análisis de Datos", color: "text-[var(--neon-green)]" },
    { icon: Cpu, label: "Especialización", value: "Cybersecurity · IT Audit · Artificial Intelligence", color: "text-[var(--neon-cyan)]" },
    { icon: Star, label: "Certificaciones", value: "Cisco · Google · UNEMI", color: "text-[var(--neon-amber)]" },
    { icon: Globe, label: "Idiomas", value: "Español (Nativo) · English (B1.2)", color: "text-[var(--neon-green)]" },
];

const highlights = [
    { subject: "Seguridad de la Información", score: 100 },
    { subject: "Auditoría de Sistemas IT", score: 100 },
    { subject: "Inteligencia Artificial Aplicada", score: 96 },
    { subject: "Computación Móvil", score: 96 },
];

export function AboutSection() {
    return (
        <section id="about" className="py-24 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="section-badge">
                        <User className="w-3 h-3" />
                        Sobre Mí
                    </span>
                    <h2 className="section-title">
                        Perfil <span>Profesional</span>
                    </h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left — Profile card */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass-card rounded-2xl p-6 h-full">
                            {/* Terminal header */}
                            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[var(--border-subtle)]">
                                <div className="flex gap-1.5">
                                    <div className="terminal-dot w-3 h-3 bg-[#ff5f57]" />
                                    <div className="terminal-dot w-3 h-3 bg-[#febc2e]" />
                                    <div className="terminal-dot w-3 h-3 bg-[#28c840]" />
                                </div>
                                <span className="font-mono text-xs text-[var(--text-muted)] ml-2">nmap -sV marlon.profile</span>
                            </div>

                            <div className="space-y-4">
                                {profileData.map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        className="flex gap-3"
                                    >
                                        <div className={`mt-0.5 shrink-0 ${item.color}`}>
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-wider mb-0.5">
                                                {item.label}
                                            </p>
                                            <p className="text-[var(--text-primary)] text-sm font-medium">{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-5 pt-4 border-t border-[var(--border-subtle)]">
                                <p className="font-mono text-xs text-[var(--neon-green)]">
                                    ✓ Scan complete · 6 services · 0 vulnerabilities
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Bio + Academic highlights */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card rounded-2xl p-6"
                        >
                            <h3 className="text-[var(--text-primary)] font-semibold mb-3 font-sans">Trayectoria y Enfoque</h3>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                                Estudiante avanzado de Ingeniería en TI con una sólida trayectoria de{" "}
                                <span className="text-[var(--neon-cyan)] font-semibold">10 años</span> en la gestión de seguridad crítica y análisis de información sensible dentro del sector público. Especializado en el resguardo de infraestructuras de datos, implementación de controles de seguridad y análisis forense digital.
                            </p>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                Mi formación se centra en la convergencia de la Inteligencia Artificial y la Ciberseguridad. Actualmente curso el <span className="text-[var(--neon-green)] font-semibold">9no nivel</span> en la Universidad Estatal de Milagro (UNEMI), manteniendo un promedio de excelencia de <span className="text-[var(--neon-green)] font-semibold">86.08/100</span>.
                            </p>
                        </motion.div>

                        {/* Academic highlights */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="glass-card rounded-2xl p-6"
                        >
                            <h3 className="text-[var(--text-primary)] font-semibold mb-4 font-sans flex items-center gap-2">
                                <Star className="w-4 h-4 text-[var(--neon-amber)]" />
                                Materias destacadas
                            </h3>
                            <div className="space-y-3">
                                {highlights.map((item, i) => (
                                    <motion.div
                                        key={item.subject}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                    >
                                        <div className="skill-header">
                                            <span className="skill-name">{item.subject}</span>
                                            <span className="skill-level">{item.score}/100</span>
                                        </div>
                                        <div className="progress-track">
                                            <motion.div
                                                className="progress-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.score}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
