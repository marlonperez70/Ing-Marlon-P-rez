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
        const fontSize = 18; // Fuente un poco más grande para mejor legibilidad
        let columns: number;
        let drops: number[] = [];

        const initMatrix = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            columns = Math.floor(canvas.width / fontSize);
            const newDrops = Array(columns).fill(1);
            for (let i = 0; i < Math.min(drops.length, newDrops.length); i++) {
                newDrops[i] = drops[i];
            }
            drops = newDrops;
        };

        initMatrix();
        window.addEventListener("resize", initMatrix);

        const draw = () => {
            // Fondo con estela (trail) - Ajustado para que el rastro sea sutil pero el contraste alto
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

                // Efecto de "Cabeza Brillante": El número más reciente es blanco para resaltar
                // Esto es lo que realmente le da el "contraste" que el usuario busca
                if (Math.random() > 0.85) {
                   ctx.fillStyle = "#FFFFFF";
                   ctx.fillText(text, x, y);
                }

                // Resetear la gota cuando sale de la pantalla o con una pequeña probabilidad aleatoria
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
            window.removeEventListener("resize", initMatrix);
        };
    }, []);

    // Opacidad subida a 0.7 para que los números sean MUY claros
    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-70 z-0" />;
}
