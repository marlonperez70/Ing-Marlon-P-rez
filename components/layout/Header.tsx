"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FlaskConical } from "lucide-react";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AuthButton } from "@/components/auth/AuthButton";
import { LogoMark } from "@/components/ui/LogoMark";

const navItems = [
    { label: "inicio", href: "/", id: "home" },
    { label: "sobre mí", href: "/#about", id: "about" },
    { label: "habilidades", href: "/#skills", id: "skills" },
    { label: "experiencia", href: "/#experience", id: "experience" },
    { label: "certificaciones", href: "/#certifications", id: "certifications" },
    { label: "investigación", href: "/investigacion", id: "investigacion", highlight: true },
    { label: "contacto", href: "/#contact", id: "contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const pathname = usePathname();
    const router = useRouter();

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setIsMobileMenuOpen(false); };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            if (pathname === "/") {
                const sections = ["home", "about", "skills", "experience", "certifications", "contact"];
                for (const section of [...sections].reverse()) {
                    const el = document.getElementById(section);
                    if (el && el.getBoundingClientRect().top <= 120) {
                        setActiveSection(section);
                        break;
                    }
                }
            } else if (pathname.startsWith("/investigacion")) {
                setActiveSection("investigacion");
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
        setIsMobileMenuOpen(false);
        if (pathname === "/" && item.href.includes("/#")) {
            e.preventDefault();
            const id = item.href.split("#")[1];
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                router.push(item.href, { scroll: false });
            }
        }
    };

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-[var(--bg-void)]/95 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ──────────────────── HEADER ROW ──────────────────── */}
                {/*
                 *  Mobile  (< md):  [Logo 48px] .......................... [Hamburger]
                 *  Desktop (≥ md):  [Logo 56px + Name + Tag] ... [Nav] ... [Auth]
                 */}
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* ── BRAND ── */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        {/* Logo — smaller on mobile */}
                        <LogoMark
                            size={48}
                            animated
                            className={clsx(
                                "md:hidden transition-transform duration-500 group-hover:scale-110",
                                "drop-shadow-[0_0_10px_rgba(0,229,255,0.35)]"
                            )}
                        />
                        <LogoMark
                            size={60}
                            animated
                            className={clsx(
                                "hidden md:block transition-transform duration-500 group-hover:scale-110",
                                "drop-shadow-[0_0_12px_rgba(0,229,255,0.4)] group-hover:drop-shadow-[0_0_24px_rgba(0,229,255,0.7)]"
                            )}
                        />

                        {/* Name + Tag — hidden on small mobile, visible from sm: */}
                        <div className="hidden sm:flex flex-col">
                            <span className="text-[var(--text-primary)] font-bold text-base md:text-lg tracking-tight font-sans block leading-tight group-hover:text-[var(--neon-cyan)] transition-colors whitespace-nowrap">
                                Ing. Marlon Pérez
                            </span>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse shrink-0" />
                                <p className="text-[var(--neon-cyan)] text-[9px] font-mono leading-none uppercase tracking-widest whitespace-nowrap">
                                    Cybersecurity &amp; AI
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* ── DESKTOP NAV ── */}
                    <nav className="hidden md:flex items-center gap-0.5">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.04 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item)}
                                    className={clsx(
                                        "px-2.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 flex items-center gap-1 capitalize whitespace-nowrap",
                                        activeSection === item.id
                                            ? "text-[var(--neon-cyan)] bg-[rgba(0,229,255,0.08)]"
                                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5",
                                        item.highlight && "text-[var(--neon-violet)] font-semibold border border-[rgba(168,85,247,0.2)]"
                                    )}
                                >
                                    {item.highlight && <FlaskConical className="w-3 h-3" />}
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* ── RIGHT SIDE: Auth + Hamburger ── */}
                    <div className="flex items-center gap-2">
                        {/* AuthButton: hidden on small screens, shown on md+ */}
                        <div className="hidden md:block">
                            <AuthButton />
                        </div>

                        {/* Hamburger — only on mobile */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2.5 text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen
                                    ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <X className="w-5 h-5" />
                                      </motion.div>
                                    : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <Menu className="w-5 h-5" />
                                      </motion.div>
                                }
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>

            {/* ──────────────── MOBILE DROPDOWN MENU ──────────────── */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="md:hidden bg-[var(--bg-void)]/98 backdrop-blur-2xl border-b border-[var(--border-subtle)] shadow-2xl"
                    >
                        <nav className="px-4 py-3 space-y-0.5">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => {
                                        handleNavClick(e, item);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={clsx(
                                        "flex items-center gap-3 w-full px-4 py-3 text-sm rounded-xl capitalize transition-all",
                                        activeSection === item.id
                                            ? "text-[var(--neon-cyan)] bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.15)]"
                                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5",
                                        item.highlight && "text-[var(--neon-violet)] font-semibold"
                                    )}
                                >
                                    {item.highlight && <FlaskConical className="w-4 h-4 shrink-0" />}
                                    <span>{item.label}</span>
                                    {activeSection === item.id && (
                                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)]" />
                                    )}
                                </Link>
                            ))}

                            {/* Auth button inside mobile menu */}
                            <div className="pt-2 pb-1 border-t border-[var(--border-subtle)] mt-2">
                                <AuthButton />
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
