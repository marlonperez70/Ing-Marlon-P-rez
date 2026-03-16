"use client";

import { useEffect, useRef } from "react";

export function MatrixBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const fontSize = 18;
        let columns: number;
        let drops: number[] = [];

        const initMatrix = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            columns = Math.floor(canvas.width / fontSize);
            const newDrops = Array(columns).fill(1);
            for (let i = 0; i < Math.min(drops.length, newDrops.length); i++) {
                newDrops[i] = drops[i];
            }
            drops = newDrops;
        };

        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(initMatrix, 200);
        };

        initMatrix();
        window.addEventListener("resize", handleResize, { passive: true });

        const draw = () => {
            if (!ctx || !canvas) return;
            
            // Fondo con estela (trail)
            ctx.fillStyle = "rgba(2, 4, 8, 0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Fuente en negrita y mono para el estilo Matrix
            ctx.font = `bold ${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = Math.random() > 0.5 ? "0" : "1";
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Color Cian Vibrante (Neon Cyan)
                ctx.fillStyle = "#00F7FF";
                ctx.fillText(text, x, y);

                // Efecto de "Cabeza Brillante"
                if (Math.random() > 0.85) {
                   ctx.fillStyle = "#FFFFFF";
                   ctx.fillText(text, x, y);
                }

                // Resetear la gota
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-70 z-0" />;
}
