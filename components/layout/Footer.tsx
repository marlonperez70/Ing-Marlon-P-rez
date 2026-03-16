"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Terminal, Github, Linkedin, Mail, ExternalLink, Shield, FlaskConical, ChevronRight, Youtube, Twitter, Copy } from "lucide-react";
import { clsx } from "clsx";
import { LogoMark } from "@/components/ui/LogoMark";

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

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.32 2.51.69 2.51 2.02 0 .03-.01.06-.01.09.33 0 .66.01.99.01 0 2.3 1.8 4.16 4.03 4.24v3.31c-1.3-.01-2.5-.4-3.5-1.1-.01 3.1-.01 6.2-.01 9.3 0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .6 0 .9.1V11c-3.1.1-5.6 2.6-5.6 5.7 0 3.1 2.5 5.6 5.6 5.6s5.6-2.5 5.6-5.6V0h3.3c0 1.1.9 2 2 2v2c-2.2 0-4-1.8-4-4V.02z" />
    </svg>
);

const OrcidIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.541 0 .942.452.942.996 0 .52-.39.985-.942.985-.541 0-.941-.465-.941-.985 0-.544.39-.996.941-.996zM5.03 5.646h4.68v12.708H5.03V5.646zm11.646 12.708h-2.016V5.646h2.016v1.844c.281-.609.938-1.219 2.016-1.219 1.328 0 2.344.859 2.344 2.75v9.333h-2.016z" />
    </svg>
);

const RedditIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.051l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.945 0 1.712.767 1.712 1.712 0 .593-.306 1.113-.773 1.415.033.207.051.419.051.632 0 2.335-2.658 4.23-5.94 4.23-3.281 0-5.94-1.895-5.94-4.23 0-.213.018-.425.051-.632a1.702 1.702 0 0 1-.773-1.415c0-.945.767-1.712 1.712-1.712.477 0 .899.182 1.207.491 1.194-.856 2.85-1.419 4.674-1.488l.82-3.818a.125.125 0 0 1 .144-.098l2.811.592c.048-.239.247-.42.496-.42zM8.561 13.14c-.6 0-1.09.49-1.09 1.09 0 .6.49 1.09 1.09 1.09.6 0 1.09-.49 1.09-1.09 0-.6-.49-1.09-1.09-1.09zm6.878 0c-.6 0-1.09.49-1.09 1.09 0 .6.49 1.09 1.09 1.09.6 0 1.09-.49 1.09-1.09 0-.6-.49-1.09-1.09-1.09zm-2.565 3.774a3.847 3.847 0 0 1-2.473-.901.125.125 0 0 0-.164.188c.56.513 1.27.824 2.045.824.775 0 1.485-.311 2.046-.824a.125.125 0 0 0-.164-.188 3.847 3.847 0 0 1-2.474.901z" />
    </svg>
);

const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ing-marlon-pérez-06ab32303?utm_source=share_via&utm_content=profile&utm_medium=member_android", external: true, brandColor: "#0077B5" },
    { icon: Github, label: "GitHub", href: "https://github.com/marlonperez70", external: true, brandColor: "#ffffff" },
    { icon: OrcidIcon, label: "ORCID", href: "https://orcid.org/0009-0001-9166-7497", external: true, brandColor: "#A6CE39" },
    { icon: RedditIcon, label: "Reddit", href: "https://www.reddit.com/u/Commercial_Report276/s/AExrG2IXnP", external: true, brandColor: "#FF4500" },
    { icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@ing.marlon.perez?_r=1&_t=ZS-94YLWjKdAjU", external: true, brandColor: "#ffffff" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@marlonperez-ing?si=Dcoba3IRyh-3u7Eg", external: true, brandColor: "#FF0000" },
    { icon: Twitter, label: "X (Twitter)", href: "https://x.com/IngMarlonPere", external: true, brandColor: "#ffffff" },
    { 
        icon: Mail, 
        label: "Email", 
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=malmachi@unemi.edu.ec", 
        external: false, 
        brandColor: "#00E5FF", 
        isEmail: true, 
        emailValue: "malmachi@unemi.edu.ec" 
    },
];

export function Footer() {
    const [copied, setCopied] = useState(false);

    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const handleSocialClick = (social: typeof socialLinks[0]) => {
        if (social.isEmail) {
            // Abrir Gmail Web directamente
            window.open(social.href, "_blank");
            if (social.emailValue) {
                navigator.clipboard.writeText(social.emailValue);
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            }
        }
    };

    return (
        <footer className="relative border-t border-[var(--border-subtle)] bg-[var(--bg-void)] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent opacity-30" />

            <AnimatePresence>
                {copied && (
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-10 right-10 z-50 bg-[var(--neon-cyan)] text-black px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] flex items-center gap-2">
                        <Copy className="w-4 h-4" /> Email copiado
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="md:col-span-1">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-6">
                            <div className="flex items-center gap-4 mb-6 group cursor-pointer" onClick={() => scrollTo("#home")}>
                                <LogoMark size={88} animated className="transition-transform duration-500 group-hover:scale-105 shrink-0" />
                                <div>
                                    <p className="text-[var(--text-primary)] font-bold text-lg leading-tight group-hover:text-[var(--neon-cyan)] transition-colors">Ing. Marlon Pérez</p>
                                    <p className="text-xs text-[var(--neon-cyan)] font-mono mt-1 uppercase tracking-widest">Cybersecurity & AI</p>
                                </div>
                            </div>
                            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                                Estudiante avanzado de Ingeniería en TI especializado en ciberseguridad y auditoría.
                            </p>
                        </motion.div>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-[var(--text-primary)] font-semibold text-sm mb-4">{category}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        {link.isAnchor ? (
                                            <button onClick={() => scrollTo(link.href)} className="text-[var(--text-muted)] hover:text-[var(--neon-cyan)] text-sm transition-colors flex items-center gap-1.5 group">
                                                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> {link.label}
                                            </button>
                                        ) : (
                                            <Link href={link.href} className="text-[var(--text-muted)] hover:text-[var(--neon-violet)] text-sm transition-colors flex items-center gap-1.5 group">
                                                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h4 className="text-[var(--text-primary)] font-semibold text-sm mb-4">Conectar</h4>
                        <div className="space-y-2.5 mb-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.isEmail ? undefined : social.href}
                                    onClick={social.isEmail ? () => handleSocialClick(social) : undefined}
                                    target={social.isEmail ? undefined : "_blank"}
                                    rel={social.isEmail ? undefined : "noopener noreferrer"}
                                    className="flex items-center gap-3 text-[var(--text-muted)] transition-all group text-sm hover:text-[var(--text-primary)] cursor-pointer"
                                >
                                    <div className="w-8 h-8 rounded-lg border border-[var(--border-subtle)] flex items-center justify-center transition-all duration-300 group-hover:border-current relative" style={{ color: social.brandColor }}>
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-sm rounded-lg" style={{ background: social.brandColor }} />
                                        <social.icon className="w-3.5 h-3.5 relative z-10" />
                                    </div>
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
