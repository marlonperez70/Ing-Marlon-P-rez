"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const decryptText = (text: string, progress: number) => {
    const chars = "!@#$%^&*()_+[]{};:,.<>?";
    return text
        .split("")
        .map((char, index) => {
            if (char === " ") return " ";
            if (progress > (index / text.length) * 100) return char;
            return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
};

export function IntroLoader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState("initializing");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 1200);
                    return 100;
                }
                const step = prev < 30 ? 1 : prev < 70 ? 2 : 1.5;
                return prev + step;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onComplete]);

    useEffect(() => {
        if (progress > 30) setPhase("authenticating");
        if (progress > 60) setPhase("decrypting_nodes");
        if (progress > 90) setPhase("system_ready");
    }, [progress]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] bg-[var(--bg-void)] flex flex-col items-center justify-center overflow-hidden font-mono"
        >
            {/* Background Grid & Scanline */}
            <div className="absolute inset-0 grid-bg opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--neon-cyan)]/5 to-transparent h-20 w-full animate-scanline pointer-events-none" />

            {/* Cyber HUD Circles */}
            <div className="relative flex items-center justify-center w-80 h-80">
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-[var(--neon-cyan)]/20 rounded-full"
                />
                
                {/* Middle Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border border-[var(--neon-violet)]/30 rounded-full border-t-transparent border-b-transparent"
                />

                {/* Inner Scanning Bar */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-10 rounded-full bg-[var(--neon-cyan)]/5 border border-[var(--neon-cyan)]/40 flex items-center justify-center backdrop-blur-sm"
                >
                    <div className="text-4xl font-bold text-[var(--neon-cyan)] tracking-widest drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">
                        {Math.round(progress)}%
                    </div>
                </motion.div>

                {/* Orbiting Particles */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4 + i, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--neon-cyan)] rounded-full shadow-[0_0_15px_var(--neon-cyan)]" />
                    </motion.div>
                ))}
            </div>

            {/* Status Information */}
            <div className="mt-16 text-center space-y-4 max-w-sm w-full px-6">
                <div className="text-[var(--neon-cyan)] text-xs tracking-[0.3em] uppercase opacity-80 mb-2">
                    Security Protocol: {phase}
                </div>
                
                <div className="h-1 bg-white/5 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-violet)]"
                    />
                </div>

                <div className="text-[var(--text-secondary)] text-[10px] leading-relaxed flex flex-col items-center">
                    <span className="text-[var(--neon-green)] mb-1">
                        {isMounted ? decryptText("ACCESSING SECURE NODES...", progress) : ".........................."}
                    </span>
                    <div className="flex gap-4 opacity-40">
                        <span>IP: 192.168.1.104</span>
                        <span>ENC: AES-256</span>
                        <span>SIG: MARLON_PROT</span>
                    </div>
                </div>
            </div>

            {/* Corner Data Widgets */}
            <div className="absolute top-10 left-10 hidden lg:block">
                <div className="text-[var(--neon-cyan)]/30 text-[9px] font-mono space-y-1 border-l border-[var(--neon-cyan)]/20 pl-3">
                    <div>CPU_LOAD: 24%</div>
                    <div>MEM_USAGE: 1.2GB</div>
                    <div>NET_ESTABLISHED: TRUE</div>
                </div>
            </div>

            <div className="absolute bottom-10 right-10 hidden lg:block">
                <div className="text-[var(--neon-violet)]/30 text-[9px] font-mono space-y-1 border-r border-[var(--neon-violet)]/20 pr-3 text-right">
                    <div>USER: MARLON_PÉREZ</div>
                    <div>LEVEL: SPECIALIST</div>
                    <div>V: 3.1.0_FUI</div>
                </div>
            </div>
        </motion.div>
    );
}
