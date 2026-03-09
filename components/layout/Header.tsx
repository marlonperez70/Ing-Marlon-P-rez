"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, FlaskConical } from "lucide-react";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
        setIsMobileMenuOpen(false);
        
        // If we are on home and clicking an anchor on home
        if (pathname === "/" && item.href.startsWith("/#")) {
            e.preventDefault();
            const id = item.href.replace("/#", "");
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
            router.push(item.href, { scroll: false });
        }
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
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-violet)] p-[1px] transition-transform group-hover:scale-105">
                            <div className="w-full h-full rounded-[7px] bg-[var(--bg-void)] flex items-center justify-center">
                                <Terminal className="w-4 h-4 text-[var(--neon-cyan)]" />
                            </div>
                        </div>
                        <div>
                            <span className="text-[var(--text-primary)] font-semibold text-sm tracking-tight font-sans block">
                                Marlon Pérez
                            </span>
                            <p className="text-[var(--neon-cyan)] text-[10px] font-mono leading-none">
                                Cybersecurity & AI
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item)}
                                    className={clsx(
                                        "px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 capitalize",
                                        activeSection === item.id
                                            ? "text-[var(--neon-cyan)] bg-[rgba(0,229,255,0.08)]"
                                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5",
                                        item.highlight && "text-[var(--neon-violet)] font-semibold border border-[rgba(168,85,247,0.2)]"
                                    )}
                                >
                                    {item.highlight && <FlaskConical className="w-3.5 h-3.5" />}
                                    {item.label}
                                </Link>
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
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => {
                                        handleNavClick(e, item);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={clsx(
                                        "block w-full text-left px-4 py-2.5 text-sm rounded-lg capitalize transition-all",
                                        activeSection === item.id
                                            ? "text-[var(--neon-cyan)] bg-[rgba(0,229,255,0.08)]"
                                            : "text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] hover:bg-[rgba(0,229,255,0.06)]",
                                        item.highlight && "text-[var(--neon-violet)] font-semibold"
                                    )}
                                >
                                    <span className="flex items-center gap-2">
                                        {item.highlight && <FlaskConical className="w-3.5 h-3.5" />}
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
