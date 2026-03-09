"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, FlaskConical } from "lucide-react";
import { clsx } from "clsx";
import Link from "next/link";

const navItems = [
    { label: "inicio", href: "#home", isAnchor: true },
    { label: "sobre mí", href: "#about", isAnchor: true },
    { label: "habilidades", href: "#skills", isAnchor: true },
    { label: "experiencia", href: "#experience", isAnchor: true },
    { label: "certificaciones", href: "#certifications", isAnchor: true },
    { label: "investigación", href: "/investigacion", isAnchor: false, highlight: true },
    { label: "contacto", href: "#contact", isAnchor: true },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            const sections = ["home", "about", "skills", "experience", "certifications", "contact"];
            for (const section of [...sections].reverse()) {
                const el = document.getElementById(section);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(section);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-[var(--bg-void)]/90 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2.5"
                    >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-violet)] p-[1px]">
                            <div className="w-full h-full rounded-[7px] bg-[var(--bg-void)] flex items-center justify-center">
                                <Terminal className="w-4 h-4 text-[var(--neon-cyan)]" />
                            </div>
                        </div>
                        <div>
                            <span className="text-[var(--text-primary)] font-semibold text-sm tracking-tight font-sans">
                                Marlon Pérez
                            </span>
                            <p className="text-[var(--neon-cyan)] text-[10px] font-mono leading-none">
                                Cybersecurity & AI
                            </p>
                        </div>
                    </motion.div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.07 }}
                            >
                                {item.isAnchor ? (
                                    <button
                                        onClick={() => handleNavClick(item.href)}
                                        className={clsx(
                                            "px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 capitalize",
                                            activeSection === item.label.replace(" ", "")
                                                ? "text-[var(--neon-cyan)] bg-[rgba(0,229,255,0.08)]"
                                                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"
                                        )}
                                    >
                                        {item.label}
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={clsx(
                                            "px-3 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-1.5",
                                            item.highlight
                                                ? "text-[var(--neon-violet)] border border-[rgba(168,85,247,0.3)] hover:bg-[rgba(168,85,247,0.08)] hover:border-[rgba(168,85,247,0.5)]"
                                                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"
                                        )}
                                    >
                                        {item.highlight && <FlaskConical className="w-3.5 h-3.5" />}
                                        {item.label}
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] rounded-lg hover:bg-white/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[var(--bg-void)]/98 backdrop-blur-xl border-b border-[var(--border-subtle)]"
                    >
                        <nav className="px-4 py-4 space-y-1">
                            {navItems.map((item) =>
                                item.isAnchor ? (
                                    <button
                                        key={item.label}
                                        onClick={() => handleNavClick(item.href)}
                                        className="block w-full text-left px-4 py-2.5 text-sm rounded-lg capitalize text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] hover:bg-[rgba(0,229,255,0.06)] transition-all"
                                    >
                                        {item.label}
                                    </button>
                                ) : (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-lg text-[var(--neon-violet)] hover:bg-[rgba(168,85,247,0.08)] transition-all font-semibold"
                                    >
                                        <FlaskConical className="w-3.5 h-3.5" />
                                        {item.label}
                                    </Link>
                                )
                            )}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
