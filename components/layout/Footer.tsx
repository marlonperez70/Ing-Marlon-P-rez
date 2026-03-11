"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Terminal, Github, Linkedin, Mail, ExternalLink, Shield, FlaskConical, ChevronRight, Youtube, Twitter, Disc, Share2, Video } from "lucide-react";

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

// Custom SVG components for official brand logos
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.32 2.51.69 2.51 2.02 0 .03-.01.06-.01.09.33 0 .66.01.99.01 0 2.3 1.8 4.16 4.03 4.24v3.31c-1.3-.01-2.5-.4-3.5-1.1-.01 3.1-.01 6.2-.01 9.3 0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .6 0 .9.1V11c-3.1.1-5.6 2.6-5.6 5.7 0 3.1 2.5 5.6 5.6 5.6s5.6-2.5 5.6-5.6V0h3.3c0 1.1.9 2 2 2v2c-2.2 0-4-1.8-4-4V.02z" />
    </svg>
);

const OrcidIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.541 0 .942.452.942.996 0 .52-.39.985-.942.985-.541 0-.941-.465-.941-.985 0-.544.39-.996.941-.996zM5.03 5.646h4.68v12.708H5.03V5.646zm11.646 12.708h-2.016V5.646h2.016v1.844c.281-.609.938-1.219 2.016-1.219 1.328 0 2.344.859 2.344 2.75v9.333z" />
    </svg>
);

const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ing-marlon-pérez-06ab32303?utm_source=share_via&utm_content=profile&utm_medium=member_android", external: true },
    { icon: Github, label: "GitHub", href: "https://github.com/marlonperez70", external: true },
    { icon: OrcidIcon, label: "ORCID", href: "https://orcid.org/0009-0001-9166-7497", external: true },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@marlonperez-ing?si=Dcoba3IRyh-3u7Eg", external: true },
    { icon: Twitter, label: "X (Twitter)", href: "https://x.com/IngMarlonPere", external: true },
    { icon: Mail, label: "Email", href: "mailto:malmachi@unemi.edu.ec", external: false },
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
                            <div className="flex items-center gap-4 mb-6 group">
                                <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-[var(--neon-cyan)]/20 shadow-[0_0_30px_rgba(0,229,255,0.1)] bg-[rgba(0,229,255,0.03)] transition-all duration-500 group-hover:border-[var(--neon-cyan)]/40">
                                    {/* Subtle highlight */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                                    
                                    <Image
                                        src="/images/logo.png"
                                        alt="Ing. Marlon Pérez Logo"
                                        fill
                                        className="object-cover p-1.5 filter brightness-125 contrast-110"
                                    />
                                </div>
                                <div>
                                    <p className="text-[var(--text-primary)] font-bold text-lg leading-tight group-hover:text-[var(--neon-cyan)] transition-colors">Ing. Marlon Pérez</p>
                                    <p className="text-xs text-[var(--neon-cyan)] font-mono mt-1 uppercase tracking-widest">Cybersecurity & AI</p>
                                </div>
                            </div>
                            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                                Estudiante avanzado de Ingeniería en TI especializado en ciberseguridad y auditoría. Con 10 años de trayectoria en gestión de información crítica y seguridad.
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
