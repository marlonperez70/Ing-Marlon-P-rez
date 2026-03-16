"use client";

import { motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="h-screen w-full relative overflow-hidden bg-black"
        >
            {/* 1. THE MAIN TACTICAL IMAGE BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/tactical_high_density_hud.png"
                    alt="Tactical HUD Interface"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                {/* Dark Overlay to ensure readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
            </div>

            {/* 2. LIVE MONITOR EFFECTS (Scanlines & Pulse) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-30" />
                {/* Vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
            </div>

            {/* 3. CENTER CONTENT (Branding & CTAs) */}
            <div className="relative z-20 h-full flex items-center justify-center px-6 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-card bg-black/60 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-xl max-w-2xl w-full"
                >
                    <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                        <div className="w-2 h-2 bg-[#00E5FF] animate-pulse" />
                        <span className="text-[#00E5FF] font-mono text-[9px] tracking-[0.4em] uppercase">
                            Authorized Systems Operator
                        </span>
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white uppercase leading-tight mb-4 text-center md:text-left">
                        Ing. Marlon <br /> <span className="text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]">Pérez Almachi</span>
                    </h1>

                    <p className="text-white/70 text-xs md:text-base max-w-lg mb-8 font-sans tracking-wide leading-relaxed text-center md:text-left">
                        Especialista en <span className="text-white font-bold">Ciberseguridad & Auditoría IT</span>. 
                        Investigador de IA avanzada para la defensa de infraestructuras críticas.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <button onClick={scrollToAbout} className="px-6 py-3 bg-[#00E5FF] text-black text-[10px] uppercase tracking-widest font-black hover:bg-white transition-colors rounded-sm">
                            Ingresar al Sistema
                        </button>
                        <Link href="/investigacion" className="px-6 py-3 border border-white/20 text-white text-[10px] uppercase tracking-widest font-bold hover:bg-white/10 transition-colors rounded-sm">
                            Investigaciones
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* 4. SCROLL INDICATOR */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
            >
                <motion.button
                    onClick={scrollToAbout}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[#00E5FF] hover:text-white transition-colors"
                >
                    <ChevronDown className="w-8 h-8" />
                </motion.button>
            </motion.div>
        </section>
    );
}
