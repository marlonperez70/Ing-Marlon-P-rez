"use client";

import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { MapPin, Shield, Brain, ChevronDown, Sparkles, ExternalLink } from "lucide-react";
import Link from "next/link";

const roles = [
    { icon: Shield, label: "Cybersecurity Specialist", color: "text-[var(--neon-cyan)]" },
    { icon: Brain, label: "AI Researcher", color: "text-[var(--neon-violet)]" },
    { icon: Sparkles, label: "IT Auditor & Forensics", color: "text-[var(--neon-green)]" },
];

export function HeroSection() {
    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 px-4"
        >
            {/* Grid background */}
            <div className="absolute inset-0 grid-bg opacity-40" />

            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-cyan)] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-violet)] opacity-[0.05] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto w-full relative z-10">
                {/* Eyebrow badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <span className="section-badge">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)] animate-pulse" />
                        Disponible para colaborar
                    </span>
                </motion.div>

                {/* Terminal prompt */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-4 font-mono text-sm text-[var(--text-muted)]"
                >
                    <span className="text-[var(--neon-green)]">visitor@marlon:~$ </span>
                    <TypewriterEffect
                        text="cat perfil-profesional.json"
                        speed={45}
                        className="text-[var(--text-secondary)]"
                    />
                </motion.div>

                {/* Main heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.7 }}
                >
                    <h1 className="mb-4 leading-tight">
                        <span className="text-[var(--text-primary)]">Marlon David</span>
                        <br />
                        <span className="gradient-text">Pérez Almachi</span>
                    </h1>
                    <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl leading-relaxed font-sans">
                        Estudiante avanzado de Ingeniería en TI · Especialista en Seguridad con{" "}
                        <span className="text-[var(--neon-cyan)] font-semibold">10 años</span> de trayectoria en gestión de información crítica y ciberseguridad.
                        Enfocado en la convergencia de la IA y el análisis forense digital.
                    </p>
                </motion.div>

                {/* Roles */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex flex-wrap gap-3 mb-10"
                >
                    {roles.map((role) => (
                        <div
                            key={role.label}
                            className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium"
                        >
                            <role.icon className={`w-4 h-4 ${role.color}`} />
                            <span className="text-[var(--text-secondary)]">{role.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Meta info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="flex flex-wrap gap-4 mb-10 text-sm text-[var(--text-muted)] font-mono"
                >
                    <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
                        Cuenca, Ecuador
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="text-[var(--neon-green)]">●</span>
                        UNEMI — 9no Nivel · 86.08/100
                    </span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                    className="flex flex-wrap gap-4 mb-16"
                >
                    <button onClick={scrollToAbout} className="btn-primary font-sans">
                        Ver Perfil Completo
                    </button>
                    <Link href="/investigacion" className="btn-secondary font-sans">
                        Investigaciones
                        <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.1, duration: 0.6 }}
                    className="grid grid-cols-3 gap-4 max-w-md"
                >
                    {[
                        { value: "10+", label: "Años exp." },
                        { value: "86.08", label: "Promedio UNEMI" },
                        { value: "100%", label: "Cybersec Score" },
                    ].map((stat) => (
                        <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                            <p className="text-2xl font-bold gradient-text font-mono">{stat.value}</p>
                            <p className="text-xs text-[var(--text-muted)] mt-1 font-sans">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <motion.button
                    onClick={scrollToAbout}
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors"
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.button>
            </motion.div>
        </section>
    );
}
