"use client";

import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { MapPin, Shield, Briefcase, ChevronDown } from "lucide-react";

export function HeroSection() {
    const scrollToAbout = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center relative pt-16 px-4"
        >
            {/* ASCII Art Logo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-5xl mx-auto w-full"
            >
                {/* Terminal Prompt */}
                <div className="mb-6 text-sm">
                    <span className="text-[#00ff00]">┌─[</span>
                    <span className="text-[#00ffff]">visitor@marlon-portfolio</span>
                    <span className="text-[#00ff00]">]─[</span>
                    <span className="text-[#ffaa00]">~</span>
                    <span className="text-[#00ff00]">]</span>
                </div>
                <div className="mb-8 text-sm">
                    <span className="text-[#00ff00]">└──$ </span>
                    <TypewriterEffect
                        text="cat /home/marlon/intro.sh && ./intro.sh"
                        speed={40}
                        className="text-[#c0c0c0]"
                    />
                </div>

                {/* Loading Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="mb-6 text-sm text-[#00ff00]"
                >
                    <p>&gt; Initializing profile...</p>
                    <p>&gt; Loading credentials...</p>
                    <p>&gt; Access granted.</p>
                </motion.div>

                {/* Main Content Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                    className="border border-[#00ff0050] bg-[#0d1117]/80 backdrop-blur-sm p-6 sm:p-8 shadow-[0_0_30px_rgba(0,255,0,0.1)]"
                >
                    {/* Top Border */}
                    <div className="text-[#00ff00] mb-4 text-xs sm:text-sm overflow-hidden">
                        ╔══════════════════════════════════════════════════════════════════╗
                    </div>

                    {/* Name */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00ff00] mb-2 text-glow-green">
                        MARLON DAVID PÉREZ ALMACHI
                    </h1>
                    <div className="text-[#00ff00] mb-6 text-xs sm:text-sm">
                        ════════════════════════════════════════
                    </div>

                    {/* Roles */}
                    <div className="space-y-2 mb-6">
                        <p className="text-[#00ffff] flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            <span>&gt; Cybersecurity Specialist</span>
                        </p>
                        <p className="text-[#00ffff] flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            <span>&gt; IT Auditor</span>
                        </p>
                        <p className="text-[#00ffff] flex items-center gap-2">
                            <span className="w-4 h-4 flex items-center justify-center">&lt;/&gt;</span>
                            <span>&gt; Software Engineer</span>
                        </p>
                    </div>

                    {/* Status Info */}
                    <div className="space-y-1 text-sm">
                        <p>
                            <span className="text-[#ffaa00]">[STATUS]:</span>
                            <span className="text-[#00ff00] ml-2">Available for collaboration</span>
                        </p>
                        <p className="flex items-center gap-1">
                            <span className="text-[#ffaa00]">[LOCATION]:</span>
                            <MapPin className="w-3 h-3 text-[#c0c0c0] ml-2" />
                            <span className="text-[#c0c0c0]">Cuenca, Ecuador</span>
                        </p>
                        <p>
                            <span className="text-[#ffaa00]">[CLEARANCE]:</span>
                            <span className="text-[#c0c0c0] ml-2">10 años en Policía Judicial</span>
                        </p>
                    </div>

                    {/* Bottom Border */}
                    <div className="text-[#00ff00] mt-4 text-xs sm:text-sm overflow-hidden">
                        ╚══════════════════════════════════════════════════════════════════╝
                    </div>
                </motion.div>

                {/* Whoami Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 0.5 }}
                    className="mt-8"
                >
                    <p className="text-[#00ff00] mb-2">$ whoami</p>
                    <div className="text-[#c0c0c0] space-y-1 text-sm">
                        <p>&gt; Security-focused engineer with 10+ years in law enforcement</p>
                        <p>&gt; Specialized in IT audit, forensic computing, and AI implementation</p>
                        <p>&gt; Committed to building secure, scalable solutions</p>
                    </div>
                </motion.div>

                {/* Scan Complete */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 0.5 }}
                    className="mt-8 flex flex-col items-center"
                >
                    <p className="text-[#00ff00] text-sm mb-4">
                        [SCAN COMPLETE] Click to explore...
                    </p>
                    <motion.button
                        onClick={scrollToAbout}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 border border-[#00ff00] rounded-full text-[#00ff00] hover:bg-[#00ff0020] transition-colors"
                    >
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ChevronDown className="w-6 h-6" />
                        </motion.div>
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}
