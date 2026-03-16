"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MatrixBackground } from "./MatrixBackground";

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

    // El "Guardián de Salida": dispara el evento fuera del render loop
    useEffect(() => {
        if (progress === 100) {
            const timer = setTimeout(() => {
                onComplete();
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[9999] bg-[#020408] flex flex-col items-center justify-center overflow-hidden font-mono"
        >
            <MatrixBackground />
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
                    <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-dashed border-[var(--neon-cyan)]/20 rounded-full" 
                    />
                    <div className="text-5xl md:text-6xl font-black text-white drop-shadow-[0_0_15px_#00E5FF]">
                        {progress}%
                    </div>
                </div>

                <div className="mt-12 text-center space-y-4">
                    <div className="text-[var(--neon-cyan)] text-[10px] tracking-[0.5em] uppercase font-black">
                        ING. MARLON PÉREZ
                    </div>
                    <div className="h-1 w-48 bg-white/5 rounded-full overflow-hidden border border-white/10 mx-auto">
                        <div className="h-full bg-[var(--neon-cyan)]" style={{ width: `${progress}%` }} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
