"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { clsx } from "clsx";

const navItems = [
    { label: "home", href: "#home", command: "cd ~" },
    { label: "about", href: "#about", command: "cat about.txt" },
    { label: "skills", href: "#skills", command: "./skill-scanner.sh" },
    { label: "experience", href: "#experience", command: "git log" },
    { label: "certifications", href: "#certifications", command: "ls -lah" },
    { label: "contact", href: "#contact", command: "mail -s 'Hello'" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map((item) => item.label);
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#00ff0030] shadow-[0_0_20px_rgba(0,255,0,0.1)]"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Prompt */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                    >
                        <Terminal className="w-5 h-5 text-[#00ff00]" />
                        <span className="text-[#00ff00] text-sm sm:text-base font-semibold">
                            root@security:~$
                        </span>
                        <span className="text-[#c0c0c0] text-sm hidden sm:inline">
                            ./marlon-perez --portfolio
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.label}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handleNavClick(item.href)}
                                className={clsx(
                                    "px-3 py-1.5 text-sm transition-all duration-200 rounded group relative",
                                    activeSection === item.label
                                        ? "text-[#00ff00] bg-[#00ff0010]"
                                        : "text-[#c0c0c0] hover:text-[#00ff00]"
                                )}
                            >
                                <span className="text-[#00ffff]">[</span>
                                {item.label}
                                <span className="text-[#00ffff]">]</span>

                                {/* Tooltip with command */}
                                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-[#0d1117] border border-[#00ff0030] text-[#00ff00] text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    $ {item.command}
                                </span>
                            </motion.button>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-[#00ff00] hover:bg-[#00ff0010] rounded transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
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
                        className="md:hidden bg-[#0d1117] border-b border-[#00ff0030] overflow-hidden"
                    >
                        <nav className="px-4 py-4 space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => handleNavClick(item.href)}
                                    className={clsx(
                                        "block w-full text-left px-4 py-2 text-sm transition-all duration-200 rounded",
                                        activeSection === item.label
                                            ? "text-[#00ff00] bg-[#00ff0010]"
                                            : "text-[#c0c0c0] hover:text-[#00ff00] hover:bg-[#00ff0010]"
                                    )}
                                >
                                    <span className="text-[#00ff00]">$ </span>
                                    {item.command}
                                </button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
