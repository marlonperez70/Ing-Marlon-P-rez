"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MatrixBackground } from "./MatrixBackground";
import { LogoMark } from "./LogoMark";

export function IntroLoader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            const timer = setTimeout(() => onComplete(), 400);
            return () => clearTimeout(timer);
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[9999] bg-[#020408] flex flex-col items-center justify-center gap-10 overflow-hidden font-mono"
        >
            <MatrixBackground />

            {/* ── LOGO SECTION ── perfectly centered, no text inside ── */}
            <div className="relative z-10 flex items-center justify-center w-64 h-64 md:w-72 md:h-72">

                {/* Outermost slow-pulse ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border border-[var(--neon-cyan)]/15"
                    animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Rotating dashed ring */}
                <motion.div
                    className="absolute inset-4 rounded-full border-2 border-dashed border-[var(--neon-cyan)]/25"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                />

                {/* Counter-rotating inner ring */}
                <motion.div
                    className="absolute inset-8 rounded-full border border-[var(--neon-cyan)]/15"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Logo — centered, no other elements competing */}
                <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <LogoMark
                        size={160}
                        animated
                        className="drop-shadow-[0_0_40px_rgba(0,229,255,0.55)]"
                    />
                </motion.div>
            </div>

            {/* ── PROGRESS SECTION — fully outside the logo circle ── */}
            <div className="relative z-10 flex flex-col items-center gap-4 w-64">
                {/* Percentage counter */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl font-black text-white tabular-nums drop-shadow-[0_0_18px_#00E5FF]"
                >
                    {String(progress).padStart(3, "\u2007")}
                    <span className="text-2xl text-[var(--neon-cyan)]">%</span>
                </motion.div>

                {/* Brand label */}
                <div className="text-[var(--neon-cyan)] text-[10px] tracking-[0.6em] uppercase font-black">
                    ING. MARLON PÉREZ
                </div>

                {/* Progress bar */}
                <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[var(--neon-cyan)] to-[#00b4d8] rounded-full"
                        style={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>
            </div>
        </motion.div>
    );
}
