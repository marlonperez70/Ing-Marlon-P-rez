"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal, Github, Linkedin, Mail, ExternalLink, Shield, FlaskConical, ChevronRight } from "lucide-react";

const footerLinks = {
    "Portafolio": [
        { label: "Inicio", href: "#home", isAnchor: true },
        { label: "Sobre Mí", href: "#about", isAnchor: true },
        { label: "Habilidades", href: "#skills", isAnchor: true },
        { label: "Experiencia", href: "#experience", isAnchor: true },
        { label: "Certificaciones", href: "#certifications", isAnchor: true },
        { label: "Contacto", href: "#contact", isAnchor: true },
    ],
    "Investigación": [
        { label: "Proyectos Científicos", href: "/investigacion", isAnchor: false },
        { label: "IA en Ciberseguridad", href: "/investigacion/ia-deteccion-amenazas-ciberseguridad", isAnchor: false },
        { label: "Auditoría TIS", href: "/investigacion/auditoria-tis-marcos-control", isAnchor: false },
    ],
};

const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/marlonperez", external: true },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/marlonperez", external: true },
    { icon: Mail, label: "Email", href: "mailto:marlon@example.com", external: false },
];

const techs = ["Next.js 15", "TypeScript", "Supabase", "Groq AI", "Vercel"];

export function Footer() {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-[var(--border-subtle)] bg-[var(--bg-void)]">
            {/* Top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent opacity-30" />

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-violet)] p-[1px]">
                                    <div className="w-full h-full rounded-[10px] bg-[var(--bg-void)] flex items-center justify-center">
                                        <Terminal className="w-4 h-4 text-[var(--neon-cyan)]" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[var(--text-primary)] font-bold text-sm">Marlon Pérez</p>
                                    <p className="text-[10px] text-[var(--neon-cyan)] font-mono">Cybersecurity & AI</p>
                                </div>
                            </div>
                            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                                Ingeniero en TI especializado en ciberseguridad, auditoría y sistemas de IA. Ex-agente investigador con 10 años en Policía Judicial.
                            </p>
                        </motion.div>

                        {/* System Status */}
                        <div className="bg-[var(--bg-glass)] border border-[var(--border-subtle)] rounded-xl p-4 font-mono text-xs">
                            <div className="flex items-center gap-2 mb-3">
                                <Shield className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
                                <span className="text-[var(--neon-cyan)]">SYSTEM STATUS</span>
                            </div>
                            <div className="space-y-1.5">
                                <div className="flex justify-between">
                                    <span className="text-[var(--text-muted)]">Status</span>
                                    <span className="text-[var(--neon-green)] flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-[var(--neon-green)] rounded-full inline-block animate-pulse" />
                                        ONLINE
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[var(--text-muted)]">Location</span>
                                    <span className="text-[var(--text-secondary)]">Cuenca, EC</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[var(--text-muted)]">Open to</span>
                                    <span className="text-[var(--neon-amber)]">Collaborate</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <motion.h4
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-[var(--text-primary)] font-semibold text-sm mb-4 flex items-center gap-2"
                            >
                                {category === "Investigación" && <FlaskConical className="w-3.5 h-3.5 text-[var(--neon-violet)]" />}
                                {category}
                            </motion.h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        {link.isAnchor ? (
                                            <button
                                                onClick={() => scrollTo(link.href)}
                                                className="text-[var(--text-muted)] hover:text-[var(--neon-cyan)] text-sm transition-colors flex items-center gap-1.5 group"
                                            >
                                                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--neon-cyan)]" />
                                                {link.label}
                                            </button>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-[var(--text-muted)] hover:text-[var(--neon-violet)] text-sm transition-colors flex items-center gap-1.5 group"
                                            >
                                                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--neon-violet)]" />
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social & Tech Column */}
                    <div>
                        <h4 className="text-[var(--text-primary)] font-semibold text-sm mb-4">Conectar</h4>
                        <div className="space-y-2.5 mb-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target={social.external ? "_blank" : undefined}
                                    rel={social.external ? "noopener noreferrer" : undefined}
                                    className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors group text-sm"
                                >
                                    <div className="w-8 h-8 rounded-lg border border-[var(--border-subtle)] flex items-center justify-center group-hover:border-[var(--border-active)] group-hover:bg-[rgba(0,229,255,0.06)] transition-all">
                                        <social.icon className="w-3.5 h-3.5" />
                                    </div>
                                    {social.label}
                                    {social.external && <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                                </a>
                            ))}
                        </div>

                        <h4 className="text-[var(--text-primary)] font-semibold text-sm mb-3">Construido con</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {techs.map((tech) => (
                                <span key={tech} className="badge badge-cyan text-[10px] px-2 py-0.5">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-[var(--text-muted)] text-xs font-mono">
                        © {new Date().getFullYear()} Ing. Marlon David Pérez Almachi — All rights reserved
                    </p>
                    <p className="text-[var(--text-muted)] text-xs font-mono flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[var(--neon-green)] rounded-full animate-pulse" />
                        Portfolio v2.0 — Powered by Groq AI & Supabase
                    </p>
                </div>
            </div>
        </footer>
    );
}
