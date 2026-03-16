"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
            {/* 1. BACKGROUND IMAGE (Positioned to the right) */}
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    <Image
                        src="/images/tactical_high_density_hud.png"
                        alt="Tactical HUD"
                        fill
                        className="object-cover object-right opacity-50"
                        priority
                    />
                    {/* THE "SAFE ZONE" GRADIENT: Fades from black (left) to transparent (right) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                    {/* Bottom fade to blend with next section */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                </div>
            </div>

            {/* 2. CLEAN CONTENT (No boxes, no noise) */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic tracking-tighter text-white uppercase leading-[0.85] mb-6 md:mb-8">
                        Ing. Marlon <br /> 
                        <span className="text-[#00E5FF] drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Pérez</span>
                    </h1>

                    <p className="text-white/50 text-xs sm:text-sm md:text-lg font-sans tracking-[0.15em] md:tracking-[0.2em] leading-relaxed mb-8 md:mb-12 max-w-lg uppercase">
                        Cybersecurity Specialist <span className="mx-2 text-white/20">|</span> 
                        IT Auditor <span className="mx-2 text-white/20">|</span> 
                        AI Researcher
                    </p>

                    <div className="flex flex-wrap gap-6 md:gap-10">
                        <button 
                            onClick={scrollToAbout} 
                            className="group relative flex items-center gap-4 text-white transition-all"
                        >
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black group-hover:text-[#00E5FF]">Explorar Portafolio</span>
                            <div className="w-10 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-[#00E5FF] transition-all" />
                        </button>
                        
                        <Link href="/investigacion" className="group flex items-center gap-4 text-white/40 hover:text-white transition-all">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Investigación I+D</span>
                            <div className="w-8 h-[1px] bg-white/10 group-hover:bg-white/40 transition-all" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* 3. DISCREET SCROLL INDICATOR */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
            >
                <div className="flex flex-col items-center gap-3">
                    <span className="text-[8px] text-white/20 tracking-[0.5em] uppercase rotate-90 mb-4">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-[#00E5FF] to-transparent animate-pulse" />
                </div>
            </motion.div>
        </section>
    );
}
